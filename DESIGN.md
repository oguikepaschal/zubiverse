---
name: Stop Editing Like a Beginner
description: The Breakthrough Edit System sales funnel, built as a CapCut project timeline at night.
colors:
  graphite: "#121315"
  graphite-panel: "#17181b"
  track: "#1d1e22"
  track-raised: "#25262b"
  line: "#2c2e33"
  line-strong: "#3a3c42"
  ink: "#f2f2ef"
  ink-muted: "#bdbfc4"
  ink-faint: "#8e9197"
  audio-teal: "#2ec4c9"
  audio-teal-hi: "#5fd6da"
  audio-ink: "#06292b"
  text-amber: "#f0a33a"
  marker-red: "#ff5a4e"
  marker-ink: "#ff8f86"
  overlay-blue: "#7fb2ff"
  playhead: "#ffffff"
  monitor-black: "#000000"
typography:
  display:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2.7rem, 7.4vw, 5.4rem)"
    fontWeight: 850
    lineHeight: 1.02
    letterSpacing: "-0.035em"
    fontVariation: "\"wdth\" 112"
  headline:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2rem, 4.6vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "\"wdth\" 110"
  headline-sm:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.5rem, 3.4vw, 2rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "\"wdth\" 110"
  price:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(3rem, 8.5vw, 4.5rem)"
    fontWeight: 850
    lineHeight: 1.05
    letterSpacing: "-0.03em"
    fontFeature: "\"tnum\""
    fontVariation: "\"wdth\" 112"
  callout:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.2rem, 2.6vw, 1.6rem)"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "-0.01em"
    fontVariation: "\"wdth\" 104"
  lede:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(1.12rem, 2.1vw, 1.35rem)"
    fontWeight: 400
    lineHeight: 1.5
  title:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.04rem"
    fontWeight: 700
    lineHeight: 1.35
  body:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "\"wdth\" 100"
  label:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 650
    lineHeight: 1.3
  button:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "1rem"
    fontWeight: 750
    lineHeight: 1.1
  timecode:
    fontFamily: "Archivo, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.3
    fontFeature: "\"tnum\""
rounded:
  bar: "3px"
  tag: "4px"
  clip: "6px"
  control: "8px"
  panel: "10px"
  sheet: "12px"
spacing:
  hairline: "3px"
  xs: "4px"
  sm: "8px"
  md: "14px"
  lg: "18px"
  xl: "28px"
  gutter: "clamp(16px, 5vw, 40px)"
  band: "clamp(36px, 5vw, 52px)"
  block: "clamp(40px, 6vw, 64px)"
  section: "clamp(64px, 10vw, 120px)"
  container: "1080px"
  container-narrow: "700px"
components:
  button-primary:
    backgroundColor: "{colors.audio-teal}"
    textColor: "{colors.audio-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "14px 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.audio-teal-hi}"
    textColor: "{colors.audio-ink}"
  button-primary-lg:
    backgroundColor: "{colors.audio-teal}"
    textColor: "{colors.audio-ink}"
    rounded: "{rounded.control}"
    padding: "16px 30px"
    height: "56px"
  button-primary-sm:
    backgroundColor: "{colors.audio-teal}"
    textColor: "{colors.audio-ink}"
    rounded: "{rounded.control}"
    padding: "10px 16px"
    height: "44px"
  button-ghost:
    backgroundColor: "{colors.track-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "16px 30px"
    height: "56px"
  button-ghost-hover:
    backgroundColor: "#2f3036"
    textColor: "{colors.ink}"
  input:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
    height: "48px"
  strip-clip:
    backgroundColor: "{colors.track}"
    textColor: "{colors.ink-faint}"
    rounded: "{rounded.tag}"
    padding: "0 8px"
    height: "24px"
  strip-clip-active:
    backgroundColor: "{colors.track-raised}"
    textColor: "{colors.ink}"
  text-clip:
    backgroundColor: "rgb(240 163 58 / 0.08)"
    textColor: "{colors.ink}"
    typography: "{typography.callout}"
    rounded: "{rounded.clip}"
    padding: "20px 24px"
  panel:
    backgroundColor: "{colors.graphite-panel}"
    rounded: "{rounded.panel}"
  export-sheet:
    backgroundColor: "{colors.track-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
  export-sheet-titlebar:
    backgroundColor: "{colors.track}"
    textColor: "{colors.ink}"
    padding: "12px 18px"
  tag:
    backgroundColor: "rgb(255 90 78 / 0.14)"
    textColor: "{colors.marker-ink}"
    rounded: "{rounded.tag}"
    padding: "2px 7px"
  progress-track:
    backgroundColor: "{colors.track-raised}"
    rounded: "{rounded.bar}"
    height: "6px"
  progress-fill:
    backgroundColor: "{colors.audio-teal}"
    rounded: "{rounded.bar}"
  progress-fill-failed:
    backgroundColor: "{colors.marker-red}"
    rounded: "{rounded.bar}"
---

# Design System: Stop Editing Like a Beginner

## Overview

**Creative North Star: "The Project Timeline at Night"**

The page is an edit in progress. Every section is a clip on one project timeline, and the visitor's scroll is the playhead. The system is borrowed from the tool its buyers already live in: the CapCut editor in dark mode, with graphite panels, clip lanes in their real roles, one white playhead and a tabular timecode. The reader should recognise their own editor before they read a word of copy.

Density follows the editor, not a brochure. Surfaces are flat panels separated by 1px lines and small tonal steps. Colour is never decoration: teal means audio and the export action, amber means text, red means a cut or a marker, blue means overlay. Type is one family, Archivo, used as a variable font; its width axis runs wide and heavy for headlines (width 110 to 112) and returns to 100 for reading.

The world refuses the dark-SaaS glow template and the white course sales letter. There are no glows, no colour gradients, no glass, no drop shadows, and no pill-shaped buttons.

**Key Characteristics:**
- Graphite editor panels in four tonal steps, divided by 1px lines.
- Lane colours are semantic and never swapped: teal audio/export, amber text, red marker, blue overlay.
- Clips are 6px blocks with a 1px lane edge and full-height 7px trim brackets.
- One white playhead: in the sticky project strip, the hero lanes, and the focus ring.
- Timecode, rulers and prices use tabular figures.
- Motion is sparse. One razor cut on load, a scroll-linked playhead, and an export bar that fills once.

## Colors

A graphite editor with four lane colours that keep their CapCut meanings, plus one white for the playhead.

### Primary
- **Audio Teal** (`audio-teal`): the audio lane and the export action. Every buy button, the final CTA clip, the Export clip in the project strip, the checkout sheet's export glyph, the guarantee shield, the confirmation progress fill and the text caret. **Teal Lift** (`audio-teal-hi`) is its hover state only. **Deep Teal Ink** (`audio-ink`) is the text colour on teal (7.25:1) and the `::selection` text.

### Secondary
- **Caption Amber** (`text-amber`): the text lane. Caption callouts, the audience line, ruler-band label chips, the confirmation note box, the T1 value-stack row and download, the hero's text-lane clips, and the launch price in the announcement bar. It appears on dark ground as a 1px edge at 50 to 70 percent alpha over a 7 to 14 percent fill.

### Tertiary
- **Marker Red** (`marker-red`): cuts and markers. The razor stroke through "Beginner", the slashes on the pain list, the pain-list clip edge, the invalid-field border and focus ring, and the failed export bar. **Marker Ink** (`marker-ink`) is its readable text tint on dark (6.85:1 on `track-raised`): field and form errors, the failed status row, and the "66% off" tag.
- **Overlay Blue** (`overlay-blue`): the overlay lane. The FX row in the value stack and downloads list.

### Neutral
- **Graphite** (`graphite`): page ground, sticky nav, input fill, the trim-bracket grip notch.
- **Graphite Panel** (`graphite-panel`): alternate sections, the project strip, hero lanes, footer, upsell.
- **Track** (`track`): announcement bar, value stack, sheet and price-card title bars, guarantee, Telegram block, strip clips at rest, mobile buy bar.
- **Track Raised** (`track-raised`): price card, checkout sheet, ghost buttons, the active strip clip, progress track, brand mark.
- **Line** (`line`) and **Line Strong** (`line-strong`): 1px dividers and panel edges; the stronger one edges raised surfaces and controls. Both are also the two tick heights in the ruler graphic.
- **Ink** (`ink`), **Ink Muted** (`ink-muted`), **Ink Faint** (`ink-faint`): primary text, reading text and ledes, meta text and timecode. Ink Faint holds 4.78:1 on the lightest surface it sits on.
- **Playhead** (`playhead`): the playhead line and cap, the active strip-clip edge, the global focus outline, the skip link.
- **Monitor Black** (`monitor-black`): only the bezel of the preview monitor that frames screenshots.

### Named Rules
**The Lane Meaning Rule.** A lane colour means its lane. Teal is audio and export, amber is text, red is a cut or an error, blue is overlay. Never use one for its hue alone.

**The Export Is Teal Rule.** Every purchase action is a solid teal button with deep teal ink. No other colour sells.

**The One Playhead Rule.** Pure white belongs to the playhead and to focus. Text uses Ink (`ink`), never pure white.

## Typography

**Display Font:** Archivo (with system-ui, -apple-system, Segoe UI, Roboto, sans-serif)
**Body Font:** Archivo (same stack)

**Character:** One grotesque working across its width axis. Headlines go wide and very heavy with tight tracking, like a title card. Body copy stays at normal width and is set in the same family, so the page reads like an app UI rather than a magazine. The font is self-hosted as two variable woff2 subsets (latin and latin-ext, the latter carrying the naira sign), weight 100 to 900 and width 62 to 125 percent, under the SIL OFL.

### Hierarchy
- **Display** (850, clamp 2.7 to 5.4rem, 1.02, width 112, -0.035em): the single hero headline; carries the razor cut.
- **Headline** (800, clamp 2 to 3.25rem, 1.02, width 110, -0.03em): section headings. **Headline Small** (clamp 1.5 to 2rem) is the upsell heading.
- **Price** (850, clamp 3 to 4.5rem, 1.05, width 112, tabular): the price-card amount; the struck-through anchor price sits at 0.3em, weight 500, in Ink Faint.
- **Callout** (700, clamp 1.2 to 1.6rem, 1.35, width 104): text-lane caption clips.
- **Lede** (400, clamp 1.12 to 1.35rem, 1.5, max 34ch, Ink Muted): the sentence under a headline. The plain problem lede is 500 weight, up to 1.5rem, in Ink.
- **Title** (700, 1.04rem, 1.35): value-stack items; the main course row steps up to 800 at 1.18rem, width 106.
- **Body** (400, 1.0625rem, 1.6, max 62ch): reading text, in Ink Muted.
- **Label** (650, 0.92rem): form labels, band chips, sheet and price-card title bars (0.95rem), settings values.
- **Timecode** (0.7 to 0.78rem, tabular figures, Ink Faint): rulers, the strip readout, band timecodes, the monitor overlay, lane headers (700).

### Named Rules
**The Tabular Clock Rule.** Anything that counts, whether a timecode, ruler, price, total or percentage, uses tabular figures.

**The Wide For Titles Rule.** The width axis rises only for headings, prices and the brand name (104 to 112). Running text stays at width 100.

## Layout

A single-column scroll with an 1080px container and a 700px narrow column for reading sections, with gutters of clamp(16px, 5vw, 40px). Sections breathe at clamp(64px, 10vw, 120px) and alternate between Graphite and Graphite Panel with 1px Line borders, like tracks stacked in a timeline.

- **Sticky header:** the nav (brand plus a small CTA) and the project strip below it stick together at the top. Section anchors use a 118px scroll margin so headings clear it.
- **Section band:** each section after the hero opens with a ruler band, a timecode in Ink Faint over a repeating 12 by 6px tick graphic (`ruler-ticks.svg`), with clamp(36px, 5vw, 52px) below it.
- **Hero:** a 1.15fr / 0.85fr grid of copy and a phone preview monitor (max 300px, 9:13), followed by a full-width lanes panel (video thumbnails, text clips, audio waveform, static playhead).
- **Receipts:** three columns; below 860px they become a horizontal scroll-snap row of 82 percent-wide clips.
- **Value stack:** a grid of a 48px lane-header column (V1, A1, T1, FX, OV), the clip, and the price; below 640px the header column narrows to 36px and the price drops under the clip.
- **Breakpoints:** 860px (hero stacks, nav CTA hides, mobile buy bar appears, receipts scroll) and 640px (strip becomes a thin progress readout, text lane hides, Telegram buttons stack).
- **Mobile buy bar:** fixed to the bottom below 860px, shown only after the hero leaves and hidden again while the final section is on screen; the body reserves 76px for it.

Spacing is set in small, close steps (3, 4, 8, 14, 18 and 28px recur) rather than a strict 8pt grid, which matches the tight packing of editor chrome.

## Elevation & Depth

The system is flat. There are no box-shadows anywhere. Depth comes from four tonal steps (Graphite, then Graphite Panel, Track and Track Raised) and from 1px Line or Line Strong edges. The raised surfaces, the price card and the checkout sheet, are simply the lightest graphite with the stronger edge. The only overlay is the modal backdrop, a flat dim of rgb(8 9 10 / 0.72) with no blur.

### Named Rules
**The Panel Not Paper Rule.** Lift is expressed as a lighter track and a stronger 1px edge, never as a shadow, glow or blur.

## Shapes

Small, square-shouldered radii taken from the editor: 4px for tags, strip clips and chips; 6px for clips; 8px for buttons and inputs; 10px for panels; 12px for the price card and the checkout sheet. The progress bar, at 6px tall with a 3px radius, is the only fully rounded shape, as in an editor's export bar.

Recurring geometry is drawn from the timeline:
- **Trim brackets:** solid 7px bars on both ends of a clip, full height, with a 2 by 14px notch of Graphite cut into the middle as a grip.
- **Playhead:** a 2px white line with a 10 by 7px downward triangle cap.
- **Razor strokes:** thin red bars set at an angle (the hero cut at -7deg, or -3deg on phones; the pain-list slashes at 14deg).
- **Keyframes:** 11px teal squares rotated 45deg, marking each win.
- **Ruler ticks:** alternating 6px and 3px ticks every 6px.

## Components

### Buttons
The export action: solid, compact and unmistakable.
- **Shape:** gently squared (8px).
- **Primary:** Audio Teal fill, Deep Teal Ink text, weight 750, a 48px minimum height with 14px 24px padding. It comes in large (56px, 16px 30px, 1.08rem) for every section CTA and small (44px, 10px 16px) for the nav and the buy bar. Block width inside the price card and sheet. An optional 18px trailing arrow icon.
- **Hover / Focus:** fill shifts to Teal Lift with a 1px lift over 0.2s ease-out; the lift resets on press. Focus is a 2px white outline offset 3px.
- **Disabled (busy):** 0.75 opacity with a progress cursor, no lift; the label changes to "Opening secure checkout…".
- **Ghost:** Track Raised fill, Line Strong edge, Ink text; hover goes to #2f3036. It is used for secondary routes such as email support and the Telegram upsell.

### Clips
The signature container: a 6px block with a 1px lane-coloured edge, a faint lane fill, and full-height 7px trim brackets in the lane's solid colour. Lanes set three properties: the edge (roughly 0.45 to 0.6 alpha), the fill (0.03 to 0.05 alpha) and the solid bracket colour.
- **Video** (white, bracket #d9dadd): the proof receipts, with 7px inner side padding so screenshots clear the brackets and captions sit under a Line rule.
- **Audio** (teal): the wins list and the final CTA clip.
- **Overlay** (blue): available as `.clipbox--overlay`. No section uses it since the testimonials were removed.
- **Marker** (red): the pain list.
- Value-stack rows and download rows use the same lane edges and fills without brackets, with a lane-header cell (V1, A1, T1, FX, OV) split off by a Line rule.

### Text-lane captions
An amber caption clip for a single emphasised sentence: 1px amber edge at 0.55 alpha over a 0.08 fill, 6px radius, 20px 24px padding, Callout type in Ink. The same amber treatment at chip scale (4px radius, 650 weight, amber text) is used for the hero audience line. The confirmation note box is the quiet version, in body type and Ink Muted.

### Section ruler band
A band of timecode and ruler ticks that opens a section. It holds a timecode and nothing else by default.

### Project strip (signature)
A 38px bar under the nav, on Graphite Panel with a Line top edge. On the left is the readout, the current time in Ink bold over "/ 02:00" in Ink Faint, tabular. After it, six equal clip links (Hook, Problem, System, Inside, Proof, Export) with 3px gaps, 24px tall, a 4px radius, Track fill, a Line Strong edge and 0.75rem labels in Ink Faint. Hover raises the text to Ink. The active clip (`aria-current`) takes Track Raised and a white edge. The Export clip always carries a teal edge and teal text. A 2px white playhead with a triangle cap moves across the clip track in proportion to scroll progress. Below 640px the strip is 30px tall, the clips shrink to 12px label-less bars that ignore taps, and it works as a progress readout. Without JavaScript, the playhead is hidden.

### Export sheet (price card)
A Track Raised panel (12px radius, Line Strong edge) that reads as CapCut's export dialog. It has a full-bleed Track title bar with the teal export glyph (an arrow up out of a tray) and a 0.95rem 650 title, and no window dots. Below it, settings rows form a definition list: term in Ink Muted on the left, value in Ink at 650 on the right, each divided by Line Strong. Then the Price amount, a short note and a block primary button. The confirmation upsell reuses the title-bar pattern on Graphite Panel.

### Checkout sheet (dialog)
A modal `<dialog>` at min(460px, 100vw - 32px), Track Raised with Line Strong edge and 12px radius, over a flat rgb(8 9 10 / 0.72) backdrop. It enters with a 0.3s rise and fade. The title bar matches the export sheet: teal export glyph, a 1.15rem 700 heading at width 100, and a 44px close button (Ink Muted, hover Ink on Track Raised). The body is a 16px-gap stack of the lede, the fields, a form-level error, a block large primary button and micro copy. Clicking the backdrop closes it.

### Inputs / Fields
- **Style:** Graphite fill, a 1px Line Strong edge, an 8px radius, a 48px minimum height with 12px 14px padding at 1rem. The label sits above at 650, 0.92rem, with a 6px gap. An optional hint sits beneath in Ink Faint, 0.85rem.
- **Hover:** edge to #4a4c53.
- **Focus:** a 2px teal outline offset 1px, and a teal edge.
- **Error:** `aria-invalid="true"` turns the edge red, and the focus outline turns red too. The message renders below in Marker Ink, 0.88rem 600, and is hidden when empty. A form-level error (`role="alert"`) uses the same style above the submit button.

### Confirmation progress
An export-progress readout with three states on `data-state`. The status row (0.95rem 700) sits above a 6px bar on Track Raised.
- **Checking:** the teal fill runs once from 4 to 70 percent over 2.4s ease-out and holds there. It does not loop.
- **Done:** the row turns teal, a check icon appears, the percentage reads 100%, and the fill completes to full over 0.9s.
- **Failed:** the row turns Marker Ink and the bar fills solid Marker Red. The unpaid block (headline, lede, primary and ghost buttons) is revealed.

### Navigation
Brand lockup: a 32px Track Raised mark (6px radius) holding a white two-clip-and-playhead glyph, next to the name at 800 width 106 and a 0.78rem subtitle in Ink Faint (the subtitle hides below 640px). The nav CTA is a small primary button and hides below 860px, where the buy bar takes over. The announcement bar above is Track with Ink Muted text and the price in Caption Amber.

### Preview monitor
Screenshots sit in a pure black bezel with 8px padding, a 10px radius and a Line Strong edge, and the image takes a 6px radius. The hero variant is phone-shaped (9:13). An optional timecode overlay sits bottom-left on rgb(0 0 0 / 0.72).

### Motion
- **One razor moment:** on load, the red cut through "Beginner" draws left to right (scaleX from 0) over 0.7s, starting after 0.35s, with the ease-out curve cubic-bezier(0.16, 1, 0.3, 1). No other element makes an entrance on load.
- **Playhead:** set directly from scroll progress through a requestAnimationFrame-throttled handler writing a CSS transform. It has no easing or transition, so it tracks the scroll exactly like a scrub.
- **State transitions:** 0.2s ease-out for colour, border and button lift; 0.3s for the buy bar slide and the sheet entrance.
- **Reduced motion:** smooth scrolling is off, and all animations and transitions collapse to near zero. The razor cut renders already drawn, the button lift is removed, and the checking bar sits still at 30 percent. The playhead still follows scroll because it is a position, not an animation.

## Do's and Don'ts

### Do:
- **Do** give every new container a lane: pick the clip lane whose meaning matches the content, and use its edge, fill and trim brackets.
- **Do** make every purchase action a solid Audio Teal button with Deep Teal Ink, at least 48px tall (44px only in the nav and buy bar).
- **Do** open new sections with a ruler band carrying only a timecode.
- **Do** set timecodes, prices, totals and percentages in tabular figures.
- **Do** express depth with the four graphite steps and 1px Line or Line Strong edges.
- **Do** keep pure white for the playhead and the focus outline.
- **Do** keep any new motion to state changes at 0.2 to 0.3s on cubic-bezier(0.16, 1, 0.3, 1), and give it a reduced-motion fallback.

### Don't:
- **Don't** use box-shadows, glows, blur or glass; this world is flat panels.
- **Don't** fill surfaces with colour gradients. Background layers are solid paint only, as in the trim-bracket grip notch.
- **Don't** make buttons, chips or tags pill-shaped; radii stay between 4 and 12px (the 6px progress bar is the one fully rounded shape).
- **Don't** use a lane colour for a meaning it does not have, for example amber for an error or red for a price.
- **Don't** add a label chip to a ruler band to announce the heading below it.
- **Don't** add a second entrance animation or a looping progress bar; the razor cut is the page's one motion moment.
- **Don't** swap Archivo for a system display face; if it fails to load, the stack falls back, but no other family is designed in.
