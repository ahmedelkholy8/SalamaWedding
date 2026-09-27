# Mohamed Salama & F - Wedding Invitation

A premium, luxury Islamic wedding invitation website designed for mobile-first experience.

## 🚀 Deployment to GitHub Pages - IMPORTANT

### ⚠️ Fix for MIME Type Error

If you're seeing "Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of application/octet-stream", follow these steps:

### Solution 1: Use GitHub Actions (Recommended)

1. **Push all files to your repository:**
```bash
git add .
git commit -m "Deploy wedding invitation"
git push origin main
```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** tab
   - Click **Pages** in the left sidebar
   - Under **Source**, select **GitHub Actions** (NOT "Deploy from a branch")
   - The workflow will automatically build and deploy

3. **Wait 1-2 minutes** for deployment to complete

4. **Your site will be at:** `https://ahmedelkholy8.github.io/SalamaWedding/`

### Solution 2: Manual Deployment with gh-pages

```bash
# Install gh-pages package
npm install -D gh-pages

# Add deploy script to package.json:
# "scripts": {
#   "deploy": "npm run build && gh-pages -d dist"
# }

# Deploy
npm run deploy
```

Then in GitHub Settings → Pages:
- Source: **Deploy from a branch**
- Branch: **gh-pages** / **root**

### Solution 3: Check Your Current Setup

If you already deployed but getting the error:

1. **Verify GitHub Pages is enabled:**
   - Go to Settings → Pages
   - Make sure it shows "Your site is live at..."

2. **Check the deployment source:**
   - Should be either "GitHub Actions" OR "Deploy from a branch"
   - NOT pointing to source files

3. **Clear browser cache:**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Or open in incognito/private window

4. **Verify the URL:**
   - Correct: `https://ahmedelkholy8.github.io/SalamaWedding/`
   - NOT: `https://ahmedelkholy8.github.io/` (missing repo name)

## 📱 Features

- ✨ Luxury Islamic wedding invitation design
- 🎬 Cinematic envelope opening animation
- 📱 Mobile-first responsive design (360px - 430px optimized)
- 🌙 RTL support for Arabic content
- ⏰ Live countdown to wedding date
- 📍 Venue location with Google Maps integration
- 📝 RSVP section (placeholder for WhatsApp/Form integration)

## 🎨 Design System

**Colors:**
- Primary: Warm Ivory/Cream (#faf6f0)
- Secondary: Deep Emerald Green (#1a3a2a)
- Accent: Muted Luxury Gold (#c9a84c)
- Text: Dark Charcoal (#2a2a2a)

**Typography:**
- Arabic: Amiri, Noto Naskh Arabic
- English: Playfair Display, Cormorant Garamond

## 🔧 Configuration

Edit wedding details in `src/data/weddingData.ts`:

```typescript
export const weddingData = {
  groom: "Mohamed Salama",
  bride: "F",
  date: "2026-10-10",
  dateFormatted: "10 / 10 / 2026",
  day: "Saturday",
  arabicDay: "السبت",
  time: "6:30 PM – 11:00 PM",
  venue: "رويال",
  venueMapUrl: "https://maps.google.com", // Add your venue location
  rsvpUrl: "https://wa.me/", // Add WhatsApp or form link
};
```

## 📂 Project Structure

```
src/
├── App.tsx              # Main app with all components
├── data/
│   └── weddingData.ts   # Wedding information configuration
├── index.css            # Global styles and animations
└── main.tsx             # Entry point

public/
└── 404.html             # SPA routing support for GitHub Pages
```

## 🎯 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Notes

- The site is optimized for mobile viewing (WhatsApp sharing)
- No autoplay music (browser policy compliance)
- Respects user's motion preferences
- Fast loading with optimized assets
- Works offline after first load (PWA-ready)

## 🎉 Wedding Details

- **Groom:** Mohamed Salama
- **Bride:** F
- **Date:** Saturday, October 10, 2026
- **Time:** 6:30 PM – 11:00 PM
- **Venue:** رويال

---

Made with ❤️ for Mohamed & F's special day
