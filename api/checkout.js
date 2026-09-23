/* POST /api/checkout  { name, email }
   Creates a Paystack transaction for the course and returns the hosted
   checkout URL. Paystack sends the buyer back to /confirmation.html with
   ?reference=… appended once they've paid. */

const { PRICE_KOBO, CURRENCY, PRODUCT_ID, paystack, readJsonBody } = require("./_paystack");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function siteOrigin(req) {
  if (process.env.SITE_URL) { return process.env.SITE_URL.replace(/\/+$/, ""); }
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const proto = req.headers["x-forwarded-proto"] || (/^localhost|^127\./.test(host) ? "http" : "https");
  return proto + "://" + host;
}

module.exports = async function checkout(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const body = readJsonBody(req);
  const name = String(body.name || "").trim().slice(0, 100);
  const email = String(body.email || "").trim().toLowerCase();

  if (!name) {
    return res.status(400).json({ error: "Enter your name.", field: "name" });
  }
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "Enter a valid email address, like you@gmail.com.", field: "email" });
  }

  let result;
  try {
    result = await paystack("/transaction/initialize", {
      method: "POST",
      body: JSON.stringify({
        email,
        amount: String(PRICE_KOBO),
        currency: CURRENCY,
        callback_url: siteOrigin(req) + "/confirmation.html",
        metadata: JSON.stringify({
          product: PRODUCT_ID,
          full_name: name,
          custom_fields: [
            { display_name: "Full name", variable_name: "full_name", value: name }
          ]
        })
      })
    });
  } catch (err) {
    console.error("checkout: Paystack request failed", err.message);
    return res.status(502).json({ error: "We couldn't reach the payment page. Check your connection and try again." });
  }

  const url = result.body && result.body.data && result.body.data.authorization_url;
  if (!result.ok || !result.body || !result.body.status || !url) {
    console.error("checkout: initialize rejected", result.status, result.body && result.body.message);
    return res.status(502).json({ error: "We couldn't start checkout. Please try again in a moment." });
  }

  return res.status(200).json({ url });
};
