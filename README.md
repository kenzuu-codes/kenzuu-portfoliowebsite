# Kenzuu Portfolio

> *Where code meets creativity, and technology dances with art.*

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)
[![License: All Rights Reserved](https://img.shields.io/badge/License-All%20Rights%20Reserved-red?style=flat-square)](./LICENSE)

**A multidisciplinary creative developer portfolio showcasing the fusion of programming, anime-inspired animations, and atmospheric music production.**

🔗 **[View Live Site](https://kenzuu-portfoliowebsite.vercel.app)** | 📧 **[Contact Me](mailto:kenji.devcodes@gmail.com)**

---

## ⚠️ Copyright Notice

**© 2025 Kenzuu. All Rights Reserved.**

This repository is a **personal portfolio project** and is **not open source**. 

**What this means:**
- ❌ **DO NOT** fork, copy, or clone this repository for your own use
- ❌ **DO NOT** use this code as a template for your projects
- ❌ **DO NOT** redistribute or publish any part of this codebase
- ✅ **You MAY** view the code for educational/reference purposes only
- ✅ **You MAY** link to the live website

**Why?** This portfolio represents my unique personal brand, creative direction, and professional identity. While I'm happy to share my work publicly for inspiration and learning, I kindly ask that you respect the time and effort invested by not copying it directly.

**Need a portfolio?** Consider building your own from scratch or using established open-source templates. If you'd like to discuss collaboration or have questions, feel free to [reach out](mailto:kenji.devcodes@gmail.com).

See [LICENSE](./LICENSE) for full legal terms.

---

## 👋 About Me

I'm **Kenzuu**, a creative developer and designer based in the Philippines who thrives at the intersection of **technology, art, and storytelling**. My work spans elegant code, immersive animations, and atmospheric soundscapes—all driven by a belief that the most compelling digital experiences emerge when technical precision meets creative expression.

**What I Do:**
- 🎨 Craft **interactive web experiences** with modern frameworks
- ✨ Create **anime-inspired animations** and motion graphics
- 🎵 Produce **electronic music** and soundscapes for multimedia projects
- 🚀 Build **full-stack applications** that solve real problems

**Core Philosophy:**  
Technology should be a canvas for creativity. Every line of code is an opportunity to tell a story, every animation a chance to evoke emotion, and every project a step toward pushing the boundaries of what's possible in the digital realm.

---

## 🎯 Project Features

| Feature | What it means |
|---------|--------------------------------------|
| Responsive layout | Looks good on phones, tablets, desktops without extra work |
| Dark / Light theme | User can switch; remembers preference |
| Projects page + filtering | Show your work, optionally filter by tag/tech |
| Dynamic project detail route | Each project can have its own page (`/work/your-project`) |
| Animations gallery (optional) | Showcase motion / UI experiments |
| Music page (optional) | Embed your own tracks with a custom audio player |
| Contact form (validation + spam protection) | Visitors can message you safely |
| SEO (metadata, sitemap, robots) | Search engines understand your site better |
| Accessibility basics | Keyboard navigation + skip link + focus styles |
| Performance optimizations | Lazy images, code splitting for speed |
| Testing setup (Jest + RTL) | You can write confidence‑giving tests |
| Rate limiting | Prevents bots from spamming your contact API |
| Easy deploy (Vercel) | Fast hosting with automatic updates on each push |

---

## 🛠 Tech Stack

Built with modern tools that prioritize performance, developer experience, and creativity:

**Frontend**
- **Next.js 14** (App Router) — React framework with SSR/SSG and automatic code splitting
- **TypeScript** — Type safety and enhanced developer experience
- **Tailwind CSS** — Utility-first styling for rapid UI development
- **Framer Motion** — Fluid animations with spring physics

**Features & Integrations**
- **next-themes** — Seamless dark/light mode with system preference detection
- **Zod** — Runtime validation for contact forms and API routes
- **react-icons** — Official brand icons for tech stack and social links
- **Lucide React** — Beautiful, consistent UI icons

**Developer Tools**
- **Jest + React Testing Library** — Component testing with confidence
- **ESLint + Prettier** — Code quality and consistent formatting
- **Husky** — Git hooks for pre-commit checks
- **GitHub Actions** — Automated CI/CD pipeline

**Deployment**
- **Vercel** — Zero-config deployment with automatic preview URLs

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm installed
- Git for version control

### Local Development

```bash
# Clone the repository
git clone https://github.com/kenzuu-codes/kenzuu-portfoliowebsite.git
cd kenzuu-portfoliowebsite

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The site will hot-reload as you edit files.

### Build for Production

```bash
# Create optimized production build
npm run build

# Run production server locally
npm run start
```

### Other Commands

```bash
npm run lint        # Check code quality with ESLint
npm run type-check  # Run TypeScript compiler without building
npm run test        # Run Jest tests
npm run format      # Format code with Prettier
```

---

## 📁 Folder Structure (Simplified View)

```
src/
  app/               # Routes (each folder = URL path)
  components/        # Reusable UI + layout pieces
  hooks/             # Custom React hooks (logic helpers)
  lib/               # Data (projects, animations, tracks) + utilities
  styles/            # Global CSS (Tailwind base + variables)
  config/            # Centralized config (site name, metadata)
public/
  projects/          # Project images
  animations/        # GIFs / previews
  music/             # Audio files (if any)
```

You mostly edit: `lib/` (data), `components/` (UI), and `app/` (pages).

---

## 🎨 Customization Guide

Want to use this portfolio as your own template? Here's how to personalize it:

### 1. Update Personal Information

Edit `src/lib/personal-info.ts`:
```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  heroDescription: "Your unique value proposition",
  email: "your.email@example.com",
  location: "Your Location",
  social: {
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/yourusername",
    // Add or remove platforms as needed
  }
}
```

### 2. Add Your Projects

Edit `src/lib/projects.ts`:
```typescript
{
  slug: "project-name",              // URL: /work/project-name
  title: "Project Title",
  description: "What problem does this solve?",
  tags: ["Next.js", "TypeScript"],
  coverImage: "/projects/cover.jpg", // Place in public/projects/
  repoUrl: "https://github.com/you/project",
  liveUrl: "https://project.vercel.app"
}
```

**Tips:**
- Focus on 3-6 high-quality projects
- Use consistent image sizes (800×450px recommended)
- Optimize images with [TinyPNG](https://tinypng.com)
- Write descriptions that highlight impact, not just features

### 3. Customize Theme Colors

Edit `tailwind.config.ts` under `theme.extend.colors`:
```typescript
brand: {
  500: '#3b82f6',  // Primary brand color
  600: '#2563eb',  // Hover states
  // ... other shades
}
```

---

## 🗂 Add Your Projects (Most Important Part)

Edit `src/lib/projects.ts`:

```ts
{
  slug: "cool-app",             // URL slug -> /work/cool-app
  title: "Cool App",            // Display name
  description: "Short value-focused description (what it does + impact).",
  tags: ["Next.js", "TypeScript", "Tailwind"],
  repoUrl: "https://github.com/you/cool-app",
  liveUrl: "https://cool-app.vercel.app",
  coverImage: "/projects/cool-app.jpg"  // Put file in public/projects/
}
```

Guidelines:
- Add 3–6 strong projects (quality > quantity)
- Use consistent tag capitalization
- Image size suggestion: 800×450 (16:9), optimize with [TinyPNG](https://tinypng.com)

Visit: `http://localhost:3000/work` to see changes.

---

## 🎞 Optional: Animations & Music Content

Animations (`src/lib/animations.ts`):
```ts
{
  id: "loader-spinner",
  title: "CSS Loader Spinner",
  description: "Pure CSS rotating loader with subtle easing.",
  previewGif: "/animations/spinner.gif",
  technology: ["CSS", "Animation"]
}
```

Music (`src/lib/tracks.ts`):
```ts
{
  id: "track-1",
  title: "Ambient Intro",
  artist: "Your Name",
  duration: 180,
  src: "/music/ambient-intro.mp3",
  coverImage: "/music/cover.jpg"
}
```

If you *don’t* have these yet—delete or ignore those pages to simplify.

---

## 🌗 Theme & Styling

Dark mode is default. A theme toggle button switches themes using `next-themes`, which adds/changes a `class="dark"` at the root.  
To change colors: edit `tailwind.config.ts` under `theme.extend.colors.brand`.

---

## 📬 Contact Form Implementation

The contact form (`/contact`) includes production-ready features:

- ✅ **Zod Validation** — Type-safe runtime validation for all fields
- 🛡️ **Honeypot Protection** — Hidden field catches spam bots
- ⏱️ **Rate Limiting** — 5 requests per 10 minutes per IP
- 🔒 **XSS Protection** — Input sanitization for security

**Current Setup:** Messages are logged to the server console  
**Future Enhancement:** Integrate email services like SendGrid, Resend, or Nodemailer

### Troubleshooting
- **422 Error** → Invalid input (check email format and field lengths)
- **429 Error** → Rate limit exceeded (wait 10 minutes)

---

## ⚙️ Environment Variables

Create `.env.local` in the root directory (automatically ignored by Git):

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
CONTACT_EMAIL=your.email@example.com

# Optional: Analytics & Monitoring
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional: Email Service (for contact form)
# SENDGRID_API_KEY=your_api_key_here
# RESEND_API_KEY=your_api_key_here
```

**Note:** Restart the development server after modifying environment variables.

---

## 🛫 Deploy (Vercel = Easiest)

1. Commit & push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio setup"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/kenzuu-portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) → “New Project” → Import repo → Deploy.
3. Set `NEXT_PUBLIC_SITE_URL` in Vercel Project Settings → Environment Variables.

Test your live site (mobile + desktop) after deploy.

---

## 🔍 SEO Basics (Don’t Skip)

| Item | What to do |
|------|-------------|
| Title & Description | Edit in `layout.tsx` and/or `siteConfig` |
| Open Graph image | Add `/public/og.png` (1200×630) |
| Sitemap | Provided at `/sitemap.xml` (verify) |
| Robots | Check `/robots.txt` correct |
| Alt text | Real descriptions OR empty if decorative |
| Headings | One `<h1>` per page, logical order |

Good meta description length: 150–160 characters.

---

## ♿ Accessibility Quick Check

- Can you TAB through everything?
- Skip link appears on first TAB? (Should jump to main content)
- All interactive elements have visible focus?
- Color contrast readable (especially in dark mode)?
- Reduced motion (OS setting) → heavy animations calm down?

Use Chrome Lighthouse “Accessibility” or axe extension for automated hints.

---

## ⚡ Performance Tips (Tackle When Ready)

| Task | Benefit |
|------|---------|
| Use `next/image` for all non-icon images | Automatic lazy loading & resizing |
| Dynamic `import()` large optional components | Smaller first load |
| Compress images | Faster loading on mobile |
| Remove unused animation code | Reduces bundle size |
| Keep dependencies minimal | Less JS shipped |

Run:
```bash
npm run build
npm run start
# Then open Lighthouse and test production build
```

---

## 🧪 Testing (Basic Idea)

If included:
- `__tests__/ProjectCard.test.tsx` ensures the card renders a title & tags.
- Add more tests as you learn—start with *one* component.

Run:
```bash
npm run test
```

If you’re new: focus on shipping the site; tests can come later.

---

## 🧹 Maintenance (Do Monthly)

| Task | Why |
|------|-----|
| Add any new project | Keeps portfolio fresh |
| Update outdated images | Shows recency |
| Upgrade dependencies | Security + performance |
| Re‑run Lighthouse | Catch regressions |
| Click every link | Avoid broken navigation |
| Scan for typos | Professional polish |

---

## 🧾 Launch Checklist (Minimum)

| Item | Done? |
|------|-------|
| 3–6 real projects (with images) | ☐ |
| About section written (no placeholder text) | ☐ |
| Contact form works in production | ☐ |
| Mobile nav works | ☐ |
| Theme toggle persists | ☐ |
| Metadata & favicon updated | ☐ |
| Sitemap & robots accessible | ☐ |
| No console errors | ☐ |
| Lighthouse A11y ≥ 90 | ☐ |

Ship when all above are ✅ – polish can come later.

---

## 🛣 Suggested Roadmap (After Launch)

- Dynamic Open Graph image generation (`/api/og`)
- Analytics (Vercel, Plausible, or GA4)
- Add blog or “Notes” section
- PWA (manifest + service worker)
- More motion experiments gallery
- More tests (audio player, filters)
- i18n (multi-language) if needed

---

## 🧠 Writing Great Project Descriptions (Formula)

```
[What it is] + [Tech used] + [Key features] + [Result / impact]
```

Example:  
> “E‑commerce platform built with Next.js & Stripe. Features secure auth, cart persistence, and an admin dashboard. Reduced checkout friction and increased conversion by 40%.”

---

## ❓ Common “Why Isn’t X Working?” Answers

| Problem | Likely Fix |
|---------|------------|
| Image broken | Path must start with `/` and file in `public/` |
| Styles not applying | Dev server cached → restart / save file |
| Dark mode flashes | Ensure ThemeProvider wraps layout & `suppressHydrationWarning` in `<html>` |
| Contact form 422 | Validation failed – check field lengths |
| Rate limit hit | Wait ~10 minutes or restart server (dev) |

---

## 🎯 Performance & Best Practices

This portfolio follows Next.js best practices for optimal performance:

- ✅ **Image Optimization** — Automatic WebP/AVIF conversion and lazy loading
- ✅ **Code Splitting** — Dynamic imports reduce initial bundle size
- ✅ **Font Optimization** — Self-hosted fonts with `display: swap`
- ✅ **Static Generation** — Pre-rendered pages for instant loads
- ✅ **Reduced Motion** — Respects user's OS motion preferences

### Run Performance Audit

```bash
npm run build
npm run start
# Open Chrome Lighthouse and audit localhost:3000
```

---

## ♿ Accessibility Features

Built with accessibility in mind:

- ⌨️ **Keyboard Navigation** — Full TAB support for all interactive elements
- 🎯 **Skip Link** — Jump directly to main content (appears on first TAB)
- 👁️ **Focus Indicators** — Clear visual focus states
- 🌗 **High Contrast** — WCAG AA compliant color ratios
- 🎬 **Reduced Motion** — Honors `prefers-reduced-motion` setting
- 📱 **Screen Reader Friendly** — Semantic HTML with ARIA labels

**Test with:** Chrome Lighthouse (Accessibility tab), axe DevTools, or keyboard-only navigation.

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js and configures everything
4. Done! Auto-deploys on every push to `main`

### Other Platforms

```bash
npm run build
# Deploy the .next folder and public assets
# Compatible with: Netlify, Railway, DigitalOcean, etc.
```

---

## 🗺️ Roadmap

**Upcoming Features:**
- [ ] Blog section with MDX for technical articles
- [ ] Enhanced animation showcase with live code previews
- [ ] Music player with streaming integration
- [ ] Detailed project case studies
- [ ] Newsletter subscription
- [ ] Analytics dashboard
- [ ] Multi-language support (EN/JP)

**Future Ideas:**
- Interactive 3D elements (Three.js/React Three Fiber)
- CMS integration for content management
- Real-time collaboration features
- Design tool integrations (Figma API)

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Images not loading | Ensure path starts with `/` and file is in `public/` |
| Styles not updating | Restart dev server or hard refresh (Ctrl+Shift+R) |
| Dark mode flashing | Check `suppressHydrationWarning` on `<html>` tag |
| Contact form 422 | Validation failed—verify email format & field lengths |
| Rate limit (429) | Wait 10 minutes or restart dev server |
| Build errors | Run `npm install` and check TypeScript errors with `npm run type-check` |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

**Feel free to fork, modify, and use this as your own!** If you create something awesome with it, I'd love to see what you built—drop me a link!

---

## 🤝 Let's Connect

I'm always interested in new collaborations, creative projects, and meaningful conversations.

**Find me online:**
- 💼 **GitHub:** [@kenzuu-codes](https://github.com/kenzuu-codes)
- 🐦 **Twitter:** [@kenzuuGenga](https://twitter.com/kenzuuGenga)
- 📸 **Instagram:** [@kenzuuarts](https://instagram.com/kenzuuarts)
- 📧 **Email:** [kenji.devcodes@gmail.com](mailto:kenji.devcodes@gmail.com)

**Open to:**
- Open source collaborations
- Freelance web development
- Creative coding projects
- Animation & motion design work
- Music production collaborations

---

## 🙏 Acknowledgments

This portfolio was built with inspiration from the developer community and powered by incredible open-source tools:

- [Next.js](https://nextjs.org) — The React framework for production
- [Vercel](https://vercel.com) — Seamless deployment and hosting
- [Tailwind CSS](https://tailwindcss.com) — Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) — Production-ready animations

**Special thanks** to all open-source contributors whose work made this portfolio possible.

---

## 📄 License & Copyright

**© 2025 Kenzuu. All Rights Reserved.**

This project is proprietary and confidential. Unauthorized copying, modification, distribution, or use of this code is strictly prohibited. See [LICENSE](./LICENSE) for full terms.

**For collaboration inquiries or licensing questions:** [kenji.devcodes@gmail.com](mailto:kenji.devcodes@gmail.com)

---

<div align="center">

**Built with 💙 by Kenzuu**

*Where code meets creativity, and technology dances with art*

[![GitHub](https://img.shields.io/github/stars/kenzuu-codes/kenzuu-portfoliowebsite?style=social)](https://github.com/kenzuu-codes/kenzuu-portfoliowebsite)

</div>