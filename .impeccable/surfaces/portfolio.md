# Portfolio website surface

Mode: Experience. Audience: recruiters and hiring teams. Goal: understand Muhamad's role and experience at a glance, then contact him through public email or LinkedIn. The reference is https://sawad.framer.website/, and the user's instruction is to match its layout and appearance.

Content rules: the supplied CV and portrait are the only sources of facts and imagery. Never publish the CV phone number. Never invent projects, links, metrics, or testimonials. Where the template shows unrelated template content, substitute real CV material with the same structure.

## Direction contract

THESIS: Sawad's layout and visual language, carried by Muhamad Fatah Rozaq's real career: a sticky identity card beside oversized two-tone headings.

OWN-WORLD: Ink ground #151312, Poppins, a translucent icon dock, a white sticky profile sheet with dashed orange arcs, a 110px SOFTWARE / ENGINEER lockup whose second line is ghost grey, a 70px stat row, and numbered editorial sections separated by 120px. The orange and lime feature cards are commented out at the user's request.

STORY: See the portrait and role, read the bio, scan two years across three companies, browse three systems, six tools, four skill groups, then send an email through a working form.

FIRST VIEWPORT: Dock at top-centre; 344px profile card at x=150 starting at y=40; content column at x=594 starting at y=160 with the 110px hero lockup, 18px lead, and three stats; the feature cards below them are currently commented out.

FORM: The reference's composition, reproduced with measured values: 1140px shell, 344 + 100 + 696 split, 90px section titles, 135px project thumbnails, 46px tool tiles, 40px fields, 40px orange submit, 16px card radius.

FINISH: verified in production at 1440, 768, and 390 CSS pixels; see the build review below.

## Build review

VERDICT: PASS with one documented reference-inherited contrast exception.

Geometry matches the reference at 1440px: card x=150 y=40 w=344 h=576, content x=594, h1 110px/1 at y=160, section titles 90px, sections 120px apart, dock 48px at top:30. Poppins is self-hosted through `next/font/google`; layout holds at 768px (stacked, card 350px) and 390px (stacked, photo 260×210) with no horizontal overflow.

EN ↔ ID switches the document language, heading ghost lines, stat labels, role periods, tool kinds, skill groups, form labels, and placeholders in place. The form composes a `mailto:` draft; no data leaves the browser. Portrait loads; CV returns 200 as `application/pdf`; no console errors. Production build and ESLint pass.

KNOWN EXCEPTION: the ghost second line of each display heading uses the template's own `rgb(182 180 189 / 20%)`, which measures 1.47:1 on #151312 and fails the 3:1 large-text threshold (six nodes: the h1 and five h2s). The full heading text is available through `aria-label`, so the meaning is preserved for assistive technology. Raising the ghost to `#5e5c60` restores AA at the cost of a lighter second line; the user asked for an exact match, so the template value ships.

REMAINING FOUNDATIONS (outside this page): custom `/not-found`, app icons, social-preview media, legal pages, CI, dependency scanning, error tracking, and IaC. `package.json` has no test script; verification used the production build, ESLint, and a real browser at three widths.

**Accessibility: PASS with the documented exception** — axe 4.13 reports the six ghost lines and nothing else; keyboard skip link works; all links and the language switch are operable.

**Motion: PASS** — interaction-only transitions (140–160ms); no entrance or scroll animation; reduced motion disables everything.

**Assets: PASS** — portrait and CV are the user's own files, with PNG `tEXt` provenance on both review captures.
