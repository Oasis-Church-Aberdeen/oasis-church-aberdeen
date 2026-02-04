# PRD: Oasis Church Aberdeen Website

## 1. Overview

A modern, responsive static website for **Oasis Church Aberdeen**, an evangelical church in Bridge of Don, Aberdeen, Scotland. The website will serve as the church's primary digital presence, helping visitors discover service times, access sermon content, find community groups, and learn about the church's mission.

**Problem Statement:** The church needs a professional, contemporary web presence that welcomes first-time visitors, serves regular attendees, and allows non-technical staff to easily update content (sermons, events, blog posts).

---

## 2. Platforms & Release Targets

| Platform | Target | Notes |
|----------|--------|-------|
| **Web (PWA)** | ✅ In Scope | Primary platform |
| **iOS** | ❌ Out of Scope | Future consideration |
| **Android** | ❌ Out of Scope | Future consideration |

### Browser Support
- Chrome (latest 2 versions)
- Safari (latest 2 versions)
- Firefox (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 14+)
- Chrome for Android

### Device Targets
- Desktop (1920px, 1440px, 1280px)
- Tablet (1024px, 768px)
- Mobile (428px, 375px, 320px)

---

## 3. Recommended Stack & Rationale

### Primary Recommendation: Vanilla HTML5/CSS3/JS + Decap CMS

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Structure** | HTML5 | Simple, fast, no build step required |
| **Styling** | CSS3 (Grid/Flexbox) | Modern layout with CSS custom properties for theming |
| **Interactivity** | Vanilla JavaScript | Lightweight, no framework overhead |
| **CMS** | Decap CMS (formerly Netlify CMS) | Git-based, free, visual editor for non-technical users |
| **Hosting** | Netlify | Free tier, automatic deploys from Git, built-in forms |
| **Images** | Unsplash/Pexels (public domain) | Free, high-quality imagery |

### Why This Stack?
- **Simplicity:** No build tools, frameworks, or complex dependencies
- **Performance:** Static HTML loads fast, great for SEO
- **Maintainability:** Non-technical editors can update content via visual CMS
- **Cost:** Free hosting + free CMS = zero ongoing costs
- **Future-proof:** Easy to migrate to a framework later if needed

### Alternative Considered
| Option | Pros | Cons |
|--------|------|------|
| **Astro + Decap CMS** | Component reuse, partial hydration | Adds build complexity |
| **11ty + Decap CMS** | Templating, better DX | Steeper learning curve |

**Decision:** Proceed with vanilla stack for simplicity, given the church's non-technical team.

---

## 4. Goals

| # | Goal | Measure |
|---|------|---------|
| G1 | Launch all 17 pages with mock content | 17/17 pages deployed |
| G2 | Enable non-technical content editing | Staff can update sermons/events via CMS |
| G3 | Mobile-first responsive design | Passes Google Mobile-Friendly Test |
| G4 | Contemporary, slick aesthetic | Matches/exceeds Connect City Church quality |
| G5 | Fast page load | <3s Time to Interactive on 3G |
| G6 | SEO-ready | Proper meta tags, semantic HTML, sitemap |

---

## 5. User Stories & Personas

### Persona 1: First-Time Visitor (Sarah, 32)
> *"I'm curious about this church and want to know what to expect before I visit."*

- **US1.1:** As a first-time visitor, I want to see service times prominently so I know when to attend.
- **US1.2:** As a first-time visitor, I want a "Plan Your Visit" guide so I feel prepared.
- **US1.3:** As a first-time visitor, I want to watch a sermon online to get a sense of the teaching style.

### Persona 2: Regular Attendee (David, 45)
> *"I want to catch up on sermons I missed and find out about upcoming events."*

- **US2.1:** As a regular attendee, I want to browse the sermon archive so I can re-watch messages.
- **US2.2:** As a regular attendee, I want to see upcoming events so I can plan my involvement.
- **US2.3:** As a regular attendee, I want to find connect groups so I can join a small community.

### Persona 3: Parent (Emma, 38)
> *"I need to know if there are programs for my kids before I bring my family."*

- **US3.1:** As a parent, I want to see children/youth program details so I know my kids will be cared for.
- **US3.2:** As a parent, I want to know the safety policies for children's ministry.

### Persona 4: Content Editor (Pastor James)
> *"I need to add new sermons and update events without knowing code."*

- **US4.1:** As a content editor, I want a visual interface to add new sermons without editing HTML.
- **US4.2:** As a content editor, I want to create and publish blog posts easily.
- **US4.3:** As a content editor, I want to update the events calendar without developer help.

### Persona 5: Community Member (Local Business Owner)
> *"I want to hire the church hall for an event."*

- **US5.1:** As a community member, I want to see facility hire options and pricing.
- **US5.2:** As a community member, I want to submit a booking enquiry online.

---

## 6. Functional Requirements

### 6.1 Navigation & Layout
| ID | Requirement | Priority |
|----|-------------|----------|
| FR1.1 | Sticky header navigation with logo and menu | P0 |
| FR1.2 | Mobile hamburger menu with smooth animation | P0 |
| FR1.3 | Footer with contact info, social links, quick links | P0 |
| FR1.4 | Breadcrumb navigation on inner pages | P2 |

### 6.2 Homepage (`index.html`)
| ID | Requirement | Priority |
|----|-------------|----------|
| FR2.1 | Hero section with welcoming image and CTA ("Plan Your Visit") | P0 |
| FR2.2 | Service times prominently displayed | P0 |
| FR2.3 | Latest sermon card with YouTube thumbnail | P0 |
| FR2.4 | Upcoming events section (next 3 events) | P1 |
| FR2.5 | Quick links to key pages (About, Sermons, Connect Groups) | P1 |
| FR2.6 | WhatsApp community join button | P2 |

### 6.3 Core Pages (P0)
| ID | Page | Key Requirements |
|----|------|------------------|
| FR3.1 | `about.html` | Church history, vision, leadership team bios |
| FR3.2 | `contact.html` | Contact form, Google Maps embed, address, social links |
| FR3.3 | `sundays.html` | Service times, what to expect, parking info |

### 6.4 Content Pages (P1)
| ID | Page | Key Requirements |
|----|------|------------------|
| FR4.1 | `sermons.html` | Grid of sermons with thumbnails, filter by series, YouTube embeds |
| FR4.2 | `children-youth.html` | Program descriptions, age groups, safety info |
| FR4.3 | `beliefs.html` | Statement of faith, core doctrines |

### 6.5 Engagement Pages (P2)
| ID | Page | Key Requirements |
|----|------|------------------|
| FR5.1 | `connect-groups.html` | List of groups with times/locations, sign-up form |
| FR5.2 | `calendar.html` | Monthly calendar view with event cards |
| FR5.3 | `giving.html` | Online donation info, bank details, gift aid |
| FR5.4 | `facility-hire.html` | Room descriptions, pricing, enquiry form |

### 6.6 Differentiator Pages (P3)
| ID | Page | Key Requirements |
|----|------|------------------|
| FR6.1 | `new-here.html` | First-time visitor guide, FAQ, what to expect |
| FR6.2 | `partner.html` | Volunteer opportunities, partnership info |
| FR6.3 | `quizzes.html` | JavaScript-based sermon quizzes (no persistence) |
| FR6.4 | `podcasts.html` | Curated podcast recommendations with links |
| FR6.5 | `blog.html` | News/updates feed, individual post pages |
| FR6.6 | `resources.html` | Downloadable resources, external links |

### 6.7 CMS Integration
| ID | Requirement | Priority |
|----|-------------|----------|
| FR7.1 | Decap CMS configured for sermon content | P1 |
| FR7.2 | CMS collections for: sermons, events, blog posts, connect groups | P1 |
| FR7.3 | Visual editor accessible at `/admin` | P1 |
| FR7.4 | Git-based storage (no external database) | P1 |

### 6.8 Forms & Interactions
| ID | Requirement | Priority |
|----|-------------|----------|
| FR8.1 | Contact form with Netlify Forms integration | P0 |
| FR8.2 | Connect group sign-up form | P2 |
| FR8.3 | Facility hire enquiry form | P2 |
| FR8.4 | Sermon quiz interactions (show score on completion) | P3 |

---

## 7. Acceptance Criteria & Test Strategy

### Test Approach
- **Manual Testing:** Visual inspection, responsive testing, form submissions
- **Automated Testing:** Lighthouse audits, HTML validation, link checking
- **Cross-Browser Testing:** Chrome, Safari, Firefox, Edge (desktop + mobile)

### Acceptance Criteria

| ID | Criteria | Test Method |
|----|----------|-------------|
| AC1 | All 17 pages render without errors | Manual + HTML validator |
| AC2 | Navigation works consistently across all pages | Manual click-through |
| AC3 | Mobile menu opens/closes smoothly on touch devices | Manual on iOS/Android |
| AC4 | All forms submit successfully to Netlify | Manual submission test |
| AC5 | YouTube embeds load and play on sermon pages | Manual playback test |
| AC6 | Sermon quiz displays questions and calculates score | Manual interaction |
| AC7 | Google Maps embed loads on contact page | Manual verification |
| AC8 | CMS admin panel accessible at `/admin` | Manual login test |
| AC9 | Content editors can add a new sermon via CMS | End-to-end CMS test |
| AC10 | Site passes Google Mobile-Friendly Test | Automated test |
| AC11 | Lighthouse Performance score ≥ 80 | Lighthouse audit |
| AC12 | All images have alt text | Automated accessibility scan |
| AC13 | Site deploys successfully to Netlify | Deployment verification |

---

## 8. Definition of Done

A page/feature is **done** when:

- [ ] HTML is valid (W3C validator)
- [ ] Responsive at all breakpoints (320px to 1920px)
- [ ] Cross-browser tested (Chrome, Safari, Firefox, Edge)
- [ ] All links work (no 404s)
- [ ] Images optimised and have alt text
- [ ] Forms submit correctly
- [ ] CMS content collections configured (if applicable)
- [ ] Lighthouse Performance ≥ 80
- [ ] Lighthouse Accessibility ≥ 90
- [ ] Code committed to Git

---

## 9. Non-Goals (Out of Scope)

| Item | Reason |
|------|--------|
| Native iOS/Android apps | Future phase consideration |
| User accounts / authentication | Not needed for public church site |
| E-commerce / payment processing | Giving page links to external platform |
| Sermon quiz persistence / leaderboards | Phase 2 feature |
| Live streaming integration | Not requested |
| Multi-language support | English only for V1 |
| Advanced search functionality | Simple site doesn't require it |
| Database backend | Static site with Git-based CMS |

---

## 10. Design Considerations

### Visual Style
- **Inspiration:** Connect City Church (clean, contemporary, welcoming)
- **Colour Palette:**
  - Primary: Deep Teal (`#0D7377`)
  - Accent: Coral/Orange (`#FF6B35`)
  - Neutral: Warm Grey (`#F5F5F5`)
  - Text: Dark Grey (`#2D3436`)
  - White: (`#FFFFFF`)

### Typography
- **Headings:** Modern sans-serif (e.g., Inter, Poppins)
- **Body:** Clean readable sans-serif (e.g., Inter, Open Sans)
- **Size Scale:** 16px base, modular scale for hierarchy

### UI Patterns
- Large hero sections with overlay text
- Card-based layouts for sermons/events
- Subtle hover animations
- Smooth scroll behaviour
- Floating action button for WhatsApp (mobile)

### Imagery
- Warm, welcoming photography
- Diverse, inclusive representation
- Public domain sources: Unsplash, Pexels
- Placeholder images for mock content

---

## 11. Technical Considerations

### File Structure
```
oasis_church_website_V2/
├── index.html
├── about.html
├── contact.html
├── sundays.html
├── sermons.html
├── children-youth.html
├── beliefs.html
├── connect-groups.html
├── calendar.html
├── giving.html
├── facility-hire.html
├── new-here.html
├── partner.html
├── quizzes.html
├── podcasts.html
├── blog.html
├── resources.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   └── (optimised images)
├── admin/
│   └── index.html (Decap CMS)
├── _data/
│   └── (JSON content files for CMS)
├── netlify.toml
└── README.md
```

### Decap CMS Setup
- Admin panel at `/admin/index.html`
- Config at `/admin/config.yml`
- Content stored as JSON/Markdown in `/_data/` or `/_posts/`
- Collections: sermons, events, blog-posts, connect-groups

### Netlify Configuration
- Auto-deploy from Git (main branch)
- Form handling enabled
- Custom domain configuration (TBD)
- SSL certificate (automatic via Netlify)

### Performance Targets
| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3s |
| Total Page Size | < 1MB |
| Image Optimisation | WebP with fallbacks |

---

## 12. Implementation Notes

### Recommended Build Sequence

**Phase 1: Foundation (P0)**
1. Set up project structure and Git repository
2. Create `styles.css` with CSS custom properties for theming
3. Build reusable header/footer components
4. Implement responsive navigation with mobile menu
5. Build homepage (`index.html`) with all sections
6. Build core pages: `about.html`, `contact.html`, `sundays.html`
7. Set up Netlify deployment

**Phase 2: Content (P1)**
1. Build `sermons.html` with grid layout and mock data
2. Build `children-youth.html`
3. Build `beliefs.html`
4. Set up Decap CMS with sermon collection
5. Configure Netlify Forms for contact form

**Phase 3: Engagement (P2)**
1. Build `connect-groups.html` with sign-up form
2. Build `calendar.html` with event cards
3. Build `giving.html`
4. Build `facility-hire.html` with enquiry form
5. Add CMS collections for events and groups

**Phase 4: Differentiators (P3)**
1. Build `new-here.html` visitor guide
2. Build `partner.html`
3. Implement `quizzes.html` with JavaScript interactions
4. Build `podcasts.html` and `resources.html`
5. Build `blog.html` with CMS integration

### Edge Cases to Handle
- Empty sermon archive (show "Coming soon" message)
- No upcoming events (show "Check back soon" message)
- Form submission errors (display user-friendly error)
- YouTube embed fails to load (show fallback link)
- Very long sermon titles (CSS truncation)

### Accessibility Requirements
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Skip to main content link
- Sufficient colour contrast (WCAG AA)
- Focus indicators on interactive elements

---

## 13. Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Pages Deployed | 17/17 | Deployment verification |
| Mobile-Friendly | Pass | Google Mobile-Friendly Test |
| Lighthouse Performance | ≥ 80 | Lighthouse audit |
| Lighthouse Accessibility | ≥ 90 | Lighthouse audit |
| CMS Usability | Staff can add sermon in < 5 min | User testing |
| Page Load Time | < 3s on 3G | WebPageTest |

---

## 14. Open Questions

| # | Question | Owner | Status |
|---|----------|-------|--------|
| Q1 | What is the custom domain for the site? | Client | Open |
| Q2 | Who will have CMS admin access? | Client | Open |
| Q3 | Are there existing brand guidelines (fonts, colours)? | Client | Open |
| Q4 | Should giving page link to an external donation platform? Which one? | Client | Open |
| Q5 | Are there real sermon YouTube links to use, or continue with mock? | Client | Open |
| Q6 | What email should form submissions be sent to? | Client | Open |

---

## 15. Appendix: Source Notes

### Files Reviewed
| File | Key Information Extracted |
|------|---------------------------|
| `build-oasis-website.txt` | Page priority matrix (P0-P3), technical stack (vanilla HTML/CSS/JS), file structure, mock data requirements, success criteria, design inspiration (Connect City Church) |
| `PROJECT_BRIEF.md` | Church details (location, service times), target audience, social media links, current status (17 pages structured, pending content), next steps |

### Church Details (for content reference)
- **Name:** Oasis Church Aberdeen
- **Address:** Laverockbraes, Whitestripes Road, Bridge of Don, Aberdeen AB22 8AW
- **Service Time:** Sundays at 10:30am
- **Mission:** "A community of real people discovering life, hope, and purpose together"
- **Facebook:** https://facebook.com/OasisChurchAberdeen
- **Instagram:** https://instagram.com/oasischurchaberdeen
- **YouTube:** https://youtube.com/@oasischurchaberdeen

---

*PRD Generated: 4 February 2026*
*Version: 1.0*
