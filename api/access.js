/* GET /api/access?reference=…
   Verifies a Paystack reference server-side and, only for a successful
   ₦8,800 course payment, returns the Telegram invite links. The links live
   in Vercel env vars and never appear in the page source or the repo. */

const { PRICE_KOBO, CURRENCY, PRODUCT_ID, paystack, readMetadata } = require("./_paystack");

const REFERENCE_RE = /^[A-Za-z0-9.=-]{1,100}$/;

function isPaidForCourse(tx) {
  if (!tx || tx.status !== "success") { return false; }
  if (tx.currency !== CURRENCY) { return false; }
  /* requested_amount is the price we asked for; amount can be higher when
     fees are passed to the customer, so compare against the floor. */
  const paid = Number(tx.requested_amount != null ? tx.requested_amount : tx.amount);
  if (!(paid >= PRICE_KOBO)) { return false; }
  return readMetadata(tx.metadata).product === PRODUCT_ID;
}

module.exports = async function access(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ paid: false, error: "Method not allowed." });
  }

  const reference = String((req.query && req.query.reference) || "");
  if (!REFERENCE_RE.test(reference)) {
    return res.status(400).json({ paid: false, reason: "missing-reference" });
  }

  let result;
  try {
    result = await paystack("/transaction/verify/" + encodeURIComponent(reference), { method: "GET" });
  } catch (err) {
    console.error("access: Paystack request failed", err.message);
    return res.status(502).json({ paid: false, reason: "unreachable" });
  }

  const tx = result.body && result.body.data;
  if (!result.ok || !result.body || !result.body.status || !isPaidForCourse(tx)) {
    /* A "success" that fails the amount/currency/product checks is still not
       a course purchase; don't echo it back as success. */
    const reason = !tx ? "not-found" : tx.status === "success" ? "not-eligible" : tx.status;
    /* "Not paid" is a normal answer, not a failed request: 200 keeps the
       buyer's console clean. 4xx is reserved for malformed requests. */
    return res.status(200).json({ paid: false, reason });
  }

  const vault = process.env.TELEGRAM_VAULT_URL;
  const signal = process.env.TELEGRAM_SIGNAL_URL;
  if (!vault || !signal) {
    console.error("access: TELEGRAM_VAULT_URL / TELEGRAM_SIGNAL_URL not set");
    return res.status(500).json({ paid: true, reason: "links-missing" });
  }

  return res.status(200).json({
    paid: true,
    email: tx.customer && tx.customer.email,
    links: { vault, signal }
  });
};
