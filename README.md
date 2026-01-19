# NovaFlow Landing Page

A fully responsive, production-ready landing page for NovaFlow—an AI-powered productivity and workflow automation platform. Built with semantic HTML5, modern CSS, and vanilla JavaScript.

## 🚀 Features

- **Fully Responsive Design**
  - Mobile (360–430px)
  - Tablet (768–1024px)
  - Desktop (1280–1440px)
  - Ultrawide (1920px+)

- **SEO Optimized**
  - Semantic HTML structure
  - Single H1 heading
  - Proper heading hierarchy (H2, H3)
  - Meta tags (title, description, Open Graph)
  - Descriptive alt text for all images
  - Keyword-optimized content

- **CMS-Ready Architecture**
  - Dynamic content rendering via JavaScript
  - Structured data arrays for easy CMS integration
  - Features, Testimonials, Use Cases, Steps, and FAQ collections

- **Accessibility**
  - ARIA labels and roles
  - Keyboard navigation support
  - Focus states on interactive elements
  - Reduced motion support
  - Screen reader friendly

- **Modern Design**
  - Dark theme with accent colors
  - Smooth transitions and hover effects
  - Professional typography scale
  - Consistent spacing system

## 📁 File Structure

```
Better Assignment/
├── index.html          # Main HTML structure
├── styles.css          # All styles and responsive breakpoints
├── script.js           # CMS data and dynamic rendering
└── README.md           # Project documentation
```

## 🛠️ Setup & Usage

### Quick Start

1. Clone or download this repository
2. Open `index.html` in a modern web browser
3. No build process or dependencies required

### Local Development

For a better development experience, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## 📐 Responsive Breakpoints

The design uses CSS custom properties and fluid typography to adapt across all screen sizes:

- **Mobile**: `360px - 430px` (4-column grid)
- **Tablet**: `768px - 1024px` (8-column grid)
- **Desktop**: `1280px - 1440px` (12-column grid)
- **Ultrawide**: `1920px+` (max-width container with centered content)

### Key Responsive Features

- Fluid typography using `clamp()`
- Flexible grid layouts with `auto-fit` and `minmax()`
- Stacked navigation on mobile
- Responsive hero section (split on desktop, stacked on mobile)
- Adaptive card grids

## 🎨 Design System

### Color Palette

- **Background**: `#0E1116` (dark)
- **Surface**: `rgba(255, 255, 255, 0.04)`
- **Text**: `#F5F7FB`
- **Muted Text**: `#C7CEDB`
- **Accent**: `#6C5CE7` (primary CTA)
- **Accent Hover**: `#5A4AD6`

### Typography

- **Font Family**: Inter (Google Fonts)
- **H1**: `clamp(2rem, 2.8vw + 1rem, 3rem)` (Hero only)
- **H2**: `clamp(1.6rem, 1.8vw + 0.8rem, 2.2rem)` (Section headers)
- **H3**: `clamp(1.1rem, 0.6vw + 0.9rem, 1.3rem)` (Card titles)
- **Body**: `16px / 1.6` line height

### Spacing Scale

- `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`

## 🔍 SEO Implementation

### Meta Tags

- **Title**: "NovaFlow | AI Workflow Automation for Modern Teams" (54 chars)
- **Description**: "Boost productivity with NovaFlow—AI workflow automation for developers, founders, and remote teams with reliable releases." (132 chars)
- **Open Graph**: Title, description, type, URL, and image tags included

### Semantic Structure

- Single `<h1>` in hero section
- Logical `<h2>` for each major section
- `<h3>` for feature/card titles
- Proper use of `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`

### Keywords

Content includes relevant keywords:
- Productivity
- Automation
- Workflow
- AI-powered
- Developers
- Remote teams

## 💾 CMS Structure

The project uses JavaScript arrays that can easily be replaced with CMS API calls. Current collections:

### Features Collection
```javascript
{
  name: string,
  description: string,
  icon: string,
  category: string
}
```

### Testimonials Collection
```javascript
{
  name: string,
  role: string,
  company: string,
  quote: string,
  avatar: string (URL)
}
```

### Use Cases Collection
```javascript
{
  title: string,
  description: string,
  category: string
}
```

### Steps Collection
```javascript
{
  title: string,
  description: string
}
```

### FAQ Collection
```javascript
{
  question: string,
  answer: string
}
```

## 🎯 Sections

1. **Hero** - Main value proposition with CTA
2. **Features** - Key product features (CMS-driven)
3. **How It Works** - Three-step process
4. **Use Cases** - Target audience benefits
5. **Testimonials** - Customer quotes (CMS-driven)
6. **Pricing** - Two-tier pricing structure
7. **FAQ** - Common questions (CMS-driven)
8. **CTA** - Final call-to-action
9. **Rationale** - Design decisions documentation
10. **Footer** - Links and legal information

## 🔧 Customization

### Updating Content

1. **CMS Data**: Edit arrays in `script.js`
2. **Copy**: Modify text directly in `index.html`
3. **Colors**: Update CSS custom properties in `styles.css` (`:root`)

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add corresponding styles in `styles.css`
3. If CMS-driven, add data array and render function in `script.js`

### Changing Colors

Edit the CSS custom properties at the top of `styles.css`:

```css
:root {
  --bg: #0E1116;
  --accent: #6C5CE7;
  /* ... */
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Uses modern CSS features (Grid, Flexbox, Custom Properties, `clamp()`) with graceful degradation.

## 📱 Mobile Navigation

The site includes a mobile-friendly hamburger menu that:
- Toggles a drawer menu on mobile devices
- Includes all navigation links
- Provides access to CTA buttons
- Closes automatically when a link is clicked

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators on interactive elements
- Screen reader friendly markup
- Reduced motion support (`prefers-reduced-motion`)

## 🚀 Performance

- No external dependencies (except Google Fonts)
- Minimal JavaScript (vanilla JS only)
- Optimized CSS with custom properties
- Efficient grid layouts
- No layout shift (CLS)

## 📝 Design Decisions

See the "Design and implementation decisions" section on the page for detailed rationale on:
- Layout choices
- Responsiveness approach
- CMS structure
- SEO decisions

**Note**: Replace placeholder images, update meta tags with actual URLs, and connect to your CMS/backend as needed for production deployment.
