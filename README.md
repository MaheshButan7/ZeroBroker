# ZeroBroker

A brokerage-free property listing platform for Pune. Browse rental and sale properties directly from owners — no middlemen, no extra fees.
[Live on vercel](zero-broker-three.vercel.app)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Font**: Inter (Google Fonts)

## Getting Started

```bash
# install dependencies
npm install

# run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Search properties by area/locality
- Filter by type (Rent / Buy)
- Property detail pages with contact options
- Responsive design — works on mobile and desktop
- Static generation for property pages (fast loads)

## Project Structure

```
app/
├── layout.tsx          # root layout with navbar
├── page.tsx            # homepage with search + listings
├── not-found.tsx       # 404 page
├── globals.css         # global styles + tailwind components
└── properties/
    └── [id]/
        └── page.tsx    # property detail page
components/
├── Navbar.tsx
├── PropertyCard.tsx
└── SearchBar.tsx
data/
└── properties.ts       # mock property data
types/
└── index.ts            # TypeScript interfaces
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
