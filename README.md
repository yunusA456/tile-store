# Tiles Store

This is a **Next.js (TypeScript) + Material‑UI** implementation of a tile ecommerce storefront inspired by the MyTyles design.

## Features
- **Beautiful UI** using MUI components (AppBar, Card, Grid, Drawer, Pagination, etc.)
- Header with logo, navigation, search bar, image‑search and voice‑search icons
- Hero section on the home page with a background image and call‑to‑action
- Category navigation (Dining Hall, Bedroom, Kitchen, Bathroom, Parking, Wall Tiles, Elevation)
- Category pages with:
  - Left‑hand filter sidebar (Category, Finish, Size) and a **Clear All** button
  - Sort‑by dropdown (New Arrival, Price low‑→high, Price high‑→low, Rating)
  - Responsive tile grid showing tile cards (image, title, SKU, size/finish, rating, price)
  - Pagination component
- Tile card includes **Quick View** and **Add to Compare** actions (place‑holder) and rating stars.
- Authentication pages (Sign In / Sign Up) with a polished card layout and descriptive text.
- Footer with customer‑care phone number and copyright.
- Supabase client stub (`lib/supabaseClient.ts`) – ready to connect to your Supabase project (environment vars in `.env.local`).
- Placeholder mock tile data (replace with real Supabase queries).

## Project structure
```
tiles-store/
├─ app/
│  ├─ layout.tsx          # global layout – header, footer
│  ├─ page.tsx            # home page with hero and category grid
│  ├─ (auth)/
│  │  ├─ sign-in/page.tsx  # sign‑in UI
│  │  └─ sign-up/page.tsx  # sign‑up UI
│  ├─ catalog/
│  │  ├─ page.tsx          # category overview (grid of categories)
│  │  └─ [category]/page.tsx  # tile listing, filters, pagination
│  └─ ... (future pages: cart, checkout, admin, etc.)
├─ components/
│  ├─ TileCard.tsx        # UI for a single tile
│  ├─ FiltersSidebar.tsx # filter UI used on category pages
│  └─ ...
├─ lib/
│  └─ supabaseClient.ts  # Supabase client instance
├─ .env.local            # Supabase keys (do not commit)
├─ next.config.js
├─ package.json
└─ tsconfig.json
```

## Getting started
```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```
Open <http://localhost:3000> in your browser.

## Next steps (to be implemented)
- Connect the filter sidebar to Supabase queries.
- Implement the calculator that converts square‑feet to required “Peti”.
- Add the admin‑only UI for managing tiles (protected route).
- Hook up the shopping cart and payment options.
- Integrate the image‑generation API (Stability AI) to render room mock‑ups.
- Set up email notifications for orders (Supabase Edge Function).
```
