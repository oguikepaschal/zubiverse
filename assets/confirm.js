/* Confirmation page: verify the Paystack reference before showing access.
   Paystack returns buyers here as confirmation.html?reference=…&trxref=… */
(function () {
  "use strict";

  var status = document.querySelector("[data-status]");
  var statusText = document.querySelector("[data-status-text]");
  var statusPct = document.querySelector("[data-status-pct]");
  var paidBlock = document.querySelector("[data-paid]");
  var unpaidBlock = document.querySelector("[data-unpaid]");
  var unpaidText = document.querySelector("[data-unpaid-text]");
  if (!status || !paidBlock || !unpaidBlock) { return; }

  var params = new URLSearchParams(window.location.search);
  var reference = params.get("reference") || params.get("trxref") || "";

  function setState(state, text, pct) {
    status.setAttribute("data-state", state);
    statusText.textContent = text;
    statusPct.textContent = pct || "";
  }

  function showUnpaid(message) {
    setState("failed", "Payment not confirmed", "");
    if (message) { unpaidText.textContent = message; }
    unpaidBlock.hidden = false;
  }

  function showPaid(links) {
    document.querySelectorAll("[data-link]").forEach(function (a) {
      var url = links[a.getAttribute("data-link")];
      if (url) { a.href = url; }
    });
    setState("done", "Order confirmed", "100%");
    paidBlock.hidden = false;
  }

  if (!reference) {
    showUnpaid("This page opens after checkout. If you've already paid, use the link Paystack sent you back to, or email us from the address you paid with.");
    return;
  }

  setState("checking", "Checking your payment…", "");

  fetch("/api/access?reference=" + encodeURIComponent(reference), {
    headers: { Accept: "application/json" },
    cache: "no-store"
  })
    .then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (body) {
        return { code: res.status, body: body };
      });
    })
    .then(function (r) {
      if (r.body && r.body.paid && r.body.links) {
        showPaid(r.body.links);
      } else if (r.body && r.body.paid) {
        showUnpaid("Your payment went through, but we couldn't load your access links. Email us and we'll send them right away.");
      } else if (r.code === 502) {
        showUnpaid("We couldn't reach Paystack to check your payment. Refresh this page in a moment.");
      } else if (r.body && r.body.reason === "abandoned") {
        showUnpaid("That checkout wasn't completed, so nothing was charged. You can start again whenever you're ready.");
      } else {
        showUnpaid();
      }
    })
    .catch(function () {
      showUnpaid("We couldn't check your payment. Check your connection and refresh this page.");
    });
})();
