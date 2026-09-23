# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS (index.html, confirmation.html, assets/) plus two Vercel serverless functions: api/checkout.js (creates the Paystack transaction) and api/access.js (verifies it before releasing access links). Hosted on the Vercel project "zubiverse", deployed from GitHub jelba7880-prog/zubiverse (main is Production). Confirmed by owner: no React, no Tailwind. Archivo is self-hosted in assets/fonts (SIL OFL).

## Users

Young Nigerian short-form video creators (roughly 18–22, e.g. Lagos, Benin City) who edit on their phones or laptops in CapCut, spend 8–10 hours on a single edit, and get under 200 views. They reach the page on a phone, often from TikTok or Telegram, and decide in one sitting whether to pay ₦8,800.

## Product Purpose

Clipverse sells "The Breakthrough Edit System" (headline: "Stop Editing Like a Beginner"): a course plus four bonuses (VIP Signal Group on Telegram, Editing Resource Vault, Unlocked CapCut Access, UK TikTok Account at 66% off) for ₦8,800. Success means a visitor pays through Paystack, lands on the confirmation page, and gets their course, bonuses, and Telegram invite.

## Positioning

A repeatable 2-hour editing workflow built from shadow-editing accounts that pulled 500K–700K+ views. It sells a process and technique, not another effects or transition pack, and it is aimed specifically at the Nigerian creator's situation (TikTok monetisation, phone-first editing, airtime budgets).

## Operating Context

- Payments run through Paystack. api/checkout.js calls `POST /transaction/initialize` with the amount in kobo (880000), NGN, and callback_url set to /confirmation.html. Paystack appends `?reference=` on return.
- api/access.js calls `GET /transaction/verify/:reference` and only releases links when status is "success", the currency is NGN, requested_amount is at least 880000, and metadata.product is "breakthrough-edit-system".
- After successful payment the buyer is redirected to confirmation.html, not straight to Telegram.
- confirmation.html shows its access content only after verification. The two buttons, "Join Clipverse Resource Vault" and "Join Clipverse Signal Group", get their URLs from the API. The course and four bonuses are delivered in Telegram.
- Known limit: anyone holding a buyer's confirmation URL (with its reference) can also see the links. Closing that needs a store of redeemed references.
- The ₦15,000 Personal Edit Review upsell is **not** sold through checkout. It is handled as a "contact via Telegram" conversation.

## Capabilities and Constraints

- Sales copy, pricing (₦8,800; ₦117,300 stated value), bonus list, and guarantee wording are fixed and must not be edited during design work.
- Brand: Clipverse is the seller and the brand shown on both pages (nav, footer, titles). Approved by the owner in the 2026-09-23 copy rewrite. The course is still called "The Breakthrough Edit System", with "Stop Editing Like a Beginner" as the headline and subtitle.
- Paystack secret keys must never reach client code. Vercel env vars: PAYSTACK_SECRET_KEY and PAYSTACK_PUBLIC_KEY (test pair in Development/Preview, live pair in Production), plus TELEGRAM_VAULT_URL and TELEGRAM_SIGNAL_URL. The public key is unused by the redirect flow.
- Support email: cclipvverse@gmail.com (spelling confirmed by owner).
- Delivery: the course and all four bonuses are delivered inside Telegram. The invite URLs live only in Vercel env vars, never in the repo. The Personal Edit Review contact is https://t.me/+2349126359248.
- Live payments only go into use once the owner confirms a real test transaction end to end.

## Brand Commitments

- Name: Clipverse (seller). Product: "The Breakthrough Edit System" (headline: "Stop Editing Like a Beginner").
- Voice: direct, peer-to-peer, empathetic about wasted hours. Copy rules (owner, 2026-09-23): no em dashes, no Oxford commas, no generic AI phrasing, no repeated slogans. Every CTA reads "Enroll Now", with the price only on the hero and final buttons.

## Evidence on Hand

- Proof screenshots: assets/img/proof-views-7m.jpg (7.8M views), proof-views-1-4m.jpg (1.4M views / 237K likes), proof-hearts.jpg (345K likes).
- Real CapCut shots: assets/img/capcut-effects-timeline.jpg and capcut-mobile-timeline.jpg. These replaced the stock before/after images at the owner's request; the old captions were kept verbatim. Workflow: workflow-macbook.jpg. Hero: hero-edit.jpg. (The retired before-after-*.jpg files are still in assets/img but no longer referenced.)
- Testimonials were removed in the 2026-09-23 copy rewrite. The proof section presents the analytics honestly: they are results from the studied creator accounts, not student results.
- images/ holds 19 source photos. Nine are duplicated into assets/img (victor.jpg became capcut-mobile-timeline.jpg). One is a third-party "CapCut Pro FREE" thumbnail that must not be used.
- Do not invent testimonials, view counts or student numbers.

## Product Principles

1. Trust has to be earned in one phone-sized scroll. Proof and the guarantee carry that weight, not decoration.
2. The checkout path must be real and unbroken: every buy button leads to a genuine Paystack payment.
3. Paid content is only as protected as the page that delivers it. Don't put paid links where anyone can find them.
4. Speak like a creator who has been there, not like a SaaS company.
