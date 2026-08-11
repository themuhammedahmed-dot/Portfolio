# Muhammad Ahmed — Professional QA Portfolio

A full-stack Next.js portfolio with React, TypeScript, Tailwind CSS, and Node.js backend.

## ⚡ Quick Start (Local Development)

### 1. Clone / Download the Project
```bash
cd qa-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

This installs all packages from `package.json`:
- Next.js 15
- React 19
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- next-themes (dark mode)

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You should see your portfolio with:
- ✅ Light/dark mode toggle (top right)
- ✅ Smooth animations as you scroll
- ✅ Interactive defect lifecycle timeline
- ✅ Working contact form
- ✅ Fully responsive design

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 🚀 Push to GitHub

### 1. Initialize Git (if not already done)
```bash
git init
```

### 2. Add All Files
```bash
git add .
```

### 3. Create First Commit
```bash
git commit -m "Initial commit: Professional QA portfolio"
```

### 4. Rename Branch to Main
```bash
git branch -M main
```

### 5. Add Remote Repository
Replace `<username>` with your GitHub username and `<repo-name>` with your repo name:
```bash
git remote add origin https://github.com/<username>/<repo-name>.git
```

Example:
```bash
git remote add origin https://github.com/muhammadahmed/qa-portfolio.git
```

### 6. Push to GitHub
```bash
git push -u origin main
```

---

## 📦 Deploy to Vercel

### 1. Connect GitHub to Vercel
- Go to [vercel.com](https://vercel.com)
- Sign up / log in with GitHub
- Click **Add New → Project**
- Select your `qa-portfolio` repository
- Click **Deploy**

Vercel automatically:
- Detects Next.js
- Installs dependencies
- Builds the project
- Deploys live (takes ~2-3 minutes)

You get a live URL like: `https://qa-portfolio.vercel.app`

### 2. Add Custom Domain (Optional)
In Vercel dashboard:
- Go to **Settings → Domains**
- Add your domain (from Namecheap, GoDaddy, etc.)
- Follow DNS instructions

---

## 🔧 Troubleshooting

### Error: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Error: "Port 3000 already in use"
```bash
npm run dev -- -p 3001
```
Then open http://localhost:3001

### Dark mode not working
- Restart dev server: Press `Ctrl+C`, then `npm run dev`
- Clear browser cache: Ctrl+Shift+Delete

### Contact form not sending emails
Currently, form logs to console. To add real email:
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Update `/app/api/contact/route.ts` (see inline comments)
4. Add to `.env.local`:
   ```
   RESEND_API_KEY=your_key_here
   ```

---

## 📝 Edit Your Content

### Update Personal Info
Edit `/app/page.tsx` and find:
- `Muhammad Ahmed` → Your name
- `Software Quality Assurance Engineer` → Your title
- Experience entries (SQA Engineer, Data Engineering)
- Skills and projects

### Change Colors
Edit `/tailwind.config.js`:
```js
colors: {
  pass: { /* green */ },
  pending: { /* amber */ },
  accent: { /* blue - change to your color */ },
}
```

### Add More Defect Examples
Edit `/components/DefectLifecycle.tsx`:
```ts
const defectCases: DefectCase[] = [
  {
    id: 'DEF-001',
    name: 'Your defect name',
    severity: 'critical',
    stages: [ /* your stages */ ],
  },
  // Add more here
];
```

---

## 📂 Project Structure

```
qa-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Backend contact handler
│   ├── page.tsx                  # Main homepage
│   ├── layout.tsx                # Root layout + theme setup
│   └── globals.css               # Global styles
├── components/
│   ├── ThemeToggle.tsx           # Dark/light mode toggle
│   ├── MetricCard.tsx            # Animated stat cards
│   ├── DefectLifecycle.tsx       # Interactive defect timeline
│   └── ContactForm.tsx           # Contact form component
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

---

## 🎯 Next Steps

1. ✅ Run locally: `npm run dev`
2. ✅ Edit content in `/app/page.tsx`
3. ✅ Push to GitHub (see GitHub section above)
4. ✅ Deploy to Vercel (see Vercel section above)
5. ✅ Add email integration (optional)
6. ✅ Share your portfolio URL

---

## 💡 Tips

- **Lighthouse scores**: Run `npm run build`, check performance in DevTools
- **TypeScript errors**: Most are minor; ignore if dev server runs fine
- **Animations not working**: Make sure Framer Motion is installed: `npm list framer-motion`
- **Icons missing**: Lucide React is installed: `npm list lucide-react`

---

## 📞 Need Help?

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **Framer Motion Docs**: https://www.framer.com/motion/
- **Vercel Docs**: https://vercel.com/docs

---

© 2025 Muhammad Ahmed. Built with Next.js, React, and TypeScript.
