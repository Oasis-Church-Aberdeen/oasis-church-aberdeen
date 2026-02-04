# PRD: Oasis Church Website - Phase 2 Pages

**Parent PRD:** `tasks/prd-oasis-church-website.md`  
**Created:** 4 February 2026  
**Status:** Ready for Implementation

---

## 1. Overview

This PRD covers the detailed requirements for **8 pages** that are currently returning 404 errors or need enhanced functionality. These pages complete the Oasis Church Aberdeen website and provide critical visitor engagement, content delivery, and giving capabilities.

### Pages Covered

| Page | Priority | Status |
|------|----------|--------|
| `beliefs.html` | P1 | New build |
| `sermons.html` | P1 | New build |
| `new-here.html` | P1 | New build |
| `podcasts.html` | P2 | New build |
| `giving.html` | P1 | New build |
| `facility-hire.html` | P2 | New build |
| `community-facilities.html` | P2 | New build (new page) |
| `sermon-games.html` | P3 | New build (replaces quizzes.html) |

---

## 2. Platform & Stack

Inherits from parent PRD:
- **Platform:** Web (PWA-ready)
- **Stack:** Vanilla HTML5/CSS3/JavaScript
- **Hosting:** Netlify
- **CMS:** Decap CMS (for sermon content)

### Additional Dependencies for This Phase

| Feature | Technology | Notes |
|---------|------------|-------|
| Payment Processing | Stripe Checkout | Redirect to hosted checkout |
| Payment Processing | PayPal Button | Embedded donate button |
| Podcast Embedding | Spotify/Apple embeds | iframe embeds |
| Interactive Games | Vanilla JavaScript | No external libraries |

---

## 3. Page Requirements

---

### 3.1 Beliefs Page (`beliefs.html`)

#### Purpose
Present Oasis Church's statement of faith and core theological beliefs in an accessible, readable format.

#### User Stories
- **US-B1:** As a visitor, I want to understand what the church believes so I can decide if it aligns with my faith.
- **US-B2:** As a seeker, I want beliefs explained in plain language, not just theological jargon.

#### Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-B1 | Hero section with page title "What We Believe" | P0 |
| FR-B2 | Introduction paragraph explaining the church's approach to faith | P0 |
| FR-B3 | Core beliefs section with expandable/collapsible accordions | P0 |
| FR-B4 | Link to "Our Vision" section on About page | P1 |
| FR-B5 | "Questions about faith?" CTA linking to contact page | P1 |
| FR-B6 | Scripture references displayed alongside beliefs | P1 |

#### Core Beliefs Content Structure

| Belief Topic | Key Points |
|--------------|------------|
| **The Bible** | Inspired word of God, authority for faith and life |
| **God** | Trinity - Father, Son, Holy Spirit; Creator and Sustainer |
| **Jesus Christ** | Fully God and fully human; death and resurrection; salvation |
| **The Holy Spirit** | Active presence of God; empowers believers |
| **Salvation** | By grace through faith; available to all |
| **The Church** | Body of Christ; community of believers |
| **Eternity** | Hope of resurrection; new creation |

#### Design Notes
- Accordion pattern for each belief (click to expand)
- Scripture references in subtle callout boxes
- Warm, welcoming tone (not academic)
- Mobile: full-width accordions

#### Acceptance Criteria
- [ ] All 7 belief sections render with accordion functionality
- [ ] Accordions work on mobile (touch) and desktop (click)
- [ ] Link to About page Vision section works
- [ ] Page is accessible (keyboard navigation, ARIA)
- [ ] Lighthouse Accessibility ≥ 90

---

### 3.2 Sermons Page (`sermons.html`)

#### Purpose
Central hub for all sermon content - video (YouTube) and audio (podcast platform). Allows visitors to catch up on messages they missed or explore the church's teaching.

#### User Stories
- **US-S1:** As a regular attendee, I want to re-watch last Sunday's sermon.
- **US-S2:** As a commuter, I want to listen to sermons as audio while driving.
- **US-S3:** As a first-time visitor, I want to sample the teaching style before attending.

#### Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-S1 | Hero section with page title "Sermons" | P0 |
| FR-S2 | Featured "Latest Sermon" section with large video embed | P0 |
| FR-S3 | Sermon grid/list with thumbnails, titles, dates, speakers | P0 |
| FR-S4 | Toggle between Video and Audio formats | P1 |
| FR-S5 | Filter by sermon series (dropdown or tabs) | P1 |
| FR-S6 | Search sermons by title/speaker | P2 |
| FR-S7 | YouTube video embed player (click thumbnail to play) | P0 |
| FR-S8 | Audio player with podcast platform links (Spotify, Apple) | P1 |
| FR-S9 | "Subscribe to Podcast" section with platform buttons | P1 |
| FR-S10 | Empty state handling ("No sermons found") | P1 |
| FR-S11 | Link to weekly Sermon Games page | P2 |

#### Sermon Card Component

```
┌─────────────────────────────────────┐
│  [YouTube Thumbnail]                │
│                                     │
├─────────────────────────────────────┤
│  📅 2 Feb 2026                      │
│  "Finding Hope in Hard Times"       │
│  Pastor Steve • Hope Series         │
│                                     │
│  [▶ Watch]  [🎧 Listen]             │
└─────────────────────────────────────┘
```

#### Audio/Podcast Integration

| Platform | Integration Type |
|----------|------------------|
| Spotify | Embed player + "Listen on Spotify" button |
| Apple Podcasts | "Listen on Apple Podcasts" button |
| YouTube Music | "Listen on YouTube Music" button (optional) |
| Direct MP3 | HTML5 audio player fallback (if self-hosted) |

#### Design Notes
- Grid layout: 3 columns desktop → 2 tablet → 1 mobile
- Video modal or inline player on click
- Sticky "Subscribe to Podcast" banner at bottom (mobile)
- Series filter as horizontal scrollable tabs

#### Acceptance Criteria
- [ ] Latest sermon displays prominently with working YouTube embed
- [ ] Sermon grid shows at least 6 mock sermons
- [ ] Video/Audio toggle switches content type
- [ ] Series filter works correctly
- [ ] Podcast platform links open in new tab
- [ ] Responsive at all breakpoints
- [ ] Page loads in < 3s (lazy load videos)

---

### 3.3 New Here Page (`new-here.html`)

#### Purpose
Warm, welcoming landing page for first-time visitors. Answers common questions and reduces anxiety about visiting a new church.

#### User Stories
- **US-N1:** As a first-time visitor, I want to know what to expect so I feel prepared.
- **US-N2:** As a nervous newcomer, I want reassurance that I'll be welcomed.
- **US-N3:** As a curious seeker, I want an easy way to connect without commitment.

#### Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-N1 | Welcoming hero with headline "You Belong Here" | P0 |
| FR-N2 | "What to Expect" section with timeline/steps | P0 |
| FR-N3 | Service times and location (mini-map) | P0 |
| FR-N4 | FAQ accordion (common visitor questions) | P0 |
| FR-N5 | "Plan Your Visit" form (name, email, date planning to visit) | P1 |
| FR-N6 | "Join Our WhatsApp Community" button | P1 |
| FR-N7 | Photo gallery showing friendly church environment | P2 |
| FR-N8 | Video welcome message from pastor (optional) | P3 |
| FR-N9 | "Have Questions?" CTA to contact page | P1 |
| FR-N10 | Kids/parking/accessibility quick info cards | P1 |

#### "What to Expect" Timeline

| Step | Content |
|------|---------|
| **1. Arrive** | Parking info, where to enter, what time |
| **2. Welcome** | Greeted at the door, shown where to go |
| **3. Refreshments** | Coffee/tea available, chance to chat |
| **4. Worship** | Contemporary music, ~20-30 minutes |
| **5. Message** | Teaching from the Bible, ~30-40 minutes |
| **6. Connect** | Opportunities to chat, connect cards |

#### FAQ Content (Accordion)

| Question |
|----------|
| What should I wear? |
| What about my kids? |
| Is there parking? |
| How long is the service? |
| Do I need to bring anything? |
| Will I be put on the spot? |
| Can I just watch and not participate? |

#### Quick Info Cards

| Card | Icon | Content |
|------|------|---------|
| **Kids Welcome** | 👶 | Programs for all ages, check-in at welcome desk |
| **Parking** | 🚗 | Free parking on-site |
| **Accessibility** | ♿ | Wheelchair accessible, hearing loop available |
| **Refreshments** | ☕ | Free tea/coffee before and after service |

#### Plan Your Visit Form Fields

| Field | Type | Required |
|-------|------|----------|
| Name | Text | Yes |
| Email | Email | Yes |
| Phone | Tel | No |
| Planning to visit on | Date picker | No |
| Any questions? | Textarea | No |
| How did you hear about us? | Dropdown | No |

#### Design Notes
- Warm, inviting imagery (diverse, smiling faces)
- Conversational, friendly tone
- Prominent WhatsApp button (floating on mobile)
- Form should feel low-pressure ("No obligation")

#### Acceptance Criteria
- [ ] Hero conveys warmth and welcome
- [ ] "What to Expect" timeline is clear and scannable
- [ ] FAQ accordion works correctly
- [ ] Plan Your Visit form submits to Netlify
- [ ] WhatsApp link opens WhatsApp with pre-filled message
- [ ] Quick info cards display responsively
- [ ] Page feels inviting, not overwhelming

---

### 3.4 Podcasts Page (`podcasts.html`)

#### Purpose
Two-part page: (1) Oasis Church's own podcast/audio sermons, and (2) curated recommendations of other podcasts the community enjoys.

#### User Stories
- **US-P1:** As an attendee, I want easy access to our church's podcast on my preferred platform.
- **US-P2:** As a growing Christian, I want recommendations for other good podcasts to listen to.

#### Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-P1 | Hero section with page title "Podcasts" | P0 |
| FR-P2 | **Section 1:** "Our Podcast" - Oasis Church audio content | P0 |
| FR-P3 | Embedded podcast player (Spotify/Apple embed) | P1 |
| FR-P4 | Subscribe buttons for all major platforms | P0 |
| FR-P5 | **Section 2:** "Podcasts We Love" - curated recommendations | P0 |
| FR-P6 | Podcast card component (artwork, title, host, description, links) | P0 |
| FR-P7 | Category filters for recommended podcasts (optional) | P2 |
| FR-P8 | "Suggest a Podcast" form or email link | P3 |

#### "Our Podcast" Section

| Element | Description |
|---------|-------------|
| Podcast artwork | Church logo/branding |
| Title | "Oasis Church Aberdeen Podcast" |
| Description | Brief description of content |
| Latest episode | Embedded player |
| Subscribe buttons | Spotify, Apple Podcasts, Google Podcasts, YouTube Music |

#### "Podcasts We Love" Card Component

```
┌─────────────────────────────────────┐
│  [Podcast    ]  Title of Podcast    │
│  [Artwork    ]  Host Name           │
│  [           ]                      │
│               Short description of  │
│               what the podcast is   │
│               about and why we      │
│               recommend it.         │
│                                     │
│  [Spotify] [Apple] [Website]        │
└─────────────────────────────────────┘
```

#### Recommended Podcasts (Initial Mock Data)

| Podcast | Host | Category |
|---------|------|----------|
| The Bible Project Podcast | Tim Mackie & Jon Collins | Bible Study |
| Pray As You Go | Jesuits | Daily Prayer |
| The Happy Hour with Jamie Ivey | Jamie Ivey | Faith & Life |
| Ask NT Wright Anything | NT Wright | Theology |
| Holy Post Podcast | Phil Vischer | Culture & Faith |
| Exploring My Strange Bible | Tim Mackie | Bible Study |
| The Liturgists | Mike McHargue | Spirituality |
| Pass The Mic | Jemar Tisby | Culture |

#### Design Notes
- Clear visual separation between church podcast and recommendations
- Platform buttons with recognizable logos
- Grid layout for recommended podcasts
- Category pills/tags for filtering

#### Acceptance Criteria
- [ ] Church podcast embedded and playable
- [ ] Subscribe buttons link to correct platforms
- [ ] At least 8 recommended podcasts displayed
- [ ] Podcast cards are responsive
- [ ] External links open in new tab

---

### 3.5 Giving Page (`giving.html`)

#### Purpose
Enable visitors to financially support the church through multiple payment methods, with clear information about how funds are used.

#### User Stories
- **US-G1:** As a regular giver, I want to set up recurring donations easily.
- **US-G2:** As a one-time giver, I want to donate quickly without creating an account.
- **US-G3:** As a UK taxpayer, I want to Gift Aid my donation.
- **US-G4:** As someone who prefers bank transfers, I want clear account details.

#### Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-G1 | Hero section with page title "Give" | P0 |
| FR-G2 | "Why We Give" section explaining biblical generosity | P0 |
| FR-G3 | "Where Your Money Goes" section (transparency) | P1 |
| FR-G4 | **Stripe Integration** - Checkout button/redirect | P0 |
| FR-G5 | **PayPal Integration** - Donate button | P0 |
| FR-G6 | **Bank Transfer** section with account details | P0 |
| FR-G7 | Copy-to-clipboard for bank details | P1 |
| FR-G8 | **Gift Aid** section with explanation and declaration | P0 |
| FR-G9 | Gift Aid form (name, address, declaration checkbox) | P1 |
| FR-G10 | Recurring giving option (via Stripe) | P1 |
| FR-G11 | Giving amount presets (£10, £25, £50, £100, Custom) | P1 |
| FR-G12 | "Other Ways to Give" section (standing order, in-person) | P2 |
| FR-G13 | Contact for questions about giving | P1 |

#### Payment Methods Layout

```
┌─────────────────────────────────────────────────────────┐
│                    HOW TO GIVE                          │
├─────────────────┬─────────────────┬─────────────────────┤
│   💳 Card       │   PayPal        │   🏦 Bank Transfer  │
│                 │                 │                     │
│  [Give Now]     │  [Donate]       │  Account: Oasis     │
│  via Stripe     │  via PayPal     │  Church Aberdeen    │
│                 │                 │  Sort: 00-00-00     │
│  One-time or    │  Quick &        │  Acc: 12345678      │
│  Recurring      │  Secure         │  [Copy Details]     │
└─────────────────┴─────────────────┴─────────────────────┘
```

#### Stripe Integration Details

| Feature | Implementation |
|---------|----------------|
| Checkout type | Stripe Checkout (hosted page redirect) |
| Payment types | One-time and recurring subscriptions |
| Preset amounts | £10, £25, £50, £100, Custom |
| Success redirect | `/giving-thank-you.html` |
| Cancel redirect | `/giving.html` |

**Note:** Requires Stripe account setup. Checkout session created via Netlify Function or client-side redirect to pre-configured payment link.

#### PayPal Integration Details

| Feature | Implementation |
|---------|----------------|
| Button type | PayPal Donate Button |
| Integration | PayPal.me link or embedded button |
| Preset amounts | Optional (PayPal handles) |

#### Bank Transfer Details (Mock)

| Field | Value |
|-------|-------|
| Account Name | Oasis Church Aberdeen |
| Sort Code | 00-00-00 |
| Account Number | 12345678 |
| Reference | "Tithe" or "Gift" |

#### Gift Aid Section

| Element | Content |
|---------|---------|
| Explanation | "If you're a UK taxpayer, Gift Aid increases your donation by 25% at no extra cost to you." |
| Declaration text | Standard HMRC Gift Aid declaration |
| Form fields | Full name, Address, Postcode, Email, Checkbox |
| Submission | Netlify Forms (emailed to church treasurer) |

#### "Where Your Money Goes" (Transparency)

| Category | Percentage | Description |
|----------|------------|-------------|
| Ministry & Outreach | 40% | Community programs, missions |
| Staff & Operations | 35% | Salaries, admin costs |
| Building & Facilities | 15% | Maintenance, utilities |
| Benevolence Fund | 10% | Helping those in need |

#### Design Notes
- Trust signals (secure payment badges)
- Warm, generous imagery
- Clear call-to-action buttons
- Mobile-optimized payment buttons
- Testimonial/quote about generosity (optional)

#### Acceptance Criteria
- [ ] Stripe button redirects to Stripe Checkout
- [ ] PayPal button opens PayPal donation flow
- [ ] Bank details display correctly with copy button
- [ ] Gift Aid form submits to Netlify
- [ ] "Where Your Money Goes" chart/infographic displays
- [ ] Page feels secure and trustworthy
- [ ] All payment options work on mobile

---

### 3.6 Facility Hire Page (`facility-hire.html`)

#### Purpose
Commercial/paid rental of church facilities for events, parties, meetings, etc.

#### User Stories
- **US-FH1:** As an event planner, I want to see what spaces are available and their capacities.
- **US-FH2:** As a local business, I want to book a meeting room.
- **US-FH3:** As a family, I want to hire the hall for a birthday party.

#### Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-FH1 | Hero section with page title "Hire Our Facilities" | P0 |
| FR-FH2 | Introduction explaining facility hire is available | P0 |
| FR-FH3 | Available spaces section with photos and details | P0 |
| FR-FH4 | Capacity, features, and equipment for each space | P0 |
| FR-FH5 | Pricing information (or "Contact for pricing") | P1 |
| FR-FH6 | Availability information | P1 |
| FR-FH7 | "Book a Viewing" CTA | P1 |
| FR-FH8 | Enquiry form (detailed) | P0 |
| FR-FH9 | "Book a Call" button (calendly or email) | P1 |
| FR-FH10 | Terms and conditions summary | P2 |

#### Available Spaces (Mock Data)

| Space | Capacity | Features | Ideal For |
|-------|----------|----------|-----------|
| **Main Hall** | 150 seated, 200 standing | Stage, PA system, projector, kitchen access | Conferences, weddings, large parties |
| **Meeting Room 1** | 20 | Whiteboard, TV screen, WiFi | Business meetings, training |
| **Meeting Room 2** | 12 | Table seating, WiFi | Small meetings, interviews |
| **Kitchen** | N/A | Full commercial kitchen | Catering prep (with hall hire) |

#### Space Card Component

```
┌─────────────────────────────────────┐
│  [Photo of Space]                   │
├─────────────────────────────────────┤
│  Main Hall                          │
│  👥 Up to 150 seated                │
│                                     │
│  ✓ Stage & PA system                │
│  ✓ Projector & screen               │
│  ✓ Kitchen access                   │
│  ✓ Wheelchair accessible            │
│                                     │
│  Ideal for: Conferences, weddings,  │
│  large celebrations                 │
│                                     │
│  [Enquire Now]                      │
└─────────────────────────────────────┘
```

#### Enquiry Form Fields

| Field | Type | Required |
|-------|------|----------|
| Name | Text | Yes |
| Organisation (if applicable) | Text | No |
| Email | Email | Yes |
| Phone | Tel | Yes |
| Space required | Dropdown (Main Hall, Meeting Room 1, etc.) | Yes |
| Event type | Dropdown (Wedding, Party, Meeting, Conference, Other) | Yes |
| Preferred date(s) | Date picker or text | Yes |
| Expected attendees | Number | Yes |
| Additional requirements | Textarea | No |
| How did you hear about us? | Dropdown | No |

#### Design Notes
- High-quality photos of each space
- Clear pricing (even if "from £X/hour")
- Prominent contact options
- Trust signals (reviews, testimonials if available)

#### Acceptance Criteria
- [ ] All spaces displayed with photos and details
- [ ] Enquiry form submits to Netlify
- [ ] "Book a Call" button works (mailto or Calendly link)
- [ ] Responsive image gallery/cards
- [ ] Clear next steps after form submission

---

### 3.7 Community Facilities Page (`community-facilities.html`) — **NEW PAGE**

#### Purpose
Offer church facilities for free or reduced cost to community groups, charities, and local projects.

#### User Stories
- **US-CF1:** As a community group leader, I want to find a free meeting space.
- **US-CF2:** As a charity organiser, I want to know if the church supports community initiatives.
- **US-CF3:** As a local resident, I want to know what community activities happen at the church.

#### Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-CF1 | Hero section with page title "Community Facilities" | P0 |
| FR-CF2 | Mission statement about serving the community | P0 |
| FR-CF3 | Types of groups/projects we support | P0 |
| FR-CF4 | Application/eligibility criteria | P1 |
| FR-CF5 | Current community users (testimonials/logos) | P2 |
| FR-CF6 | Available spaces (similar to facility hire) | P0 |
| FR-CF7 | "Apply to Use Our Facilities" form | P0 |
| FR-CF8 | "Book a Meeting" CTA to discuss project | P1 |
| FR-CF9 | FAQ about community use | P1 |

#### Eligibility Criteria (Example)

We welcome applications from:
- Registered charities
- Community interest companies (CICs)
- Non-profit community groups
- Local support groups (e.g., AA, bereavement support)
- Youth organisations (Scouts, Guides, etc.)
- Parent and toddler groups
- Educational classes for the community

#### Application Form Fields

| Field | Type | Required |
|-------|------|----------|
| Group/Organisation name | Text | Yes |
| Contact name | Text | Yes |
| Email | Email | Yes |
| Phone | Tel | Yes |
| Type of organisation | Dropdown (Charity, CIC, Community Group, Other) | Yes |
| Charity/Company number (if applicable) | Text | No |
| Describe your project/activity | Textarea | Yes |
| How will this benefit the community? | Textarea | Yes |
| Space required | Dropdown | Yes |
| Preferred day(s) and time(s) | Text | Yes |
| Expected attendees | Number | Yes |
| How did you hear about us? | Dropdown | No |

#### Design Notes
- Warm, community-focused imagery
- Emphasize partnership, not just "free space"
- Show existing community partnerships
- Clear application process

#### Acceptance Criteria
- [ ] Clear distinction from paid facility hire
- [ ] Eligibility criteria clearly stated
- [ ] Application form submits to Netlify
- [ ] "Book a Meeting" button works
- [ ] Page conveys community partnership spirit

---

### 3.8 Sermon Games Page (`sermon-games.html`) — **ENHANCED**

#### Purpose
Interactive, fun games related to the weekly sermon to help reinforce learning and engagement, especially for families and small groups.

#### User Stories
- **US-SG1:** As a parent, I want fun activities to discuss the sermon with my kids.
- **US-SG2:** As a connect group leader, I want icebreaker games for our meeting.
- **US-SG3:** As someone who learns by doing, I want interactive ways to engage with the message.

#### Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| FR-SG1 | Hero section with page title "Sermon Games" | P0 |
| FR-SG2 | "This Week's Sermon" header with sermon title/date | P0 |
| FR-SG3 | **Multiple Choice Quiz** - 5-10 questions | P0 |
| FR-SG4 | **Crossword Puzzle** - sermon-themed | P1 |
| FR-SG5 | **Word Search** - key terms from sermon | P1 |
| FR-SG6 | **Fill in the Blanks** - key verses/quotes | P2 |
| FR-SG7 | **Memory Verse Challenge** - type the verse | P2 |
| FR-SG8 | Score tracking and results display | P0 |
| FR-SG9 | "Share Your Score" social buttons | P3 |
| FR-SG10 | Archive of past sermon games | P2 |
| FR-SG11 | Printable version for offline use | P2 |
| FR-SG12 | Family-friendly mode (simpler questions) | P3 |

#### Game Types

##### 1. Multiple Choice Quiz
```
Question 3 of 10

In today's sermon, Pastor Steve mentioned that hope is like a:

○ A) Lighthouse in the storm
○ B) Anchor for the soul  ← Correct!
○ C) Ship on the sea
○ D) Wave on the ocean

[Next Question →]
```

Features:
- Progress bar showing question number
- Immediate feedback (correct/incorrect)
- Scripture reference for correct answer
- Final score with percentage
- "Play Again" and "Try Another Game" options

##### 2. Crossword Puzzle
```
    1   2   3
  ┌───┬───┬───┐
1 │ H │ O │ P │ E │
  ├───┼───┼───┼───┤
2 │   │ A │   │   │
  ├───┼───┼───┼───┤
3 │   │ I │   │   │
  └───┴───┴───┴───┘

ACROSS
1. What we find in Christ (4 letters)

DOWN
2. The book Pastor Steve read from (6 letters)
```

Features:
- Click cell to type letter
- Clues from sermon content
- "Check Answers" button
- "Reveal" option for stuck players
- Timer (optional)

##### 3. Word Search
```
┌───────────────────┐
│ H O P E F A I T H │
│ G R A C E L O V E │
│ P E A C E J O Y X │
│ ...               │
└───────────────────┘

Find these words:
☑ HOPE  ☑ FAITH  ☐ GRACE
☐ LOVE  ☐ PEACE  ☐ JOY
```

Features:
- Highlight words by dragging
- Word list with checkmarks
- Timer and score
- Different grid sizes (easy/medium/hard)

##### 4. Fill in the Blanks
```
Complete the verse from today's sermon:

"For I know the _______ I have for you,"
declares the LORD, "plans to _______ you
and not to _______ you, plans to give you
_______ and a _______."

— Jeremiah 29:11
```

Features:
- Dropdown or typed answers
- Hint system
- Show answer option

##### 5. Memory Verse Challenge
```
Type this week's memory verse:

Jeremiah 29:11

[                                        ]
[                                        ]
[                                        ]

Accuracy: 85% | Words remaining: 12

[Check] [Show Verse] [Start Over]
```

Features:
- Real-time typing feedback
- Accuracy percentage
- Option to show verse and try again

#### Technical Implementation

| Component | Technology |
|-----------|------------|
| Quiz logic | Vanilla JavaScript |
| Crossword | JS grid + keyboard handling |
| Word Search | Canvas or CSS Grid + touch/mouse events |
| Data storage | JSON file per sermon week |
| Score persistence | LocalStorage (optional) |

#### Sermon Games Data Structure (JSON)

```json
{
  "sermonId": "2026-02-02-hope-series",
  "sermonTitle": "Finding Hope in Hard Times",
  "sermonDate": "2026-02-02",
  "memoryVerse": {
    "text": "For I know the plans I have for you...",
    "reference": "Jeremiah 29:11"
  },
  "quiz": {
    "questions": [
      {
        "question": "What did Pastor Steve say hope is like?",
        "options": ["Lighthouse", "Anchor", "Ship", "Wave"],
        "correct": 1,
        "explanation": "Hebrews 6:19 describes hope as an anchor."
      }
    ]
  },
  "crossword": { ... },
  "wordSearch": { ... },
  "fillBlanks": { ... }
}
```

#### Design Notes
- Fun, engaging visual style
- Confetti/celebration on completion
- Mobile-friendly touch interactions
- Accessible keyboard navigation for quiz
- Print stylesheet for offline use

#### Acceptance Criteria
- [ ] Multiple choice quiz fully functional
- [ ] At least 3 game types implemented
- [ ] Score displays correctly at end
- [ ] Games work on mobile (touch)
- [ ] Crossword keyboard navigation works
- [ ] Word search highlighting works
- [ ] Data structure supports weekly updates via CMS
- [ ] Print version generates cleanly

---

## 4. Navigation Updates

### Main Navigation Structure

```
HOME | ABOUT ▼ | SUNDAYS | SERMONS ▼ | CONNECT ▼ | GIVE | CONTACT

ABOUT dropdown:
- Our Story
- What We Believe ← beliefs.html
- Leadership Team
- Our Vision (anchor link to about.html#vision)

SERMONS dropdown:
- Watch & Listen ← sermons.html
- Sermon Games ← sermon-games.html
- Podcasts ← podcasts.html

CONNECT dropdown:
- I'm New Here ← new-here.html
- Connect Groups
- Children & Youth
- Events Calendar

(Separate from main nav, in GIVE or footer)
- Community Facilities ← community-facilities.html
- Hire Our Facilities ← facility-hire.html
```

---

## 5. Acceptance Criteria Summary

| Page | Key Acceptance Criteria |
|------|------------------------|
| `beliefs.html` | Accordions work; scripture refs display; link to vision |
| `sermons.html` | YouTube embeds work; audio toggle; series filter |
| `new-here.html` | Form submits; FAQ works; WhatsApp link works |
| `podcasts.html` | Embedded player works; 8+ recommendations |
| `giving.html` | Stripe/PayPal buttons work; bank details copyable; Gift Aid form |
| `facility-hire.html` | Spaces displayed; enquiry form works |
| `community-facilities.html` | Application form works; eligibility clear |
| `sermon-games.html` | Quiz functional; 3+ game types; mobile-friendly |

---

## 6. Definition of Done

Each page is complete when:
- [ ] Renders without errors in Chrome, Safari, Firefox, Edge
- [ ] Responsive at all breakpoints (320px–1920px)
- [ ] Forms submit to Netlify and appear in dashboard
- [ ] All links work (no 404s)
- [ ] Lighthouse Performance ≥ 80
- [ ] Lighthouse Accessibility ≥ 90
- [ ] Code committed to Git

---

## 7. Implementation Priority

| Priority | Pages | Effort Estimate |
|----------|-------|-----------------|
| **Sprint 1** | `beliefs.html`, `new-here.html` | 1 day |
| **Sprint 2** | `sermons.html`, `giving.html` | 2 days |
| **Sprint 3** | `podcasts.html`, `facility-hire.html`, `community-facilities.html` | 1.5 days |
| **Sprint 4** | `sermon-games.html` (full implementation) | 2-3 days |

---

## 8. Open Questions

| # | Question | Owner | Status |
|---|----------|-------|--------|
| Q1 | What is the church's Stripe account? (Need to set up if not existing) | Client | Open |
| Q2 | What is the PayPal.me link or donation button code? | Client | Open |
| Q3 | Confirm bank account details for display on giving page | Client | Open |
| Q4 | What podcast platform hosts the church's sermons? (Spotify, Anchor, etc.) | Client | Open |
| Q5 | Are there photos of the church facilities for hire pages? | Client | Open |
| Q6 | Which community groups currently use the facilities? (for testimonials) | Client | Open |
| Q7 | Who should receive form submissions? (Email addresses) | Client | Open |
| Q8 | Is there a Calendly or booking system for "Book a Call"? | Client | Open |

---

## 9. Dependencies

| Dependency | Required For | Status |
|------------|--------------|--------|
| Stripe account | Giving page | Needs setup |
| PayPal account | Giving page | Needs setup |
| Podcast platform account | Sermons & Podcasts pages | Needs confirmation |
| Facility photos | Hire & Community pages | Needs assets |
| Sermon game content | Sermon Games page | Needs weekly content process |

---

*PRD Generated: 4 February 2026*  
*Version: 1.0*  
*Integrates with: `prd-oasis-church-website.md`*
