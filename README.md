# Developer Portfolio

A modern, responsive portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- **Next.js 14 App Router** - Latest Next.js with the App Router architecture
- **Static Export** - Fully static site, no backend required
- **Dark/Light Mode** - Theme toggle with system preference detection
- **Responsive Design** - Mobile-first, works on all devices
- **Framer Motion Animations** - Smooth, subtle animations throughout
- **SEO Optimized** - Metadata configured for search engines
- **Vercel Ready** - Configured for easy deployment to Vercel

## Pages

- **Home** - Hero section with introduction
- **About** - Personal bio and highlights
- **Skills** - Tech stack with animated skill bars
- **Projects** - Filterable project cards
- **Contact** - Email and social links

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This generates a static export in the `out` directory.

### Preview Production Build

```bash
npm run start
```

## Project Structure

```
portfolio/
├── app/
│   ├── about/
│   │   └── page.js
│   ├── contact/
│   │   └── page.js
│   ├── projects/
│   │   └── page.js
│   ├── skills/
│   │   └── page.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── AnimatedSection.js
│   ├── Footer.js
│   ├── Navbar.js
│   ├── ProjectCard.js
│   ├── SectionHeading.js
│   ├── SkillBar.js
│   ├── ThemeProvider.js
│   └── ThemeToggle.js
├── data/
│   └── data.js
├── public/
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json
└── package.json
```

## Customization

### Personal Information

Edit `data/data.js` to update:
- Name, role, and bio
- Social links
- Skills and proficiency levels
- Projects

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.js`
- Color scheme uses Tailwind's `primary` color (sky blue by default)

### SEO

Update metadata in `app/layout.js`:
- Title and description
- Open Graph tags
- Twitter card info

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The `npm run build` command generates a static `out` folder that can be deployed to any static hosting service (Netlify, GitHub Pages, etc.).

## License

MIT License - feel free to use this template for your own portfolio!
