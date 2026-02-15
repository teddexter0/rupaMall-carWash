# Rupa's Mall Car Wash Website

A clean, professional car wash website built with Next.js and Tailwind CSS. **100% static, no backend required.**

## ✨ Features

- 🎨 Modern, clean design with blue/water theme
- 📸 **Animated hero slideshow** (4-5 images, auto-rotating)
- 📱 Fully responsive (mobile-first design)
- 💰 Service packages with clear pricing (KES 500, 800, 1,200)
- 📧 **Contact form with email integration** (Resend API)
- 🗺️ **Google Maps embed** showing location
- ⭐ **Google Reviews integration** (real customer reviews)
- ❓ **FAQ accordion** (toggle/collapsible)
- 📞 Clickable phone numbers and email addresses
- ✉️ Professional email notifications for inquiries
- 🚫 **NO complex booking system**
- 🚫 **NO database needed**

## 🚀 Quick Start

1. **Install dependencies:**
```bash
npm install
```

2. **Configure environment variables:**
```bash
# Copy the example file
cp .env.example .env.local

# Edit .env.local and add your API keys
# See SETUP_GUIDE.md for detailed instructions
```

3. **Add hero images:**
   - Place 4-5 images in `public/images/` folder
   - Name them: `hero-1.jpg`, `hero-2.jpg`, etc.
   - See `SETUP_GUIDE.md` for image requirements

4. **Run development server:**
```bash
npm run dev
```

5. **Open in browser:** [http://localhost:3000](http://localhost:3000)

📚 **Read `SETUP_GUIDE.md` for complete setup instructions!**

## 📦 Deploy to Vercel (FREE)

1. **Push to GitHub:**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site is live in under 2 minutes.

**Hosting Cost: FREE** (Vercel free tier is perfect for this site)

## 📝 Customizing Content

All content is in `app/page.js`. Simply edit:

- **Business Info** (lines 75, 89, etc.): Change phone, email, location
- **Services & Prices** (lines 10-29): Update packages and prices
- **Testimonials** (lines 31-47): Add your customer reviews
- **FAQ** (lines 49-66): Update common questions

## 🎨 Customizing Colors

Colors are defined in `tailwind.config.js`:
```js
colors: {
  primary: '#1e40af',  // Main blue color
  secondary: '#3b82f6', // Light blue
  accent: '#f59e0b',   // Accent color
}
```

## 📋 Contact Form (How it Works)

The contact form is **client-side only**:
- User fills out form
- Shows "Thank You" message
- No emails sent (intentionally simple)
- Later you can add email via:
  - Formspree (free tier: 50 submissions/month)
  - EmailJS (free tier: 200 emails/month)
  - Or check submissions manually

## 💻 Tech Stack

- **Next.js 14** - React framework
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Zero dependencies** for backend/database

## 📱 Mobile-First Design

- Phone numbers are clickable on mobile (opens dialer)
- Email addresses are clickable (opens mail app)
- Responsive navigation menu
- Touch-friendly buttons and forms

## 🎯 What Makes This Simple

- ✅ Single-page application
- ✅ No API routes to maintain
- ✅ No database setup needed
- ✅ No email server configuration
- ✅ No complex booking system
- ✅ Just HTML/CSS/JavaScript
- ✅ Deploy anywhere (Vercel, Netlify, etc.)
- ✅ Easy to edit (all content in one file)

## 💰 Monthly Maintenance: KES 0

- Hosting: **FREE** (Vercel)
- Updates: **Easy** (just edit text in `app/page.js`)
- No server costs
- No database fees
- No API costs

Perfect for KES 5,000/month maintenance budget with plenty of room to spare!

## 🔄 Future Additions (Optional)

When you're ready, you can easily add:
- Email integration (Formspree/EmailJS)
- Google Analytics
- Live chat widget
- Payment integration
- Online booking system

But for now, keep it simple and production-ready! 
