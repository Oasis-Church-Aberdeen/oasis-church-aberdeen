# Implementation Tasks: Oasis Church Website - Phase 2 Pages

**Source PRD:** `tasks/prd-oasis-phase2-pages.md`  
**Created:** 4 February 2026  
**Status:** Ready for Implementation

---

## Pre-Flight Checklist

- [x] **0.1** Review Phase 1 completion status (confirm core pages working)
- [x] **0.2** Verify baseline health: build passes, existing pages render correctly
- [x] **0.3** Confirm working branch is clean and up-to-date
- [x] **0.4** Review open questions in PRD (Stripe/PayPal accounts, podcast platform, facility photos)

---

## Sprint 1: Beliefs & New Here Pages (P1)

### 1.1 Beliefs Page (`beliefs.html`)

- [x] **1.1.1** Create `beliefs.html` with consistent header/footer from existing pages
- [x] **1.1.2** Build hero section with page title "What We Believe"
- [x] **1.1.3** Add introduction paragraph explaining the church's approach to faith
- [x] **1.1.4** Create accordion component CSS styles (expandable/collapsible)
- [x] **1.1.5** Implement accordion JavaScript functionality in `js/main.js`
- [x] **1.1.6** Add "The Bible" belief section with content and scripture references
- [x] **1.1.7** Add "God" belief section (Trinity) with content and scripture references
- [x] **1.1.8** Add "Jesus Christ" belief section with content and scripture references
- [x] **1.1.9** Add "The Holy Spirit" belief section with content and scripture references
- [x] **1.1.10** Add "Salvation" belief section with content and scripture references
- [x] **1.1.11** Add "The Church" belief section with content and scripture references
- [x] **1.1.12** Add "Eternity" belief section with content and scripture references
- [x] **1.1.13** Style scripture reference callout boxes
- [x] **1.1.14** Add link to "Our Vision" section on About page (`about.html#vision`)
- [x] **1.1.15** Add "Questions about faith?" CTA linking to contact page
- [x] **1.1.16** Ensure accordion keyboard navigation (Tab, Enter, Space, Arrow keys)
- [x] **1.1.17** Add ARIA attributes for accessibility (aria-expanded, aria-controls)
- [x] **1.1.18** Test responsive layout (full-width accordions on mobile)

**Validation:** All 7 belief sections render with working accordions; keyboard accessible; Lighthouse Accessibility ≥ 90

---

### 1.2 New Here Page (`new-here.html`)

- [x] **1.2.1** Create `new-here.html` with consistent header/footer
- [x] **1.2.2** Build welcoming hero section with headline "You Belong Here"
- [x] **1.2.3** Add warm, inviting hero imagery (diverse, smiling faces)
- [x] **1.2.4** Create "What to Expect" timeline section
- [x] **1.2.5** Add timeline step 1: "Arrive" (parking info, where to enter, what time)
- [x] **1.2.6** Add timeline step 2: "Welcome" (greeted at door, shown where to go)
- [x] **1.2.7** Add timeline step 3: "Refreshments" (coffee/tea available)
- [x] **1.2.8** Add timeline step 4: "Worship" (contemporary music, ~20-30 minutes)
- [x] **1.2.9** Add timeline step 5: "Message" (teaching from Bible, ~30-40 minutes)
- [x] **1.2.10** Add timeline step 6: "Connect" (opportunities to chat, connect cards)
- [x] **1.2.11** Style timeline component (visual steps, icons)
- [x] **1.2.12** Add service times and location section with mini Google Maps embed
- [x] **1.2.13** Create FAQ accordion section
- [x] **1.2.14** Add FAQ: "What should I wear?"
- [x] **1.2.15** Add FAQ: "What about my kids?"
- [x] **1.2.16** Add FAQ: "Is there parking?"
- [x] **1.2.17** Add FAQ: "How long is the service?"
- [x] **1.2.18** Add FAQ: "Do I need to bring anything?"
- [x] **1.2.19** Add FAQ: "Will I be put on the spot?"
- [x] **1.2.20** Add FAQ: "Can I just watch and not participate?"
- [x] **1.2.21** Create Quick Info Cards section
- [x] **1.2.22** Add "Kids Welcome" card (icon, programs for all ages)
- [x] **1.2.23** Add "Parking" card (icon, free parking on-site)
- [x] **1.2.24** Add "Accessibility" card (icon, wheelchair accessible, hearing loop)
- [x] **1.2.25** Add "Refreshments" card (icon, free tea/coffee)
- [x] **1.2.26** Style Quick Info Cards (responsive grid)
- [x] **1.2.27** Create "Plan Your Visit" form section
- [x] **1.2.28** Add form field: Name (text, required)
- [x] **1.2.29** Add form field: Email (email, required)
- [x] **1.2.30** Add form field: Phone (tel, optional)
- [x] **1.2.31** Add form field: Planning to visit on (date picker, optional)
- [x] **1.2.32** Add form field: Any questions? (textarea, optional)
- [x] **1.2.33** Add form field: How did you hear about us? (dropdown, optional)
- [x] **1.2.34** Add Netlify Forms attributes (`data-netlify="true"`, `name="plan-visit"`)
- [x] **1.2.35** Add honeypot field for spam protection
- [x] **1.2.36** Add form submission success/error handling
- [x] **1.2.37** Add "Join Our WhatsApp Community" button with pre-filled message link
- [x] **1.2.38** Style WhatsApp button as floating button on mobile
- [x] **1.2.39** Add "Have Questions?" CTA linking to contact page
- [x] **1.2.40** Ensure page feels inviting, not overwhelming (review tone/layout)

**Validation:** Hero conveys warmth; timeline clear; FAQ accordion works; form submits to Netlify; WhatsApp link works; responsive

---

## Sprint 1 Checkpoint

**Stop here and request approval before proceeding to Sprint 2.**

Summary required:
- Pages completed: `beliefs.html`, `new-here.html`
- Accordion functionality working
- Form submissions working
- Lighthouse scores
- Any issues discovered

---

## Sprint 2: Sermons & Giving Pages (P1)

### 2.1 Sermons Page (`sermons.html`)

- [x] **2.1.1** Create `sermons.html` with consistent header/footer
- [x] **2.1.2** Build hero section with page title "Sermons"
- [x] **2.1.3** Create "Latest Sermon" featured section with large YouTube embed
- [x] **2.1.4** Implement YouTube embed with privacy-enhanced mode (`youtube-nocookie.com`)
- [x] **2.1.5** Create sermon card component HTML structure
- [x] **2.1.6** Style sermon card (thumbnail, date, title, speaker, series, buttons)
- [x] **2.1.7** Create sermon grid layout (3-col desktop → 2-col tablet → 1-col mobile)
- [x] **2.1.8** Add mock sermon data (6-8 sermons with realistic titles/dates/series)
- [x] **2.1.9** Create Video/Audio toggle UI component
- [x] **2.1.10** Implement toggle functionality in JavaScript
- [x] **2.1.11** Create series filter tabs (horizontal scrollable on mobile)
- [x] **2.1.12** Implement series filter JavaScript functionality
- [x] **2.1.13** Add YouTube video embed player (click thumbnail to play inline or modal)
- [x] **2.1.14** Create audio player section with podcast platform links
- [ ] **2.1.15** Add Spotify embed player for audio sermons (deferred - placeholder links added)
- [x] **2.1.16** Add "Subscribe to Podcast" section
- [x] **2.1.17** Add Spotify subscribe button with logo
- [x] **2.1.18** Add Apple Podcasts subscribe button with logo
- [x] **2.1.19** Add YouTube Music subscribe button with logo (optional)
- [x] **2.1.20** Style subscribe buttons (recognizable platform branding)
- [x] **2.1.21** Implement empty state handling ("No sermons found")
- [x] **2.1.22** Add link to Sermon Games page
- [x] **2.1.23** Implement lazy loading for YouTube thumbnails/embeds
- [x] **2.1.24** Ensure page loads in < 3s (defer non-critical resources)
- [ ] **2.1.25** Add sticky "Subscribe to Podcast" banner on mobile (optional - deferred)

**Validation:** Latest sermon displays with working YouTube embed; grid shows 6+ sermons; Video/Audio toggle works; series filter works; podcast links open in new tab; responsive; page loads < 3s

---

### 2.2 Giving Page (`giving.html`)

- [x] **2.2.1** Create `giving.html` with consistent header/footer
- [x] **2.2.2** Build hero section with page title "Give"
- [x] **2.2.3** Add "Why We Give" section explaining biblical generosity
- [x] **2.2.4** Create "Where Your Money Goes" transparency section
- [x] **2.2.5** Add breakdown: Ministry & Outreach (40%)
- [x] **2.2.6** Add breakdown: Staff & Operations (35%)
- [x] **2.2.7** Add breakdown: Building & Facilities (15%)
- [x] **2.2.8** Add breakdown: Benevolence Fund (10%)
- [x] **2.2.9** Style breakdown as visual chart/infographic (CSS or simple bars)
- [x] **2.2.10** Create "How to Give" section with 3-column layout
- [x] **2.2.11** Create Card Payment column (Stripe)
- [x] **2.2.12** Add Stripe Checkout button/link (placeholder URL until account setup)
- [x] **2.2.13** Add giving amount presets UI (£10, £25, £50, £100, Custom)
- [x] **2.2.14** Add one-time/recurring toggle for Stripe
- [x] **2.2.15** Create PayPal column
- [x] **2.2.16** Add PayPal Donate button (placeholder until account setup)
- [x] **2.2.17** Create Bank Transfer column
- [x] **2.2.18** Add bank details display (Account Name, Sort Code, Account Number, Reference)
- [x] **2.2.19** Implement copy-to-clipboard functionality for bank details
- [x] **2.2.20** Add visual feedback on copy (tooltip "Copied!")
- [x] **2.2.21** Style payment method columns (responsive: stack on mobile)
- [x] **2.2.22** Add trust signals (secure payment badges/icons)
- [x] **2.2.23** Create Gift Aid section
- [x] **2.2.24** Add Gift Aid explanation text (25% boost at no extra cost)
- [x] **2.2.25** Add standard HMRC Gift Aid declaration text
- [x] **2.2.26** Create Gift Aid form
- [x] **2.2.27** Add form field: Full Name (text, required)
- [x] **2.2.28** Add form field: Address (text, required)
- [x] **2.2.29** Add form field: Postcode (text, required)
- [x] **2.2.30** Add form field: Email (email, required)
- [x] **2.2.31** Add form field: Declaration checkbox (required)
- [x] **2.2.32** Add Netlify Forms attributes for Gift Aid form
- [x] **2.2.33** Add form submission success/error handling
- [x] **2.2.34** Add "Other Ways to Give" section (standing order, in-person)
- [x] **2.2.35** Add "Questions about giving?" contact CTA
- [x] **2.2.36** Create `giving-thank-you.html` success page for Stripe redirect
- [x] **2.2.37** Ensure page feels secure and trustworthy (review design)

**Validation:** Stripe button redirects correctly (or shows placeholder); PayPal button works; bank details display with copy button; Gift Aid form submits to Netlify; "Where Your Money Goes" displays; all payment options work on mobile

---

## Sprint 2 Checkpoint

**Stop here and request approval before proceeding to Sprint 3.**

Summary required:
- Pages completed: `sermons.html`, `giving.html`, `giving-thank-you.html`
- YouTube embeds working
- Payment buttons configured (or placeholders noted)
- Forms working
- Lighthouse scores
- Any issues discovered

---

## Sprint 3: Podcasts & Facility Pages (P2)

### 3.1 Podcasts Page (`podcasts.html`)

- [x] **3.1.1** Create `podcasts.html` with consistent header/footer
- [x] **3.1.2** Build hero section with page title "Podcasts"
- [x] **3.1.3** Create "Our Podcast" section (Section 1)
- [x] **3.1.4** Add church podcast artwork/branding
- [x] **3.1.5** Add podcast title "Oasis Church Aberdeen Podcast"
- [x] **3.1.6** Add brief description of podcast content
- [x] **3.1.7** Add embedded podcast player (Spotify embed or Apple embed)
- [x] **3.1.8** Create subscribe buttons row
- [x] **3.1.9** Add Spotify subscribe button with logo
- [x] **3.1.10** Add Apple Podcasts subscribe button with logo
- [x] **3.1.11** Add Google Podcasts subscribe button with logo
- [x] **3.1.12** Add YouTube Music subscribe button with logo
- [x] **3.1.13** Style subscribe buttons with platform branding
- [x] **3.1.14** Create visual separator between sections
- [x] **3.1.15** Create "Podcasts We Love" section (Section 2)
- [x] **3.1.16** Create podcast recommendation card component
- [x] **3.1.17** Style card (artwork, title, host, description, platform links)
- [x] **3.1.18** Add podcast: The Bible Project Podcast (Tim Mackie & Jon Collins)
- [x] **3.1.19** Add podcast: Pray As You Go (Jesuits)
- [x] **3.1.20** Add podcast: The Happy Hour with Jamie Ivey
- [x] **3.1.21** Add podcast: Ask NT Wright Anything
- [x] **3.1.22** Add podcast: Holy Post Podcast (Phil Vischer)
- [x] **3.1.23** Add podcast: Exploring My Strange Bible (Tim Mackie)
- [x] **3.1.24** Add podcast: The Liturgists (Mike McHargue)
- [x] **3.1.25** Add podcast: Pass The Mic (Jemar Tisby)
- [x] **3.1.26** Build podcast grid layout (responsive)
- [x] **3.1.27** Add category tags/pills to cards (Bible Study, Prayer, Theology, etc.)
- [x] **3.1.28** Implement category filter (optional, P2)
- [x] **3.1.29** Ensure external links open in new tab (`target="_blank" rel="noopener"`)

**Validation:** Church podcast embedded and playable; subscribe buttons link correctly; 8+ recommended podcasts displayed; cards responsive; external links work

---

### 3.2 Facility Hire Page (`facility-hire.html`)

- [x] **3.2.1** Create `facility-hire.html` with consistent header/footer
- [x] **3.2.2** Build hero section with page title "Hire Our Facilities"
- [x] **3.2.3** Add introduction explaining facility hire is available
- [x] **3.2.4** Create space card component
- [x] **3.2.5** Style space card (photo, name, capacity, features, ideal for, CTA)
- [x] **3.2.6** Add Main Hall card (150 seated, stage, PA, projector, kitchen access)
- [x] **3.2.7** Add Meeting Room 1 card (20 capacity, whiteboard, TV, WiFi)
- [x] **3.2.8** Add Meeting Room 2 card (12 capacity, table seating, WiFi)
- [x] **3.2.9** Add Kitchen card (commercial kitchen, with hall hire)
- [x] **3.2.10** Add placeholder images for spaces (or Unsplash alternatives)
- [x] **3.2.11** Build space cards grid layout (responsive)
- [x] **3.2.12** Add pricing information section (or "Contact for pricing")
- [x] **3.2.13** Add availability information
- [x] **3.2.14** Create "Book a Viewing" CTA button
- [x] **3.2.15** Create enquiry form section
- [x] **3.2.16** Add form field: Name (text, required)
- [x] **3.2.17** Add form field: Organisation (text, optional)
- [x] **3.2.18** Add form field: Email (email, required)
- [x] **3.2.19** Add form field: Phone (tel, required)
- [x] **3.2.20** Add form field: Space required (dropdown: Main Hall, Meeting Room 1, Meeting Room 2, Kitchen, Multiple)
- [x] **3.2.21** Add form field: Event type (dropdown: Wedding, Party, Meeting, Conference, Other)
- [x] **3.2.22** Add form field: Preferred date(s) (date picker or text)
- [x] **3.2.23** Add form field: Expected attendees (number)
- [x] **3.2.24** Add form field: Additional requirements (textarea)
- [x] **3.2.25** Add form field: How did you hear about us? (dropdown)
- [x] **3.2.26** Add Netlify Forms attributes
- [x] **3.2.27** Add honeypot field for spam protection
- [x] **3.2.28** Add form submission success/error handling
- [x] **3.2.29** Add "Book a Call" button (mailto or Calendly link placeholder)
- [x] **3.2.30** Add terms and conditions summary (optional, P2)

**Validation:** All spaces displayed with photos and details; enquiry form submits to Netlify; "Book a Call" button works; responsive

---

### 3.3 Community Facilities Page (`community-facilities.html`)

- [x] **3.3.1** Create `community-facilities.html` with consistent header/footer
- [x] **3.3.2** Build hero section with page title "Community Facilities"
- [x] **3.3.3** Add mission statement about serving the community
- [x] **3.3.4** Create "Types of Groups We Support" section
- [x] **3.3.5** Add list: Registered charities
- [x] **3.3.6** Add list: Community interest companies (CICs)
- [x] **3.3.7** Add list: Non-profit community groups
- [x] **3.3.8** Add list: Local support groups (AA, bereavement support)
- [x] **3.3.9** Add list: Youth organisations (Scouts, Guides)
- [x] **3.3.10** Add list: Parent and toddler groups
- [x] **3.3.11** Add list: Educational classes for the community
- [x] **3.3.12** Style eligibility criteria section
- [x] **3.3.13** Add available spaces section (reuse/reference facility-hire content)
- [x] **3.3.14** Create "Current Community Users" section (testimonials/logos placeholder)
- [x] **3.3.15** Create application form section
- [x] **3.3.16** Add form field: Group/Organisation name (text, required)
- [x] **3.3.17** Add form field: Contact name (text, required)
- [x] **3.3.18** Add form field: Email (email, required)
- [x] **3.3.19** Add form field: Phone (tel, required)
- [x] **3.3.20** Add form field: Type of organisation (dropdown: Charity, CIC, Community Group, Other)
- [x] **3.3.21** Add form field: Charity/Company number (text, optional)
- [x] **3.3.22** Add form field: Describe your project/activity (textarea, required)
- [x] **3.3.23** Add form field: How will this benefit the community? (textarea, required)
- [x] **3.3.24** Add form field: Space required (dropdown)
- [x] **3.3.25** Add form field: Preferred day(s) and time(s) (text, required)
- [x] **3.3.26** Add form field: Expected attendees (number, required)
- [x] **3.3.27** Add form field: How did you hear about us? (dropdown, optional)
- [x] **3.3.28** Add Netlify Forms attributes
- [x] **3.3.29** Add honeypot field for spam protection
- [x] **3.3.30** Add form submission success/error handling
- [x] **3.3.31** Add "Book a Meeting" CTA button (discuss project)
- [x] **3.3.32** Create FAQ section about community use
- [x] **3.3.33** Ensure clear distinction from paid facility hire (visual/copy)

**Validation:** Clear distinction from paid hire; eligibility criteria clear; application form submits to Netlify; "Book a Meeting" button works; community partnership spirit conveyed

---

## Sprint 3 Checkpoint

**Stop here and request approval before proceeding to Sprint 4.**

Summary required:
- Pages completed: `podcasts.html`, `facility-hire.html`, `community-facilities.html`
- Podcast embeds working
- All forms working
- Lighthouse scores
- Any issues discovered

---

## Sprint 4: Sermon Games Page (P3)

### 4.1 Sermon Games Page (`sermon-games.html`) - Core Structure

- [x] **4.1.1** Create `sermon-games.html` with consistent header/footer
- [x] **4.1.2** Build hero section with page title "Sermon Games"
- [x] **4.1.3** Add "This Week's Sermon" header with sermon title and date
- [x] **4.1.4** Create game selection tabs/cards (Quiz, Crossword, Word Search, etc.)
- [x] **4.1.5** Style game selection UI
- [x] **4.1.6** Create game container area for dynamic content

### 4.2 Sermon Games Data Structure

- [x] **4.2.1** Create `_data/sermon-games/` folder
- [x] **4.2.2** Create sample sermon game JSON file (`2026-02-02-hope-series.json`)
- [x] **4.2.3** Define JSON structure: sermonId, sermonTitle, sermonDate, memoryVerse
- [x] **4.2.4** Add quiz questions array (5-10 questions with options, correct answer, explanation)
- [x] **4.2.5** Add crossword data structure (grid, clues)
- [x] **4.2.6** Add word search data structure (grid, words)
- [x] **4.2.7** Add fill-in-the-blanks data structure
- [x] **4.2.8** Create JavaScript function to load sermon game data

### 4.3 Multiple Choice Quiz

- [x] **4.3.1** Create quiz UI component (question, options, progress bar)
- [x] **4.3.2** Style quiz component (selected state, correct/incorrect feedback)
- [x] **4.3.3** Implement quiz JavaScript logic
- [x] **4.3.4** Track current question and user answers
- [x] **4.3.5** Show immediate feedback (correct/incorrect) with scripture reference
- [x] **4.3.6** Calculate and display final score with percentage
- [x] **4.3.7** Add "Play Again" and "Try Another Game" buttons
- [x] **4.3.8** Ensure keyboard navigation (Tab, Enter to select)
- [x] **4.3.9** Add progress bar showing question number

**Validation:** Quiz fully functional; progress displays; score calculates correctly; keyboard accessible

### 4.4 Crossword Puzzle

- [x] **4.4.1** Create crossword grid UI component (CSS Grid)
- [x] **4.4.2** Style crossword cells (input, selected, correct)
- [x] **4.4.3** Create clues display (Across/Down)
- [x] **4.4.4** Implement crossword JavaScript logic
- [x] **4.4.5** Handle cell click and keyboard input
- [x] **4.4.6** Navigate between cells with arrow keys
- [x] **4.4.7** Highlight current word when clue selected
- [x] **4.4.8** Add "Check Answers" button
- [x] **4.4.9** Add "Reveal" option for stuck players
- [ ] **4.4.10** Add timer (optional) - deferred
- [x] **4.4.11** Show completion celebration

**Validation:** Crossword keyboard navigation works; cells accept input; check answers works; reveal works

### 4.5 Word Search

- [x] **4.5.1** Create word search grid UI component (CSS Grid or Canvas)
- [x] **4.5.2** Style grid cells
- [x] **4.5.3** Create word list display with checkmarks
- [x] **4.5.4** Implement word search JavaScript logic
- [x] **4.5.5** Handle mouse/touch drag to highlight words
- [x] **4.5.6** Detect valid word selections
- [x] **4.5.7** Mark found words in list
- [x] **4.5.8** Add timer and score
- [x] **4.5.9** Show completion celebration

**Validation:** Word search highlighting works; found words marked; works on mobile (touch)

### 4.6 Fill in the Blanks (P2)

- [x] **4.6.1** Create fill-in-the-blanks UI component
- [x] **4.6.2** Style blank input fields inline with text
- [x] **4.6.3** Implement JavaScript logic
- [x] **4.6.4** Add hint system
- [x] **4.6.5** Add "Show Answer" option
- [x] **4.6.6** Check answers and show results

### 4.7 Memory Verse Challenge (P2)

- [x] **4.7.1** Create memory verse UI component
- [x] **4.7.2** Display verse reference and typing area
- [x] **4.7.3** Implement real-time typing feedback
- [x] **4.7.4** Calculate accuracy percentage
- [x] **4.7.5** Add "Show Verse" and "Start Over" buttons

### 4.8 Sermon Games Polish

- [x] **4.8.1** Add confetti/celebration animation on game completion
- [ ] **4.8.2** Implement score persistence with LocalStorage (optional) - deferred
- [ ] **4.8.3** Add "Share Your Score" social buttons (optional, P3) - deferred
- [ ] **4.8.4** Create archive of past sermon games (optional, P2) - deferred
- [x] **4.8.5** Create print stylesheet for offline use
- [x] **4.8.6** Test all games on mobile (touch interactions)
- [x] **4.8.7** Ensure all games are keyboard accessible

**Validation:** At least 3 game types implemented (Quiz, Crossword, Word Search); score displays; games work on mobile; print version generates cleanly

---

## Sprint 4 Checkpoint

**Stop here and request approval before proceeding to Navigation Updates.**

Summary required:
- `sermon-games.html` completed with 3+ game types
- All games functional on desktop and mobile
- Data structure supports weekly updates
- Lighthouse scores
- Any issues discovered

---

## Sprint 5: Navigation & Integration

### 5.1 Navigation Updates

- [ ] **5.1.1** Update header navigation to include new dropdown structure
- [ ] **5.1.2** Create "ABOUT" dropdown menu
- [ ] **5.1.3** Add "Our Story" link (existing about.html)
- [ ] **5.1.4** Add "What We Believe" link → `beliefs.html`
- [ ] **5.1.5** Add "Leadership Team" link (about.html#leadership or separate page)
- [ ] **5.1.6** Add "Our Vision" link → `about.html#vision`
- [ ] **5.1.7** Create "SERMONS" dropdown menu
- [ ] **5.1.8** Add "Watch & Listen" link → `sermons.html`
- [ ] **5.1.9** Add "Sermon Games" link → `sermon-games.html`
- [ ] **5.1.10** Add "Podcasts" link → `podcasts.html`
- [ ] **5.1.11** Create "CONNECT" dropdown menu
- [ ] **5.1.12** Add "I'm New Here" link → `new-here.html`
- [ ] **5.1.13** Add "Connect Groups" link (existing or placeholder)
- [ ] **5.1.14** Add "Children & Youth" link (existing or placeholder)
- [ ] **5.1.15** Add "Events Calendar" link (existing or placeholder)
- [ ] **5.1.16** Update "GIVE" link → `giving.html`
- [ ] **5.1.17** Style dropdown menus (desktop hover, mobile accordion)
- [ ] **5.1.18** Implement dropdown JavaScript for mobile
- [ ] **5.1.19** Add facility links to footer (Community Facilities, Hire Our Facilities)
- [ ] **5.1.20** Update all existing pages with new navigation structure
- [ ] **5.1.21** Test navigation on all breakpoints

**Validation:** All dropdown menus work; navigation consistent across all pages; mobile navigation works

---

### 5.2 Cross-Page Links & Integration

- [ ] **5.2.1** Update homepage "Latest Sermon" to link to `sermons.html`
- [ ] **5.2.2** Update homepage CTAs to link to new pages where appropriate
- [ ] **5.2.3** Update `sundays.html` "Plan Your Visit" CTA to link to `new-here.html`
- [ ] **5.2.4** Add "What We Believe" link on About page to `beliefs.html`
- [ ] **5.2.5** Verify all internal links work (no 404s)
- [ ] **5.2.6** Add breadcrumb navigation (optional)

**Validation:** All internal links work; no 404 errors

---

## Sprint 5 Checkpoint

**Stop here and request approval before final QA.**

Summary required:
- Navigation updated across all pages
- All cross-page links working
- No 404 errors
- Any issues discovered

---

## Phase 2 Quality Assurance

### 6.1 Cross-Browser Testing

- [ ] **6.1.1** Test all Phase 2 pages in Chrome (desktop + mobile)
- [ ] **6.1.2** Test all Phase 2 pages in Safari (desktop + mobile)
- [ ] **6.1.3** Test all Phase 2 pages in Firefox (desktop)
- [ ] **6.1.4** Test all Phase 2 pages in Edge (desktop)
- [ ] **6.1.5** Document and fix any browser-specific issues

### 6.2 Responsive Testing

- [ ] **6.2.1** Test all Phase 2 pages at 320px (small mobile)
- [ ] **6.2.2** Test all Phase 2 pages at 375px (iPhone SE/mini)
- [ ] **6.2.3** Test all Phase 2 pages at 428px (iPhone Pro Max)
- [ ] **6.2.4** Test all Phase 2 pages at 768px (tablet portrait)
- [ ] **6.2.5** Test all Phase 2 pages at 1024px (tablet landscape/small desktop)
- [ ] **6.2.6** Test all Phase 2 pages at 1440px (standard desktop)
- [ ] **6.2.7** Test all Phase 2 pages at 1920px (large desktop)
- [ ] **6.2.8** Fix any responsive layout issues

### 6.3 Performance & Accessibility

- [ ] **6.3.1** Run Lighthouse audit on all Phase 2 pages
- [ ] **6.3.2** Ensure all pages achieve Lighthouse Performance ≥ 80
- [ ] **6.3.3** Ensure all pages achieve Lighthouse Accessibility ≥ 90
- [ ] **6.3.4** Verify all images have alt text
- [ ] **6.3.5** Verify colour contrast meets WCAG AA
- [ ] **6.3.6** Test keyboard navigation on all interactive elements
- [ ] **6.3.7** Verify form labels and ARIA attributes

### 6.4 Forms Testing

- [ ] **6.4.1** Test "Plan Your Visit" form submission (new-here.html)
- [ ] **6.4.2** Test Gift Aid form submission (giving.html)
- [ ] **6.4.3** Test Facility Hire enquiry form submission
- [ ] **6.4.4** Test Community Facilities application form submission
- [ ] **6.4.5** Verify all form submissions appear in Netlify dashboard
- [ ] **6.4.6** Verify form notification emails are received

### 6.5 Content Review

- [ ] **6.5.1** Review all content for placeholder text
- [ ] **6.5.2** Verify all links work (no 404s)
- [ ] **6.5.3** Check spelling and grammar
- [ ] **6.5.4** Review meta descriptions for SEO on new pages
- [ ] **6.5.5** Verify Open Graph tags on new pages

---

## Phase 2 Final Checkpoint

**Phase 2 complete. Request final sign-off.**

Final summary required:
- All 8 Phase 2 pages deployed and functional:
  - `beliefs.html`
  - `sermons.html`
  - `new-here.html`
  - `podcasts.html`
  - `giving.html`
  - `facility-hire.html`
  - `community-facilities.html`
  - `sermon-games.html`
- All acceptance criteria from PRD met
- Lighthouse scores (Performance ≥ 80, Accessibility ≥ 90)
- All forms working
- Navigation updated
- Any known issues or future recommendations

---

## Notes / Changes Log

*Record any scope changes, discoveries, or deferred items here.*

| Date | Note |
|------|------|
| 4 Feb 2026 | Task list generated from `prd-oasis-phase2-pages.md` |
| 4 Feb 2026 | Sprint 1 completed: `beliefs.html`, `new-here.html` |
| 4 Feb 2026 | Sprint 2 completed: `sermons.html`, `giving.html`, `giving-thank-you.html` |
| 4 Feb 2026 | Updated `new-here.html` with correct address (Laverockbraes, Whitestripes Road, Bridge of Don, Aberdeen AB22 8AW) and added bus information |
| 4 Feb 2026 | Deferred: Spotify embed player (2.1.15), sticky podcast banner (2.1.25) - placeholder links added instead |
| 4 Feb 2026 | Sprint 3 completed: `podcasts.html`, `facility-hire.html`, `community-facilities.html` |
| 4 Feb 2026 | Sprint 4 completed: `sermon-games.html` with 5 game types (Quiz, Crossword, Word Search, Fill-in-the-Blanks, Memory Verse) |
| 4 Feb 2026 | Deferred: Crossword timer (4.4.10), LocalStorage persistence (4.8.2), Share buttons (4.8.3), Game archive (4.8.4) |

---

## Remediation Tasks

*If any validation fails, record remediation tasks here.*

| ID | Task | Status |
|----|------|--------|
| — | — | — |

---

## Open Questions (from PRD)

These items need client input before certain features can be fully implemented:

| # | Question | Impact | Status | Answer |
|---|----------|--------|--------|--------|
| Q1 | Stripe account details | Giving page payment button | **Pending** | Not yet set up - use placeholder |
| Q2 | PayPal.me link or button code | Giving page payment button | **Pending** | Not yet set up - use placeholder |
| Q3 | Bank account details for display | Giving page bank transfer section | **Resolved** | Use placeholder details |
| Q4 | Podcast platform (Spotify, Anchor, etc.) | Sermons & Podcasts embeds | **Resolved** | Self-hosted MP3 + placeholders for Spotify/Apple |
| Q5 | Photos of church facilities | Facility hire pages | **Resolved** | Continue using Unsplash placeholders |
| Q6 | Current community group users | Community facilities testimonials | **Resolved** | Examples: Men's Mental Health, Local Old Folks Social Lunch, Youth Scouts Group, Parent & Toddler Group, Community Choir, English Language Classes |
| Q7 | Form submission email addresses | All form notifications | **Resolved** | Domain: oasischurchaberdeen.org - use placeholder emails |
| Q8 | Calendly or booking system URL | "Book a Call" buttons | **Pending** | Will use Calendly or MS Bookings - use placeholder link |

**Note:** All pages can proceed with placeholder content. Update payment links when Stripe/PayPal accounts are set up.
