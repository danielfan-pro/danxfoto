# DanXFoto Photography Website

A complete, production-ready photography portfolio website.

## 📁 File Structure

```
danxfoto/
├── index.html          ← Main page (all sections)
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Interactions & animations
├── images/
│   └── logo.png        ← ⚠️ Add your logo PNG here!
├── favicon.svg
└── README.md
```
---

## 📧 Contact Form Setup

The form currently simulates sending. To make it actually send emails:

**Option A — Formspree (free, no code needed):**
1. Go to https://formspree.io and create an account
2. Create a form → get your form ID
3. In `index.html`, change `<form class="contact-form" id="contactForm">` to:
   `<form class="contact-form" id="contactForm" action="https://formspree.io/f/YOURFORMID" method="POST">`
4. Remove the JS form handler in `main.js`

**Option B — EmailJS (stays on one page):**
1. Go to https://emailjs.com
2. Follow their setup guide
3. Replace the `setTimeout` block in `main.js` with EmailJS send call

---

## 🖼️ Adding Real Photos

Replace the placeholder colored divs in `index.html` with real images:

```html
<!-- Change this: -->
<div class="portfolio-img" style="background:#e8d5c8;">

<!-- To this: -->
<div class="portfolio-img" style="background-image:url('images/wedding-01.jpg'); background-size:cover; background-position:center;">
```

## ✏️ Customizing Content

- **Your name/contact**: Search for `Dan` and `hello@danxfoto.com` in `index.html`
- **Prices**: Find the `service-price` sections in `index.html`
- **Colors**: Edit CSS variables at the top of `css/style.css`
- **Fonts**: Change the Google Fonts import in `index.html`
