# 🎬 Visual Media Create — Landing Page

A front-end landing page for **Visual Media Create**, a next-generation visual content agency. Built with **Vanilla JavaScript** and a fully modular CSS architecture, the project is designed to be clean, maintainable, and scalable — with an optional back-end layer powered by **Node.js + Express + Nodemailer** for contact form delivery.

---

## 🔗 Deploy

### 🔗 Access the page published here:

👉 https://kelvesmoura.github.io/Landing_Page-Visual_Media_Create/

---

## Table of Contents

- [🔗 Deploy](#-deploy)
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [CSS Architecture — Modular Design](#css-architecture--modular-design)
  - [Entry Point](#entry-point)
  - [Module Breakdown](#module-breakdown)
  - [Design Tokens (CSS Variables)](#design-tokens-css-variables)
- [JavaScript](#javascript)
- [Sections & Features](#sections--features)
- [Back-end Integration (Optional)](#back-end-integration-optional)
- [Mobile First](#mobile-first)
- [Getting Started](#getting-started)
- [External Dependencies](#external-dependencies)
- [License](#license)

---

## Project Overview

This is a single-page marketing landing page targeting agencies or freelancers in the digital creative space. It includes:

- A sticky, scroll-aware header with blur effect
- Hero section with dual CTA buttons
- Benefits, Services, Portfolio, Testimonials, FAQ, and Contact sections
- A functional contact form (wired to a Node.js back-end for email delivery)
- Footer with dynamic year rendering

---

## Tech Stack

| Layer                 | Technology                          |
| --------------------- | ----------------------------------- |
| Markup                | HTML5                               |
| Styling               | Vanilla CSS (Modular)               |
| Scripting             | Vanilla JavaScript (ES6+)           |
| Icons                 | Lucide Static (CDN)                 |
| Fonts                 | Google Fonts (Open Sans, Work Sans) |
| Back-end _(optional)_ | Node.js, Express, Nodemailer        |

---

## Project Structure

```
Landing_Page-Visual_Media_Create/
├── index.html
├── src/
│   ├── assets/
│   │   ├── favicon/
│   │   │   └── favicon.ico
│   │   └── img/
│   │       ├── brand_VisualCreateMedia.webp
│   │       └── default_imageProject.webp
│   ├── scripts/
│   │   └── main.js
│   └── style/
│       ├── style.css          ← CSS entry point (imports all modules)
│       ├── global.css         ← Design tokens, reset, base styles
│       ├── header.css
│       ├── hero.css
│       ├── benefits.css
│       ├── services.css
│       ├── portfolio.css
│       ├── testimonials.css
│       ├── faq.css
│       ├── contact.css
│       ├── footer.css
│       └── animation.css
└── .gitignore
```

---

## CSS Architecture — Modular Design

The styling layer follows a **module-per-section** pattern. Each section of the page has its own dedicated CSS file. This makes the codebase easy to navigate, debug, and extend — without the risk of styles bleeding between sections.

### Entry Point

`src/style/style.css` acts as the **single entry point** for all CSS. It imports every module in the correct cascade order:

```css
@import url(global.css);
@import url(header.css);
@import url(hero.css);
@import url(benefits.css);
@import url(services.css);
@import url(portfolio.css);
@import url(testimonials.css);
@import url(faq.css);
@import url(contact.css);
@import url(footer.css);
@import url(animation.css);
```

`index.html` only ever links to `style.css` — it never imports individual modules directly.

### Module Breakdown

| File               | Responsibility                                                      |
| ------------------ | ------------------------------------------------------------------- |
| `global.css`       | CSS custom properties (design tokens), reset rules, base typography |
| `header.css`       | Navigation bar, brand logo, CTA button, scroll-state class          |
| `hero.css`         | Full-width hero layout, alert badge, title, dual CTA                |
| `benefits.css`     | 3-column benefit cards with icon backgrounds                        |
| `services.css`     | Service cards with gradient backgrounds                             |
| `portfolio.css`    | Image grid / card layout with overlay info                          |
| `testimonials.css` | Client testimonial cards, stars, customer info                      |
| `faq.css`          | Question/answer card layout with icon indicators                    |
| `contact.css`      | Two-column layout: contact form + direct contact info               |
| `footer.css`       | Brand, tagline, social icons, copyright row                         |
| `animation.css`    | Reusable keyframe animations and animated utility classes           |

### Design Tokens (CSS Variables)

All visual constants are defined in `global.css` using CSS custom properties, making it trivial to retheme the entire site from a single location:

```css
:root {
  /* Typography */
  --global-font: "Open Sans", sans-serif;
  --alternative-font: "Work Sans", sans-serif;

  /* Brand Colors */
  --bpurple-color: #4b0082;
  --borange-color: #ff6f00;
  --boff-white-color: #f0e8e1;
  --bgray-color: #2c2c2c;

  /* Foreground / UI Colors */
  --fgray-color: #b1a6b7;
  --fline-color: #6e4477;
  --white-color: #fff;
  --black-color: #000;
  --star-color: #ff6f00;

  /* Gradients */
  --gradient-brand: linear-gradient(to right, #560a7c, #ff5722);
  --header-gradient-color: linear-gradient(90deg, #4b0082, #ff6f00, #4b0082);
  --footer-gradient-color: linear-gradient(180deg, #3c2a4a, #612568);
  --button-gradient-color: linear-gradient(to right, #ff6f00, #4b0082);
  --button-invert-gradient-color: linear-gradient(to right, #4b0082, #ff6f00);

  /* Section Backgrounds */
  --hero-background-color: linear-gradient(
    135deg,
    rgb(219, 204, 229),
    rgb(236, 229, 230),
    rgb(242, 211, 196)
  );
  --benefits-gradient-color: linear-gradient(135deg, #e8e4ea, #e1dbe6);
  --services-gradient-color: linear-gradient(135deg, #e3d7dd, #e1dae5);
  --portfolio-gradient-color: linear-gradient(135deg, #e4dfe8, #f1e3db);
  --testimonials-gradient-color: linear-gradient(135deg, #ede8e8, #f1e7e0);
  --contact-gradient-color: linear-gradient(135deg, #e1d5dc, #f2ded1);
}
```

> **Tip:** When adding new sections, always define section-specific colors as new tokens in `global.css` — never hardcode hex values inside section modules.

---

## JavaScript

`src/scripts/main.js` is intentionally minimal, handling only essential page-level interactions:

```js
// Adds a backdrop-blur class to the header on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Dynamically renders the current year in the footer copyright
document.querySelector("#year").textContent = new Date().getFullYear();
```

No frameworks, no build tools required — just browser-native ES6.

---

## Sections & Features

| Section          | Key Details                                                       |
| ---------------- | ----------------------------------------------------------------- |
| **Header**       | Brand logo, navigation links, CTA button, scroll blur effect      |
| **Hero**         | Agency badge, headline with styled span, dual CTA (play + arrow)  |
| **Benefits**     | 3 cards — Lightning Results, Smart Targeting, Proven Innovation   |
| **Services**     | 3 cards — AI-Powered Design, Immersive Content, Quantum Visuals   |
| **Portfolio**    | 6-card image grid with project name and category overlay          |
| **Testimonials** | 3 client cards with star rating, quote, name and company          |
| **FAQ**          | 4 expandable-ready cards covering common client questions         |
| **Contact**      | Form (name, company, email, phone, message) + direct contact info |
| **Footer**       | Brand, tagline, social links, dynamic copyright year              |

---

## Back-end Integration (Optional)

> This project is focused on the front-end. The following is a suggested approach for enabling server-side form delivery — implementation is left to the developer's discretion.

The contact form is ready to be connected to a lightweight back-end layer. The recommended stack for this integration is **Node.js** with **Express** as the HTTP server and **Nodemailer** as the email delivery library.

The general flow would work as follows: the front-end submits the form data as a JSON payload via `fetch` to an Express endpoint, which then uses Nodemailer to forward the submission to the agency's inbox. CORS should be configured to allow requests from the front-end origin, and all credentials (email user, password, or app token) must be stored securely in environment variables using a `.env` file — never hardcoded or committed to version control.

**Suggested packages:**

- `express` — HTTP server and routing
- `nodemailer` — SMTP-based email delivery
- `cors` — Cross-Origin Resource Sharing middleware
- `dotenv` — Environment variable management

**Recommended structure for the back-end:**

A `server.js` file at the project root (or inside a dedicated `/server` directory) should handle the POST route for the contact form, validate the incoming fields, and trigger the email dispatch. The front-end `main.js` would intercept the form submit event, collect the field values, and send them to this endpoint asynchronously.

---

## Mobile First

> ⚠️ **Mobile First support is currently under development.**

The current layout is built and optimized for desktop viewports. Responsive breakpoints and a mobile-first CSS approach are planned for an upcoming release. The `<meta name="viewport">` tag is already in place to prepare for this transition.

When mobile support is implemented, the convention will follow the standard mobile-first pattern — base styles targeting small screens, with `min-width` media queries expanding layouts upward:

```css
/* Base: mobile */
.cards-benefits {
  display: flex;
  flex-direction: column;
}

/* Tablet and up */
@media (min-width: 768px) {
  .cards-benefits {
    flex-direction: row;
  }
}
```

---

## Getting Started

No build step required. Simply open `index.html` in a browser or serve it with any static file server:

```bash
# Using Node.js http-server (optional)
npx http-server .

# Or with Python
python3 -m http.server
```

For the optional back-end, refer to the [Back-end Integration](#back-end-integration-optional) section for the suggested stack and structure.

---

## External Dependencies

| Dependency   | Source       | Purpose                         |
| ------------ | ------------ | ------------------------------- |
| Lucide Icons | CDN (unpkg)  | Icon set used throughout the UI |
| Open Sans    | Google Fonts | Primary body font               |
| Work Sans    | Google Fonts | Alternative / heading font      |

---

## License

This project is proprietary to **Visual Media Create**. Developed and maintained by [M2K Soluções](https://kelvesmoura.com).
