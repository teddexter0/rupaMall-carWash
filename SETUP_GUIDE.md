# Setup Guide - Rupa's Mall Car Wash Website

This guide will help you configure all the advanced features of the website.

---

## 📸 1. Adding Hero Slideshow Images

### Step 1: Prepare Your Images
- Take 4-5 high-quality photos of:
  - Clean, shiny cars you've washed
  - Your team at work
  - Your car wash facility
  - Happy customers
  - Before/after shots

### Step 2: Optimize Images
- Recommended size: 1920x1080px (or 16:9 ratio)
- Format: JPG or WebP
- Keep file size under 500KB each (use https://tinypng.com/ to compress)

### Step 3: Add Images to Website
1. Save your images as: `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`, `hero-4.jpg`, `hero-5.jpg`
2. Place them in the `public/images/` folder
3. That's it! The slideshow will automatically use them.

**If you have fewer than 5 images:**
Edit `app/page.js` line ~35 and update the `heroImages` array:
```javascript
const heroImages = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
  // Remove lines you don't need
]
```

---

## 📧 2. Setting Up Email (Resend API)

### Step 1: Create Resend Account
1. Go to https://resend.com/signup
2. Sign up for free (100 emails/day free forever)
3. Verify your email

### Step 2: Get API Key
1. Go to https://resend.com/api-keys
2. Click "Create API Key"
3. Name it: "Car Wash Website"
4. Copy the key (starts with `re_...`)

### Step 3: Add Domain (Optional but Recommended)
1. Go to https://resend.com/domains
2. Click "Add Domain"
3. Enter your domain: `rupamallcarwash.co.ke`
4. Add the DNS records to your domain provider
5. Wait for verification (usually 5-10 minutes)

### Step 4: Configure Environment Variables

**For Local Development:**
Edit `.env.local` file:
```bash
RESEND_API_KEY=re_your_actual_api_key_here
EMAIL_TO=info@rupamallcarwash.co.ke
EMAIL_FROM=noreply@rupamallcarwash.co.ke
```

**For Vercel Production:**
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to Settings > Environment Variables
4. Add these variables:
   - `RESEND_API_KEY` = your API key
   - `EMAIL_TO` = info@rupamallcarwash.co.ke
   - `EMAIL_FROM` = noreply@rupamallcarwash.co.ke
5. Click "Save"
6. Redeploy your site

### Step 5: Test Email
1. Go to your live website
2. Fill out the contact form
3. Submit
4. Check your email inbox!

**Important Notes:**
- Without a verified domain, emails will come from: `onboarding@resend.dev`
- With verified domain, emails will come from: `noreply@rupamallcarwash.co.ke`
- Free tier: 100 emails/day, 3,000/month

---

## 🗺️ 3. Setting Up Google Maps

### Step 1: Get Your Location Coordinates
1. Go to https://www.google.com/maps
2. Find your business location (Westlands, Nairobi)
3. Right-click on your exact location → "What's here?"
4. Copy the coordinates (e.g., `-1.2681, 36.8042`)

### Step 2: Generate Embed Code
1. Go to https://www.google.com/maps
2. Search for your business
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the iframe in `app/page.js` (around line 335)

**Alternative - Use Coordinates:**
Replace the iframe `src` with:
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8193!2d36.8042!3d-1.2681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnMDUuMiJTIDM2wrA0OCcxNS4xIkU!5e0!3m2!1sen!2ske!4v1234567890
```
(Replace the coordinates with yours)

### Step 3: Add "Get Directions" Link
Update the Google Maps link in `app/page.js`:
```html
<a href="https://goo.gl/maps/YOUR_LOCATION_SHARE_LINK" ...>
```

---

## ⭐ 4. Setting Up Google Reviews Integration

### Option A: Simple (No API) - Show Link Only
Current implementation - just update the link:
```javascript
href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
```

### Option B: Advanced (Fetch Real Reviews)

#### Step 1: Get Google Places API Key
1. Go to https://console.cloud.google.com/
2. Create a new project: "Car Wash Website"
3. Enable "Places API"
4. Create API Key
5. Restrict the key to your domain

#### Step 2: Find Your Place ID
1. Go to https://developers.google.com/maps/documentation/places/web-service/place-id
2. Use the Place ID Finder tool
3. Search for your business
4. Copy the Place ID (looks like: `ChIJ...`)

#### Step 3: Add to Environment Variables
```bash
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your_api_key_here
NEXT_PUBLIC_GOOGLE_PLACE_ID=your_place_id_here
```

#### Step 4: Create API Route (Optional)
Create `app/api/reviews/route.js`:
```javascript
export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
  )

  const data = await response.json()
  return Response.json(data)
}
```

**Note:** Google Places API costs money after free tier. For simple use case, just keep the current static reviews and link to Google for more.

---

## 🎨 5. Customizing Colors and Styles

### Update Brand Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#1e40af',   // Main blue - change to your brand color
  secondary: '#3b82f6', // Light blue
  accent: '#f59e0b',    // Accent orange
}
```

### Update Business Info
Edit `app/page.js` - search and replace:
- Phone: `+254 712 345 678` → your number
- Email: `info@rupamallcarwash.co.ke` → your email
- Location: `Westlands, Nairobi` → your location
- Hours: `Mon-Sat: 8AM-6PM` → your hours

---

## 🚀 6. Deploying Updates

### After Making Changes:
```bash
# 1. Test locally
npm run dev

# 2. Commit changes
git add .
git commit -m "Add hero images and configure APIs"
git push origin main

# 3. Vercel will auto-deploy (takes ~30 seconds)
```

### Manual Deploy:
```bash
vercel --prod --yes
```

---

## 📊 7. Adding Google Analytics (Optional)

### Step 1: Create GA4 Property
1. Go to https://analytics.google.com/
2. Create account → Create property
3. Copy your Measurement ID (G-XXXXXXXXXX)

### Step 2: Add to Website
Edit `app/layout.js` - add before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔧 8. Troubleshooting

### Email Not Sending?
- Check `.env.local` has correct API key
- Verify API key is active in Resend dashboard
- Check Vercel environment variables
- Look at browser console for errors

### Images Not Showing?
- Verify files are in `public/images/` folder
- Check file names match exactly: `hero-1.jpg` not `Hero-1.jpg`
- Clear browser cache (Ctrl+Shift+R)

### Map Not Loading?
- Check internet connection
- Verify iframe code is correct
- Try using coordinates instead

### Form Not Working?
- Check API route exists: `app/api/contact/route.js`
- Verify Resend is installed: `npm list resend`
- Check network tab in browser dev tools

---

## 📞 Need Help?

If you get stuck:
1. Check the error in browser console (F12)
2. Check Vercel deployment logs
3. Verify all environment variables are set
4. Try redeploying: `vercel --prod --yes`

---

## ✅ Checklist

- [ ] Add 4-5 hero images to `public/images/`
- [ ] Sign up for Resend account
- [ ] Get Resend API key
- [ ] Add environment variables to Vercel
- [ ] Update Google Maps iframe with your location
- [ ] Update all contact info (phone, email, address)
- [ ] Test contact form submission
- [ ] Test on mobile device
- [ ] Add Google Place ID for reviews link
- [ ] Deploy to production

---

**Your website is now feature-complete and production-ready! 🎉**
