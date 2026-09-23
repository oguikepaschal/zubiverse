/* Stop Editing Like a Beginner — small progressive enhancements */
(function () {
  "use strict";

  /* Current year in footer */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---------- Project strip: the scroll is the playhead ---------- */

  var strip = document.querySelector("[data-strip]");
  var playhead = document.querySelector("[data-playhead]");
  var tcOut = document.querySelector("[data-tc]");
  var clipLinks = Array.prototype.slice.call(
    document.querySelectorAll("[data-clip]"),
  );

  /* Turn scroll progress (0 at the top of the page, 1 at the bottom) into
     the readout shown before "/ 02:00" in the strip. */

  function formatTimecode(progress) {
    const totalSeconds = Math.floor(progress * 120);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  if (strip && playhead && clipLinks.length) {
    var track = strip.querySelector(".strip__clips");
    var sections = clipLinks.map(function (a) {
      return document.getElementById(a.getAttribute("data-clip"));
    });

    var ticking = false;

    var render = function () {
      ticking = false;
      var doc = document.documentElement;
      var max = Math.max(1, doc.scrollHeight - window.innerHeight);
      var progress = Math.min(1, Math.max(0, window.scrollY / max));

      /* Playhead position across the clip track */
      var x = track.offsetLeft + progress * track.offsetWidth;
      playhead.style.setProperty("--head-x", x + "px");

      if (tcOut) {
        tcOut.textContent = formatTimecode(progress);
      }

      /* Active clip = the last section whose top has passed the strip */
      var line = strip.getBoundingClientRect().bottom + 24;
      var active = 0;
      sections.forEach(function (s, i) {
        if (s && s.getBoundingClientRect().top <= line) {
          active = i;
        }
      });
      clipLinks.forEach(function (a, i) {
        if (i === active) {
          a.setAttribute("aria-current", "true");
        } else {
          a.removeAttribute("aria-current");
        }
      });
    };

    var request = function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(render);
      }
    };

    render();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
  }

  /* ---------- Checkout: name + email, then Paystack ---------- */

  var sheet = document.getElementById("checkout");
  var form = document.querySelector("[data-checkout-form]");

  if (sheet && form && typeof sheet.showModal === "function") {
    var submit = form.querySelector("[data-submit]");
    var formError = form.querySelector("[data-form-error]");
    var submitLabel = submit.textContent;

    var fieldError = function (name, message) {
      var input = form.elements[name];
      var slot = form.querySelector('[data-error-for="' + name + '"]');
      slot.textContent = message || "";
      input.setAttribute("aria-invalid", message ? "true" : "false");
    };

    var clearErrors = function () {
      fieldError("name", "");
      fieldError("email", "");
      formError.textContent = "";
    };

    var busy = function (on) {
      submit.disabled = on;
      submit.textContent = on ? "Opening secure checkout…" : submitLabel;
      form.setAttribute("aria-busy", on ? "true" : "false");
    };

    document.querySelectorAll("[data-checkout]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        clearErrors();
        sheet.showModal();
        form.elements.name.focus();
      });
    });

    sheet.querySelector("[data-close]").addEventListener("click", function () {
      sheet.close();
    });

    /* Coming Back from Paystack restores this page from the bfcache with the
       button still busy; reset it. */
    window.addEventListener("pageshow", function (e) {
      if (e.persisted) {
        busy(false);
      }
    });

    /* Clicking the dimmed backdrop (the dialog element itself) closes it */
    sheet.addEventListener("click", function (e) {
      if (e.target === sheet) {
        sheet.close();
      }
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearErrors();

      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var bad = false;
      if (!name) {
        fieldError("name", "Enter your name.");
        bad = true;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        fieldError("email", "Enter a valid email address, like you@gmail.com.");
        bad = true;
      }
      if (bad) {
        form.querySelector('[aria-invalid="true"]').focus();
        return;
      }

      busy(true);
      fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name: name, email: email }),
      })
        .then(function (res) {
          return res
            .json()
            .catch(function () {
              return {};
            })
            .then(function (body) {
              return { ok: res.ok, body: body };
            });
        })
        .then(function (r) {
          if (r.ok && r.body.url) {
            window.location.assign(r.body.url);
            return;
          }
          busy(false);
          if (r.body.field) {
            fieldError(r.body.field, r.body.error);
            form.elements[r.body.field].focus();
          } else {
            formError.textContent =
              r.body.error ||
              "We couldn't start checkout. Please try again in a moment.";
          }
        })
        .catch(function () {
          busy(false);
          formError.textContent =
            "We couldn't reach the payment page. Check your connection and try again.";
        });
    });
  }

  /* ---------- Sticky mobile buy bar ----------
     Show it after the hero leaves the viewport, hide it again once the
     final CTA is on screen. */
  var buybar = document.querySelector("[data-buybar]");
  var hero = document.getElementById("top");
  var finalCta = document.getElementById("get");

  if (buybar && hero && "IntersectionObserver" in window) {
    var heroVisible = true;
    var ctaVisible = false;

    var sync = function () {
      buybar.classList.toggle("is-visible", !heroVisible && !ctaVisible);
    };

    new IntersectionObserver(
      function (entries) {
        heroVisible = entries[0].isIntersecting;
        sync();
      },
      { rootMargin: "-40% 0px 0px 0px" },
    ).observe(hero);

    if (finalCta) {
      new IntersectionObserver(function (entries) {
        ctaVisible = entries[0].isIntersecting;
        sync();
      }).observe(finalCta);
    }
  }
})();
