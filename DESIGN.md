---
name: Fatah Portfolio
description: Dark editorial portfolio that mirrors the Sawad Framer template layout with real CV content.
colors:
  ground: "#151312"
  ink: "#ffffff"
  muted: "#998f8f"
  ghost: "rgb(182 180 189 / 20%)"
  orange: "#f46c38"
  orange-strong: "#ef6230"
  lime: "#c5ff41"
  field: "#292725"
typography:
  display:
    fontFamily: "Poppins, Segoe UI, sans-serif"
    fontSize: "110px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  section-title:
    fontFamily: "Poppins, Segoe UI, sans-serif"
    fontSize: "90px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  body:
    fontFamily: "Poppins, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  label:
    fontFamily: "Poppins, Segoe UI, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.2
rounded:
  sheet: "16px"
  feature: "10px"
  thumb: "12px"
  tile: "9px"
  field: "8px"
spacing:
  page-top: "40px"
  content-top: "120px"
  rail: "344px"
  rail-gap: "100px"
  content: "696px"
  section: "120px"
  mobile-gutter: "20px"
components:
  dock:
    backgroundColor: "rgb(255 255 255 / 3%)"
    textColor: "{colors.ink}"
    rounded: "16px"
    height: "48px"
    padding: "0 20px"
  submit:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ground}"
    rounded: "8px"
    height: "40px"
---

# Design System: Fatah Portfolio

## Overview

**Creative North Star: "The Sawad Folio, Filled With Real Work"**

The page reproduces the Sawad Framer template's layout and visual language — an ink canvas, a floating icon dock, a sticky white profile card, oversized two-tone display headings, a stat row, two saturated feature cards, and numbered editorial sections. Every word, number, and destination comes from Muhamad Fatah Rozaq's CV and supplied portrait.

Template sections map to real content: recent projects become the three systems named in the CV, experience becomes the three dated roles, premium tools become six tools the CV lists, design thoughts becomes the four skill groups, and the contact form opens a real email draft.

## Colors

**Ink (#151312)** is the only page ground. **White** carries headings, card surface, and primary text. **Muted (#998F8F)** carries secondary copy. **Burnt orange (#F46C38)** is reserved for icons, dates, number markers, arrows, and the submit button. **Lime (#C5FF41)** appears only on the second feature card and its hover states.

The ghost colour (`rgb(182 180 189 / 20%)`) paints the second line of every display heading. It is the reference template's own value and measures 1.47:1 against the ink ground — below the 3:1 large-text threshold. The heading's full text is exposed through `aria-label`, so assistive technology reads "Recent projects" rather than "Recent". This is a deliberate, documented reference-fidelity exception; raising the value to `#5e5c60` restores AA compliance at the cost of a lighter second line.

## Typography

**Poppins** (400/500/600/700 via `next/font/google`, self-hosted at build) is the only family.

- **Display** 110px/1, 700: the hero's SOFTWARE / ENGINEER lockup.
- **Section title** 90px/1, 700: two lines, first white, second ghost.
- **Entry title** 26px/1.2, 600: company, project, tool, and skill-group names.
- **Lead** 18px/1.4: the hero paragraph, capped at 480px.
- **Body** 16px/1.4: role summaries and skill lists.
- **Label** 14px: dates, tool kinds, field labels, project meta.
- **Stat number** 70px/1.2, 600 with -0.01em tracking.

**The Two-Tone Rule.** Every section heading pairs a white line with a ghost line, never a single colour. The pair reads as one phrase.

## Layout

`max-width: 1140px`, centred, split `344px` rail + `100px` gap + `696px` content. The page's top padding is 40px so the rail starts 120px above the content column, matching the reference's floating card. The dock sits absolutely at `top: 30px`, horizontally centred, over the empty top area.

**The Sticky Rail Rule.** The profile card is `position: sticky; top: 40px` inside a rail that spans the full content height, so the identity card stays beside every section while scrolling. `overflow-x: clip` on the page is required — `hidden` would make the page a scroll container and push the sticky card down.

Sections start 120px apart. Each heading is followed by 20px before its content. Work rows are 175px tall (135px thumbnail + 20px padding), experience entries are 44px apart, and tool rows use a 44×40 grid gap.

Below 1180px the rail narrows to 300px and the type scales down. Below 1000px the layout stacks: card first, then a centred hero and centred section headings. Below 640px the dock keeps its 48px height with tighter gaps, the photo becomes 260×210, work thumbnails shrink to 96px, features stack, and the form switches to one column.

## Motion

Interaction only: 140ms colour transitions on dock items and 160ms arrow nudges on the feature cards. The reference's entrance animations are not reproduced because the page is a real portfolio, not a template demo. `prefers-reduced-motion` disables every transition and smooth scrolling.

## Components

### Dock
Five icon links (home, projects, experience, tools, contact) at 36×36 hit areas inside a 48px translucent pill. Each has `aria-label` and `title`; icons are decorative SVG.

### Profile card
White sheet, radius 16, padding 30/20, gap 22. Contains the supplied portrait (240×284, radius 16), a dashed orange arc at the top-left and bottom-left, an orange sparkle badge over the portrait's left edge, the name, a two-line bio, three orange links (email, LinkedIn, résumé), and a two-segment EN / ID switch.

### Feature cards
Orange and lime panels, radius 10, padding 40/20/22, 240px tall, a 26px asterisk mark, 24px/1.1 text, and a bordered ↗ square at the bottom-right. They link to the experience and tools sections.

### Work row
135px rounded tile (orange, lime, or paper) with a 40px monogram, a 26px title, a 16px summary, and a 14px stack label at the right edge.

### Tool item
46px white tile with a monogram, a 20px name, and a 14px kind. The tile turns lime on hover.

### Contact form
Name and email side by side, a topic select, a message textarea, and a full-width orange submit. Submitting composes a `mailto:` draft with the topic as the subject and the message plus sender details as the body. No data leaves the browser.

## Do's and Don'ts

### Do:
- Keep the 344 / 696 split, the sticky rail, and the two-tone headings; they define the layout.
- Keep every fact traceable to the CV and every link real.
- Keep the EN / ID switch translating headings, stats, roles, tools, skills, and form labels in place.
- Keep the ghost-line contrast exception documented rather than silently "fixed".

### Don't:
- Do not add the reference's stock project screenshots, client logos, or invented metrics.
- Do not publish the CV phone number.
- Do not reintroduce `overflow: hidden` on `.page`; it breaks the sticky rail.
- Do not animate on scroll; the reference's motion is demo motion, not portfolio motion.
