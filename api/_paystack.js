/* Shared Paystack helpers. The leading underscore keeps Vercel from
   exposing this file as its own route. */

const PAYSTACK_API = "https://api.paystack.co";

/* ₦8,800 in kobo. Paystack amounts are always in the currency's subunit. */
const PRICE_KOBO = 880000;
const CURRENCY = "NGN";

/* Stamped into metadata so access.js only honours references created by
   this checkout, not any other payment on the same Paystack account. */
const PRODUCT_ID = "breakthrough-edit-system";

function secretKey() {
  const key = process.env.PAYSTACK_SECRET_KEY;
  if (!key) { throw new Error("PAYSTACK_SECRET_KEY is not set"); }
  return key;
}

async function paystack(path, init) {
  const res = await fetch(PAYSTACK_API + path, {
    ...init,
    headers: {
      Authorization: "Bearer " + secretKey(),
      "Content-Type": "application/json",
      ...(init && init.headers)
    }
  });
  const body = await res.json().catch(() => null);
  return { ok: res.ok, status: res.status, body };
}

/* Paystack returns metadata either as an object or as the JSON string we sent. */
function readMetadata(meta) {
  if (!meta) { return {}; }
  if (typeof meta === "object") { return meta; }
  try { return JSON.parse(meta); } catch (e) { return {}; }
}

function readJsonBody(req) {
  if (req.body && typeof req.body === "object") { return req.body; }
  if (typeof req.body === "string") {
    try { return JSON.parse(req.body); } catch (e) { return {}; }
  }
  return {};
}

module.exports = { PRICE_KOBO, CURRENCY, PRODUCT_ID, paystack, readMetadata, readJsonBody };
