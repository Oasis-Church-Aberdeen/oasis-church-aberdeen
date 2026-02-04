# Oasis Church Aberdeen Website

A modern, responsive website for Oasis Church Aberdeen built with vanilla HTML, CSS, and JavaScript.

## Project Overview

This website serves as the digital home for Oasis Church Aberdeen, providing information about services, events, sermons, and ways to connect with the community.

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid
- **JavaScript** - Vanilla ES6+
- **Hosting** - Netlify
- **CMS** - Decap CMS (formerly Netlify CMS)
- **Forms** - Netlify Forms

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)
- Git

### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd oasis_church_website_V2
   ```

2. Open `index.html` in your browser, or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (npx)
   npx serve
   ```

3. Visit `http://localhost:8000` in your browser

### Project Structure

```
oasis_church_website_V2/
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # Main JavaScript file
├── images/                 # Image assets
├── admin/
│   ├── index.html          # Decap CMS admin page
│   └── config.yml          # CMS configuration
├── _data/                  # JSON data files for CMS
├── tasks/                  # Project documentation
├── index.html              # Homepage
├── about.html              # About page
├── contact.html            # Contact page
├── sundays.html            # Service information
├── sermons.html            # Sermon archive
├── beliefs.html            # Statement of beliefs
├── children-youth.html     # Kids & youth ministry
├── connect-groups.html     # Small groups
├── calendar.html           # Events calendar
├── giving.html             # Donation information
├── facility-hire.html      # Venue hire
├── new-here.html           # First-time visitors
├── partner.html            # Volunteer opportunities
├── quizzes.html            # Sermon quizzes
├── podcasts.html           # Podcast recommendations
├── resources.html          # Christian resources
├── blog.html               # Church blog
├── netlify.toml            # Netlify configuration
└── README.md               # This file
```

## Deployment

The site is configured for automatic deployment via Netlify:

1. Push changes to the `main` branch
2. Netlify automatically builds and deploys

### Environment Variables

No environment variables are required for basic functionality.

## CMS Access

The content management system is available at `/admin` after deployment. Authentication is handled via Netlify Identity.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

This site aims to meet WCAG 2.1 AA standards:
- Semantic HTML structure
- Keyboard navigation support
- Sufficient colour contrast
- Alt text for images
- ARIA labels where appropriate

## Colour Palette

| Colour | Hex | Usage |
|--------|-----|-------|
| Primary (Deep Teal) | `#0D7377` | Headers, buttons, links |
| Accent (Coral) | `#FF6B35` | CTAs, highlights |
| Neutral (Warm Grey) | `#F5F5F5` | Backgrounds |
| Text (Dark Grey) | `#2D3436` | Body text |
| White | `#FFFFFF` | Cards, light backgrounds |

## License

© 2026 Oasis Church Aberdeen. All rights reserved.

## Contact

For website enquiries, contact the church office or submit a message via the contact form.
