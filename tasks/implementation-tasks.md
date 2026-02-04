# Implementation Tasks: Oasis Church Aberdeen Website

**Source PRD:** `tasks/prd-oasis-church-website.md`  
**Created:** 4 February 2026  
**Status:** In Progress (Phase 1 Complete)

---

## Pre-Flight Checklist

- [x] **0.1** Verify development environment (code editor, browser dev tools)
- [x] **0.2** Initialize Git repository (if not already done)
- [x] **0.3** Create feature branch `feature/oasis-website-v1`
- [x] **0.4** Confirm project folder structure is clean

---

## Phase 1: Foundation (P0)

### 1.1 Project Structure & Base Files

- [x] **1.1.1** Create folder structure: `css/`, `js/`, `images/`, `admin/`, `_data/`
- [x] **1.1.2** Create `README.md` with project overview and setup instructions
- [x] **1.1.3** Create `netlify.toml` with basic configuration (publish directory, form handling)
- [x] **1.1.4** Using Unsplash CDN URLs for images (hero, about, team, events)

**Validation:** Folders exist, README readable, netlify.toml valid TOML

---

### 1.2 CSS Foundation (`css/styles.css`)

- [x] **1.2.1** Create CSS reset/normalize section
- [x] **1.2.2** Define CSS custom properties (variables) for colour palette:
  - Primary: `#0D7377` (deep teal)
  - Accent: `#FF6B35` (coral/orange)
  - Neutral: `#F5F5F5` (warm grey)
  - Text: `#2D3436` (dark grey)
  - White: `#FFFFFF`
- [x] **1.2.3** Add Google Fonts import (Inter or Poppins)
- [x] **1.2.4** Define typography scale (headings h1-h6, body, small)
- [x] **1.2.5** Create utility classes (container, section padding, text alignment)
- [x] **1.2.6** Define responsive breakpoints (320px, 375px, 428px, 768px, 1024px, 1280px, 1440px, 1920px)
- [x] **1.2.7** Create button styles (primary, secondary, outline variants)
- [x] **1.2.8** Create card component styles (shadow, border-radius, padding)
- [x] **1.2.9** Add smooth scroll behaviour and focus styles

**Validation:** Open test HTML file, verify colours/fonts render correctly across breakpoints

---

### 1.3 Header & Navigation

- [x] **1.3.1** Create header HTML structure with logo placeholder and nav links
- [x] **1.3.2** Style sticky header with backdrop blur effect
- [x] **1.3.3** Style desktop navigation (horizontal links, hover states)
- [x] **1.3.4** Create mobile hamburger icon (CSS-only or minimal JS)
- [x] **1.3.5** Style mobile navigation drawer (slide-in animation)
- [x] **1.3.6** Implement mobile menu toggle functionality (`js/main.js`)
- [x] **1.3.7** Add "Skip to main content" accessibility link
- [x] **1.3.8** Ensure keyboard navigation works (Tab, Enter, Escape)

**Validation:** Test on Chrome/Safari desktop + mobile; menu opens/closes smoothly; keyboard accessible

---

### 1.4 Footer

- [x] **1.4.1** Create footer HTML structure (contact info, quick links, social icons)
- [x] **1.4.2** Style footer with dark background and light text
- [x] **1.4.3** Add social media icon links (Facebook, Instagram, YouTube)
- [x] **1.4.4** Add copyright and church address
- [x] **1.4.5** Make footer responsive (stack columns on mobile)

**Validation:** Footer displays correctly on all breakpoints; all links work

---

### 1.5 Homepage (`index.html`)

- [x] **1.5.1** Create base HTML5 document structure with proper meta tags (charset, viewport, description)
- [x] **1.5.2** Add Open Graph meta tags for social sharing
- [x] **1.5.3** Include header and footer components
- [x] **1.5.4** Build hero section with background image, overlay, headline, and CTA button ("Plan Your Visit")
- [x] **1.5.5** Add service times banner section (Sundays at 10:30am)
- [x] **1.5.6** Build "Latest Sermon" card section with YouTube thumbnail placeholder
- [x] **1.5.7** Build "Upcoming Events" section with 3 event cards
- [x] **1.5.8** Build "Quick Links" section (About, Sermons, Connect Groups)
- [x] **1.5.9** Add WhatsApp community floating button (mobile)
- [x] **1.5.10** Ensure all sections are responsive

**Validation:** Page renders without errors; Lighthouse Performance ≥ 70; all links work

---

### 1.6 About Page (`about.html`)

- [x] **1.6.1** Create page with consistent header/footer
- [x] **1.6.2** Build hero section with page title
- [x] **1.6.3** Add "Our Story" section with church history content
- [x] **1.6.4** Add "Our Vision" section with mission statement
- [x] **1.6.5** Build "Leadership Team" section with bio cards (photo, name, role, bio)
- [x] **1.6.6** Add mock leadership team data (3-4 people)
- [x] **1.6.7** Ensure responsive layout for team grid

**Validation:** Page renders correctly; team cards display properly on mobile

---

### 1.7 Contact Page (`contact.html`)

- [x] **1.7.1** Create page with consistent header/footer
- [x] **1.7.2** Build hero section with page title
- [x] **1.7.3** Create contact form (name, email, message) with Netlify Forms attribute
- [x] **1.7.4** Style form inputs with focus states and validation styling
- [x] **1.7.5** Add form submission success/error handling (JS)
- [x] **1.7.6** Embed Google Maps iframe with church location
- [x] **1.7.7** Add contact details section (address, phone, email)
- [x] **1.7.8** Add social media links section

**Validation:** Form submits to Netlify; map loads; all fields validate

---

### 1.8 Sundays Page (`sundays.html`)

- [x] **1.8.1** Create page with consistent header/footer
- [x] **1.8.2** Build hero section with welcoming image
- [x] **1.8.3** Add service times section (prominently displayed)
- [x] **1.8.4** Add "What to Expect" section with bullet points
- [x] **1.8.5** Add parking/directions information
- [x] **1.8.6** Add "Plan Your Visit" CTA linking to `new-here.html`

**Validation:** Page renders correctly; service times prominent; responsive

---

### 1.9 Initial Deployment

- [x] **1.9.1** Commit all Phase 1 work to Git
- [ ] **1.9.2** Push to GitHub/GitLab repository
- [ ] **1.9.3** Connect repository to Netlify
- [ ] **1.9.4** Verify automatic deployment works
- [ ] **1.9.5** Test deployed site on real mobile device
- [ ] **1.9.6** Fix any deployment-specific issues

**Validation:** Site accessible at Netlify URL; all pages load; forms work

---

## Phase 1 Checkpoint

**Stop here and request approval before proceeding to Phase 2.**

Summary required:
- Pages completed: index.html, about.html, contact.html, sundays.html
- Navigation working (desktop + mobile)
- Netlify deployment live
- Lighthouse scores
- Any issues discovered

---

## Phase 2: Content Pages (P1)

### 2.1 Sermons Page (`sermons.html`)

- [ ] **2.1.1** Create page with consistent header/footer
- [ ] **2.1.2** Build hero section with page title
- [ ] **2.1.3** Create sermon card component (thumbnail, title, date, series, speaker)
- [ ] **2.1.4** Build sermon grid layout (responsive 3-col → 2-col → 1-col)
- [ ] **2.1.5** Add mock sermon data (6-8 sermons with realistic titles/series)
- [ ] **2.1.6** Add series filter/category tabs (JavaScript)
- [ ] **2.1.7** Create sermon detail modal or embed YouTube player
- [ ] **2.1.8** Handle empty state ("No sermons found")
- [ ] **2.1.9** Add "Latest Sermon" featured section at top

**Validation:** Grid displays correctly; filter works; YouTube embeds play

---

### 2.2 Children & Youth Page (`children-youth.html`)

- [x] **2.2.1** Create page with consistent header/footer
- [x] **2.2.2** Build hero section with welcoming image
- [x] **2.2.3** Add "Kids Ministry" section (ages, activities, times)
- [x] **2.2.4** Add "Youth Ministry" section (ages, activities, times)
- [x] **2.2.5** Add safety/safeguarding information section
- [x] **2.2.6** Add leader bio cards (optional)
- [x] **2.2.7** Add "Register Your Child" CTA (links to contact or form)

**Validation:** Page renders correctly; content is clear and reassuring for parents

---

### 2.3 Beliefs Page (`beliefs.html`)

- [ ] **2.3.1** Create page with consistent header/footer
- [ ] **2.3.2** Build hero section with page title
- [ ] **2.3.3** Add "What We Believe" intro paragraph
- [ ] **2.3.4** Create expandable/collapsible statement sections (or simple list)
- [ ] **2.3.5** Add core doctrines content (Bible, God, Jesus, Salvation, Church, etc.)
- [ ] **2.3.6** Style for readability (good typography, spacing)

**Validation:** Page renders correctly; content is readable; accessible

---

### 2.4 Decap CMS Setup

- [ ] **2.4.1** Create `admin/index.html` with Decap CMS script includes
- [ ] **2.4.2** Create `admin/config.yml` with backend configuration (git-gateway)
- [ ] **2.4.3** Define "sermons" collection schema (title, date, series, speaker, youtubeUrl, thumbnail)
- [ ] **2.4.4** Define "events" collection schema (title, date, time, location, description)
- [ ] **2.4.5** Define "blog" collection schema (title, date, author, body, featuredImage)
- [ ] **2.4.6** Create `_data/` folder for JSON content files
- [ ] **2.4.7** Add sample sermon JSON data
- [ ] **2.4.8** Enable Netlify Identity for CMS authentication
- [ ] **2.4.9** Test CMS login and content creation

**Validation:** CMS accessible at `/admin`; can create/edit sermon; data saves to Git

---

### 2.5 Netlify Forms Configuration

- [ ] **2.5.1** Verify contact form has `netlify` attribute
- [ ] **2.5.2** Add honeypot field for spam protection
- [ ] **2.5.3** Configure form notification email in Netlify dashboard
- [ ] **2.5.4** Test form submission and email receipt
- [ ] **2.5.5** Add success page or inline success message

**Validation:** Form submissions appear in Netlify dashboard; email notifications work

---

## Phase 2 Checkpoint

**Stop here and request approval before proceeding to Phase 3.**

Summary required:
- Pages completed: sermons.html, children-youth.html, beliefs.html
- CMS working at `/admin`
- Forms submitting correctly
- Lighthouse scores
- Any issues discovered

---

## Phase 3: Engagement Pages (P2)

### 3.1 Connect Groups Page (`connect-groups.html`)

- [x] **3.1.1** Create page with consistent header/footer
- [x] **3.1.2** Build hero section with page title and intro
- [x] **3.1.3** Create group card component (name, day, time, location, leader)
- [x] **3.1.4** Build group grid layout
- [x] **3.1.5** Add mock connect group data (4-6 groups)
- [ ] **3.1.6** Add filter by day/location (optional)
- [x] **3.1.7** Create sign-up form (name, email, preferred group)
- [x] **3.1.8** Add form with Netlify Forms integration

**Validation:** Groups display correctly; form submits; responsive layout

---

### 3.2 Calendar/Events Page (`calendar.html`)

- [x] **3.2.1** Create page with consistent header/footer
- [x] **3.2.2** Build hero section with page title
- [x] **3.2.3** Create event card component (date badge, title, time, location, description)
- [x] **3.2.4** Build event list/grid layout (chronological)
- [x] **3.2.5** Add mock event data (6-8 events over next 3 months)
- [ ] **3.2.6** Add month navigation or "View More" functionality
- [ ] **3.2.7** Handle empty state ("No upcoming events")
- [ ] **3.2.8** Add CMS collection for events (if not done in 2.4)

**Validation:** Events display chronologically; dates format correctly; responsive

---

### 3.3 Giving Page (`giving.html`)

- [ ] **3.3.1** Create page with consistent header/footer
- [ ] **3.3.2** Build hero section with page title
- [ ] **3.3.3** Add "Why We Give" section with intro content
- [ ] **3.3.4** Add giving options section (online, bank transfer, in-person)
- [ ] **3.3.5** Add bank details section (with copy-to-clipboard functionality)
- [ ] **3.3.6** Add Gift Aid information (UK tax relief)
- [ ] **3.3.7** Add external donation link/button (if applicable)

**Validation:** Page renders correctly; bank details display; links work

---

### 3.4 Facility Hire Page (`facility-hire.html`)

- [ ] **3.4.1** Create page with consistent header/footer
- [ ] **3.4.2** Build hero section with page title
- [ ] **3.4.3** Add room/space descriptions with photos
- [ ] **3.4.4** Add pricing information (or "Contact for pricing")
- [ ] **3.4.5** Add availability/booking information
- [ ] **3.4.6** Create enquiry form (name, email, phone, event type, date, message)
- [ ] **3.4.7** Add form with Netlify Forms integration

**Validation:** Room info clear; form submits correctly; responsive

---

### 3.5 Add CMS Collections for Phase 3 Content

- [ ] **3.5.1** Add "connect-groups" collection to CMS config
- [ ] **3.5.2** Add sample connect group JSON data
- [ ] **3.5.3** Verify CMS can create/edit groups
- [ ] **3.5.4** Verify events collection works end-to-end

**Validation:** All collections editable via CMS

---

## Phase 3 Checkpoint

**Stop here and request approval before proceeding to Phase 4.**

Summary required:
- Pages completed: connect-groups.html, calendar.html, giving.html, facility-hire.html
- All forms working
- CMS collections complete
- Lighthouse scores
- Any issues discovered

---

## Phase 4: Differentiator Pages (P3)

### 4.1 "I'm New Here" Page (`new-here.html`)

- [ ] **4.1.1** Create page with consistent header/footer
- [ ] **4.1.2** Build welcoming hero section with page title
- [ ] **4.1.3** Add "Plan Your Visit" step-by-step section
- [ ] **4.1.4** Add "What to Expect" section with detailed info
- [ ] **4.1.5** Add FAQ section (collapsible accordion)
- [ ] **4.1.6** Add "Have Questions?" CTA linking to contact
- [ ] **4.1.7** Add map/directions section

**Validation:** Page is welcoming; FAQ works; content comprehensive

---

### 4.2 Partner With Us Page (`partner.html`)

- [x] **4.2.1** Create page with consistent header/footer
- [x] **4.2.2** Build hero section with page title
- [x] **4.2.3** Add "Ways to Serve" section with volunteer opportunities
- [x] **4.2.4** Add volunteer role cards (worship, kids, hospitality, tech, etc.)
- [x] **4.2.5** Add "Get Involved" form or CTA
- [x] **4.2.6** Add partnership/sponsorship information (if applicable)

**Validation:** Page renders correctly; opportunities clear; CTA works

---

### 4.3 Sermon Quizzes Page (`quizzes.html`)

- [ ] **4.3.1** Create page with consistent header/footer
- [ ] **4.3.2** Build hero section with page title
- [ ] **4.3.3** Create quiz card component (sermon title, number of questions)
- [ ] **4.3.4** Build quiz list layout
- [ ] **4.3.5** Create quiz interaction UI (question, multiple choice options)
- [ ] **4.3.6** Implement quiz logic in JavaScript (track answers, calculate score)
- [ ] **4.3.7** Display results on completion (score, correct answers)
- [ ] **4.3.8** Add mock quiz data (3 quizzes, 5 questions each)
- [ ] **4.3.9** Style quiz components (progress bar, selected state, results)

**Validation:** Quiz loads; user can select answers; score calculates correctly

---

### 4.4 Podcasts Page (`podcasts.html`)

- [ ] **4.4.1** Create page with consistent header/footer
- [ ] **4.4.2** Build hero section with page title
- [ ] **4.4.3** Add intro section explaining curated recommendations
- [ ] **4.4.4** Create podcast card component (image, title, host, description, link)
- [ ] **4.4.5** Build podcast grid layout
- [ ] **4.4.6** Add mock podcast data (8-10 curated recommendations)
- [ ] **4.4.7** Add external links to podcast platforms

**Validation:** Page renders correctly; links work; responsive grid

---

### 4.5 Resources Page (`resources.html`)

- [ ] **4.5.1** Create page with consistent header/footer
- [ ] **4.5.2** Build hero section with page title
- [ ] **4.5.3** Add resource categories (books, articles, videos, tools)
- [ ] **4.5.4** Create resource card component (title, type, description, link)
- [ ] **4.5.5** Build resource list/grid layout
- [ ] **4.5.6** Add mock resource data (10-12 items across categories)

**Validation:** Page renders correctly; external links work; categories clear

---

### 4.6 Blog Page (`blog.html`)

- [ ] **4.6.1** Create page with consistent header/footer
- [ ] **4.6.2** Build hero section with page title
- [ ] **4.6.3** Create blog post card component (featured image, title, date, excerpt)
- [ ] **4.6.4** Build blog post grid/list layout
- [ ] **4.6.5** Add mock blog post data (4 posts)
- [ ] **4.6.6** Create individual blog post template (if using CMS-generated pages)
- [ ] **4.6.7** Add pagination or "Load More" (if needed)
- [ ] **4.6.8** Integrate with CMS blog collection

**Validation:** Blog posts display; individual posts accessible; CMS integration works

---

## Phase 4 Checkpoint

**Stop here and request approval before final QA.**

Summary required:
- All 17 pages completed
- Quiz functionality working
- CMS fully integrated
- Lighthouse scores
- Any issues discovered

---

## Phase 5: Quality Assurance & Launch

### 5.1 Cross-Browser Testing

- [ ] **5.1.1** Test all pages in Chrome (desktop + mobile)
- [ ] **5.1.2** Test all pages in Safari (desktop + mobile)
- [ ] **5.1.3** Test all pages in Firefox (desktop)
- [ ] **5.1.4** Test all pages in Edge (desktop)
- [ ] **5.1.5** Document and fix any browser-specific issues

**Validation:** All pages render correctly in all target browsers

---

### 5.2 Responsive Testing

- [ ] **5.2.1** Test all pages at 320px (small mobile)
- [ ] **5.2.2** Test all pages at 375px (iPhone SE/mini)
- [ ] **5.2.3** Test all pages at 428px (iPhone Pro Max)
- [ ] **5.2.4** Test all pages at 768px (tablet portrait)
- [ ] **5.2.5** Test all pages at 1024px (tablet landscape/small desktop)
- [ ] **5.2.6** Test all pages at 1440px (standard desktop)
- [ ] **5.2.7** Test all pages at 1920px (large desktop)
- [ ] **5.2.8** Fix any responsive layout issues

**Validation:** All pages responsive across all breakpoints

---

### 5.3 Performance Optimisation

- [ ] **5.3.1** Run Lighthouse audit on all pages
- [ ] **5.3.2** Optimise images (compress, convert to WebP where beneficial)
- [ ] **5.3.3** Add lazy loading to below-fold images
- [ ] **5.3.4** Minify CSS (or configure Netlify to do so)
- [ ] **5.3.5** Review and optimise JavaScript
- [ ] **5.3.6** Ensure all pages achieve Lighthouse Performance ≥ 80

**Validation:** Lighthouse Performance ≥ 80 on all pages

---

### 5.4 Accessibility Audit

- [ ] **5.4.1** Run Lighthouse accessibility audit on all pages
- [ ] **5.4.2** Verify all images have alt text
- [ ] **5.4.3** Verify colour contrast meets WCAG AA
- [ ] **5.4.4** Test keyboard navigation on all pages
- [ ] **5.4.5** Verify form labels and ARIA attributes
- [ ] **5.4.6** Ensure all pages achieve Lighthouse Accessibility ≥ 90

**Validation:** Lighthouse Accessibility ≥ 90 on all pages

---

### 5.5 Content Review

- [ ] **5.5.1** Review all mock content for placeholder text (Lorem ipsum)
- [ ] **5.5.2** Verify all links work (no 404s)
- [ ] **5.5.3** Check spelling and grammar
- [ ] **5.5.4** Verify church details are accurate (address, service times, social links)
- [ ] **5.5.5** Review meta descriptions for SEO

**Validation:** All content professional and accurate; no broken links

---

### 5.6 Final Deployment

- [ ] **5.6.1** Merge feature branch to main
- [ ] **5.6.2** Verify Netlify auto-deploys successfully
- [ ] **5.6.3** Test production site thoroughly
- [ ] **5.6.4** Configure custom domain (when provided)
- [ ] **5.6.5** Verify SSL certificate is active
- [ ] **5.6.6** Test CMS on production
- [ ] **5.6.7** Submit site to Google Search Console (optional)

**Validation:** Production site fully functional; CMS working; domain configured

---

## Final Checkpoint

**Project complete. Request final sign-off.**

Final summary required:
- All 17 pages deployed and functional
- All acceptance criteria from PRD met
- Lighthouse scores (Performance ≥ 80, Accessibility ≥ 90)
- CMS operational
- Any known issues or future recommendations

---

## Notes / Changes Log

*Record any scope changes, discoveries, or deferred items here.*

| Date | Note |
|------|------|
| 4 Feb 2026 | Task list generated from PRD |

---

## Remediation Tasks

*If any validation fails, record remediation tasks here.*

| ID | Task | Status |
|----|------|--------|
| — | — | — |

