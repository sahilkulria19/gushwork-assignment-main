
# Gushwork Technical Assignment

A modern, responsive landing page built with React, TypeScript, and Tailwind CSS showcasing HDPE pipes and industrial solutions.

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager

Check your versions:
```bash
node --version
npm --version
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pritam-Git01/gushwork-assignment
   cd gushwork-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

## 🏃 Running the Project

### Development Mode

Start the development server with hot reload:

```bash
npm run dev
# or
yarn dev
```

The application will open at `http://localhost:5173`

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🏗️ Building for Production

Create an optimized production build:

```bash
npm run build
# or
yarn build
```

The build files will be generated in the `dist/` directory.

### Build Output

- Minified JavaScript bundles
- Optimized CSS
- Compressed assets
- Ready for deployment

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx                 # Sticky header with mobile menu
│   ├── HeroSection.tsx            # Hero section with pricing
│   ├── TechnicalSpecs.tsx         # Technical specifications table
│   ├── FeaturesSection.tsx        # Product features grid
│   ├── FAQSection.tsx             # FAQ accordion
│   ├── VersatileSection.tsx       # Applications carousel
│   ├── HDPESection.tsx            # Manufacturing process steps
│   ├── PerformanceSection.tsx     # Testimonials carousel
│   ├── SolutionsSection.tsx       # Solutions portfolio
│   ├── ResourcesSection.tsx       # Downloads section
│   ├── ContactSection.tsx         # Contact form
│   └── Footer.tsx                 # Footer with links
├── App.tsx                        # Main app component
├── index.css                      # Global styles and Tailwind
└── main.tsx                       # App entry point

public/
└── images/                        # All images and assets
```

## ✨ Key Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Sticky header with scroll animations
- ✅ Animated mobile navigation
- ✅ Image zoom functionality
- ✅ Horizontal scrolling carousels
- ✅ Interactive FAQ accordion
- ✅ Step-by-step manufacturing process
- ✅ TypeScript for type safety
- ✅ Optimized with Tailwind CSS

## 🎨 Responsive Breakpoints

| Breakpoint | Width | Padding (X/Y) |
|-----------|-------|---------------|
| Mobile    | ≥360px | 16px / 48px |
| Tablet    | ≥1080px | 60px / 80px |
| Desktop   | ≥1440px | 100px / 100px |
| Max Width | All | 1240px (centered) |

## 🔧 Configuration

### TypeScript Configuration

The project uses strict TypeScript settings. Update `tsconfig.json` if needed:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## 🚢 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://Pritam-Git01.github.io/gushwork-assignment",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🐛 Troubleshooting

### Images not loading

- Ensure all images are in `public/images/` directory
- Check image paths start with `/images/` not `./images/`
- Verify image file extensions match exactly (case-sensitive)

### Tailwind styles not working

- Run `npm install -D tailwindcss postcss autoprefixer`
- Ensure `tailwind.config.js` exists
- Check `@tailwind` directives are in `index.css`
- Restart dev server after config changes

### TypeScript errors

- Run `npm install --save-dev @types/react @types/react-dom`
- Check all imports have correct file extensions
- Ensure `tsconfig.json` is properly configured

### Build fails

- Clear cache: `rm -rf node_modules dist && npm install`
- Check for missing dependencies: `npm install`
- Verify Node.js version: `node --version` (should be v16+)

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📄 License

This project is proprietary and confidential.

## 👥 Support

For issues or questions, contact: [your-email@example.com]

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
```

