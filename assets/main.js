/* Stop Editing Like a Beginner — small progressive enhancements */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Current year in footer */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* Nav gets a border once the page is scrolled */
  var nav = document.querySelector("[data-nav]");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Sticky mobile buy bar — show it after the hero leaves the viewport,
     hide it again once the final CTA is on screen. */
  var buybar = document.querySelector("[data-buybar]");
  var hero = document.getElementById("top");
  var finalCta = document.getElementById("get");

  if (buybar && hero && "IntersectionObserver" in window) {
    var heroVisible = true;
    var ctaVisible = false;

    var sync = function () {
      buybar.classList.toggle("is-visible", !heroVisible && !ctaVisible);
    };

    new IntersectionObserver(function (entries) {
      heroVisible = entries[0].isIntersecting;
      sync();
    }, { rootMargin: "-40% 0px 0px 0px" }).observe(hero);

    if (finalCta) {
      new IntersectionObserver(function (entries) {
        ctaVisible = entries[0].isIntersecting;
        sync();
      }).observe(finalCta);
    }
  }

  /* Reveal-on-scroll for major blocks */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));

  var showNow = function (el) { el.classList.add("in"); };
  var inView = function (el) {
    return el.getBoundingClientRect().top < (window.innerHeight || 0) * 0.95;
  };

  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(showNow);
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          showNow(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px" });

    /* Reveal anything already on screen synchronously, before the first
       paint, so a slow observer tick can never leave visible content
       stuck at opacity 0. Everything else waits for the observer. */
    reveals.forEach(function (el) {
      if (inView(el)) { showNow(el); } else { io.observe(el); }
    });

    /* Last-resort safety net */
    setTimeout(function () { reveals.forEach(showNow); }, 1200);
  }
})();
