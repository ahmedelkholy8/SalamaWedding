# Mohamed Salama & F - Wedding Invitation

A premium, luxury Islamic wedding invitation website designed for mobile-first experience.

## 🚀 Deployment to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

This repository includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages.

**Steps:**
1. Push your code to the `main` branch
2. Go to your repository on GitHub
3. Navigate to **Settings** → **Pages**
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically build and deploy on every push to `main`

Your site will be available at: `https://ahmedelkholy8.github.io/SalamaWedding/`

### Method 2: Manual Deployment

If you prefer to deploy manually:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# The built files will be in the 'dist' folder
# Upload the contents of 'dist' to your gh-pages branch
```

### Method 3: Using gh-pages package

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

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
