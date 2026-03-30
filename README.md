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
└── README.md
```

## 🚀 Deploy to GitHub Pages (Step by Step)

### 1. Add your logo
- Copy your `DanXFoto_logo_Gold.png` into the `images/` folder
- Rename it to `logo.png`

### 2. Create a GitHub account
- Go to https://github.com and sign up (free)

### 3. Create a new repository
- Click the **+** button → **New repository**
- Name it: `danxfoto` (or `yourusername.github.io` for root URL)
- Set to **Public**
- Click **Create repository**

### 4. Upload your files
**Option A — Drag & Drop (easiest):**
- Open your repository on GitHub
- Click **uploading an existing file**
- Drag all files and folders in
- Click **Commit changes**

**Option B — Git CLI:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOURUSERNAME/danxfoto.git
git push -u origin main
```

### 5. Enable GitHub Pages
- Go to your repo → **Settings** → **Pages** (left sidebar)
- Under **Source**, select **Deploy from a branch**
- Branch: **main**, Folder: **/ (root)**
- Click **Save**
- Wait 1–2 minutes ⏳

### 6. Your site is live! 🎉
URL will be: `https://YOURUSERNAME.github.io/danxfoto`

---

## 🌐 Custom Domain (danxfoto.com)

1. In GitHub Pages settings, enter `danxfoto.com` under **Custom domain**
2. At your domain registrar (GoDaddy / Namecheap), add these DNS records:
   ```
   Type: A     Name: @    Value: 185.199.108.153
   Type: A     Name: @    Value: 185.199.109.153
   Type: A     Name: @    Value: 185.199.110.153
   Type: A     Name: @    Value: 185.199.111.153
   Type: CNAME Name: www  Value: YOURUSERNAME.github.io
   ```
3. Check **Enforce HTTPS** in GitHub Pages settings
4. DNS propagation takes up to 24 hours

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
