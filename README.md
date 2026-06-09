# Harshvardhan Pandhare - Portfolio Setup Guide

## Files
```
portfolio/
├── index.html   ← Main HTML (all pages)
├── styles.css   ← VS Code theme styling
├── script.js    ← Tab switching + typing effect
└── README.md    ← This file
```

## 🚀 Deploy to Vercel (Recommended — like ashishwale.vercel.app)

### Step 1: Create a GitHub Repo
1. Go to https://github.com/new
2. Name it `portfolio` (or `HarshuPandhare.github.io`)
3. Set it to **Public**
4. Click **Create repository**

### Step 2: Push your files
```bash
# In your terminal:
git clone https://github.com/HarshuPandhare/portfolio.git
cd portfolio

# Copy index.html, styles.css, script.js into this folder, then:
git add .
git commit -m "Initial portfolio"
git push origin main
```

### Step 3: Deploy on Vercel
1. Go to https://vercel.com and sign in with GitHub
2. Click **Add New → Project**
3. Import your `portfolio` repo
4. Click **Deploy** (no config needed — it's plain HTML)
5. Your URL will be: `https://portfolio-harshu.vercel.app`  
   You can customize this to `harshupandhare.vercel.app` in Vercel settings.

---

## 📸 Add Your Real Profile Photo

Replace the placeholder initials with your actual photo:

1. Add your photo to the portfolio folder, e.g. `photo.jpg`
2. In `index.html`, find:
```html
<div class="profile-placeholder">
  <span>HP</span>
</div>
```
3. Replace it with:
```html
<img src="photo.jpg" alt="Harshvardhan Pandhare" />
```
(The CSS already handles circular cropping.)

---

## ✏️ Customize Content

All content is in `index.html`:
- **Name / Role** → Search for `Harshvardhan Pandhare`
- **Skills** → Find `skills-grid` section
- **Projects** → Find `projects-grid` section
- **Contact links** → Find `contact-block` section
- **Typing roles** → Edit the `roles` array in `script.js`

---

## 🌐 Optional: Custom Domain

In Vercel → Project Settings → Domains → Add your domain.

---

## 🧩 Optional Enhancements
- Add `favicon.ico` for browser tab icon
- Add a resume PDF and link it in Contact
- Add Google Analytics for visitor tracking
