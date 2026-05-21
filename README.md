# Landing Page IA

Une page de destination interactive construite avec Next.js, React, TypeScript et Tailwind CSS. Ce projet présente une interface modernisée pour un service de voyage temporel, incluant une section chatbot, des illustrations, des animations Framer Motion, et une UX responsive.

## 🔧 Stack technique

- **Framework** : Next.js `15.5.18` (App Router)
- **UI** : React `19` + TypeScript `^5`
- **Style** : Tailwind CSS `4.1.9` + `@tailwindcss/postcss`
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Formulaire & validation** : React Hook Form + Zod
- **Composants UI** : Radix UI + composants personnalisés
- **Graphiques** : Recharts
- **Thèmes** : next-themes
- **Analytics** : @vercel/analytics

## ⚙️ Installation

Le projet contient un `package-lock.json` et un `pnpm-lock.yaml`. Si `pnpm` n'est pas installé, utilisez `npm`.

```bash
# Installer les dépendances avec npm
npm install

# Ou, si pnpm est installé
pnpm install
```

## 🚀 Commandes

```bash
npm run dev
npm run build
npm run start
npm run lint
```

Si vous utilisez `pnpm` :

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## 📁 Structure principale

- `app/`
  - `layout.tsx` : Layout global et import CSS
  - `page.tsx` : Page d'accueil du site
- `components/` : Composants réutilisables et sections de la landing
  - `hero-section.tsx`
  - `chatbot-section.tsx`
  - `navbar.tsx`
  - `booking-section.tsx`
  - `theme-provider.tsx`
  - `ui/` : Composants UI personnalisés basés sur Radix / Tailwind
- `public/` : Actifs statiques (images, SVG, icônes)
- `styles/` : Styles globaux
- `lib/` : Utilitaires partagés
- `hooks/` : Hooks personnalisés

## 🧠 Configuration importante

### `next.config.mjs`

- `outputFileTracingRoot: __dirname`
- `typescript.ignoreBuildErrors: true`
- `images.unoptimized: true`

### `tsconfig.json`

- `strict: true`
- `jsx: "preserve"`
- `moduleResolution: "bundler"`
- Alias `@/*` vers la racine du projet

## 📌 Détails de développement

- Le projet utilise une architecture centrée sur des sections de page réutilisables.
- Le composant `ChatbotSection` est en mode client (`"use client"`) pour gérer l'état local, la saisie utilisateur et l'animation.
- Le fond principal du `HeroSection` est défini via un SVG dans `public/images/hero-bg.svg`.
- Les animations et transitions sont gérées avec `framer-motion` dans les sections visibles.

## ✅ Conseils pour la contribution

- Vérifiez toujours le JSX des composants React pour éviter les erreurs de compilation.
- Testez les modifications de style avec la mise en page responsive mobile / desktop.
- Si `pnpm` n'est pas disponible, `npm install` est totalement compatible.

## 📚 Notes

- Le projet inclut à la fois `package-lock.json` et `pnpm-lock.yaml`, donc les deux gestionnaires peuvent être utilisés selon l'environnement.
- Si vous souhaitez ajouter des images, placez-les dans `public/images/` et utilisez `next/image` pour l'optimisation.
