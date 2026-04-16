# AGENTS.md

## Project Overview

Portfolio website built with a Figma design system. The site applies design tokens (colors, typography, spacing, border radius) exported from Figma as JSON, ensuring consistency between design and code.

**Figma Design System:** https://www.figma.com/design/dNITJc1hWpalXleDlnRyLI/Claude-Portfolio  
**Token Source:** Design tokens exported as JSON from Figma (stored in `src/tokens/`)

---

## Setup & Installation

- Install dependencies: `pnpm install`
- Start dev server: `pnpm dev`
- Build for production: `pnpm build`
- Preview production build: `pnpm preview`

**Node version:** 18+ (check `.nvmrc` if present)

---

## Design Token Workflow

### Exporting Tokens from Figma

1. Open your Figma design system file
2. Use the token export tool (e.g., Figma's Variables panel → Export as JSON)
3. Export tokens and save to `src/tokens/design-tokens.json`
4. Tokens are automatically imported into CSS/component code

### Token Structure

Tokens are organized into these main categories in `design-tokens.json`:

**Colors** (with Light & Dark modes):
- **Brand:** Primary (#7a58f3 light / #a68efc dark), secondary, tertiary
- **Content:** Primary text, secondary, disabled, inverse, brand
- **Stroke:** Dividers and borders
- **Background:** Surface and base layers with variants
- **Container:** Component background colors
- **Semantic:** Success (#31bd65), warning (#ffb117), error (#eb4b6d), informative, highlight
- **Data Visualization:** 5 category colors for charts

**Typography:**
- **Font Family:** Aeonik
- **Font Sizes:** 8px → 256px (22 sizes)
- **Line Heights:** 8px → 96px
- **Font Weights:** Regular (400), Semi-bold (600), Bold (700)

**Text Styles (Pre-composed):**
- **Headings:** H1–H6 with font/size/weight/line-height
- **Body:** lg, md, sm, xs with variants (underlined, dashed)
- **Labels:** lg, md, sm, xs with variants

**Border Radius:**
- Scales from 2px → 999px (for fully rounded)

Example token usage in code:
```css
/* Colors */
color: var(--color-light-brand-primary);
background: var(--color-dark-content-primary);

/* Typography */
font-family: var(--font-family-aeonik);
font-size: var(--font-size-16);
font-weight: var(--font-weight-bold);
line-height: var(--line-height-24);

/* Border Radius */
border-radius: var(--border-radius-8);
```

---

## Project Structure

```
portfolio/
├── src/
│   ├── tokens/
│   │   └── design-tokens.json       # Exported tokens from Figma
│   ├── components/
│   │   ├── Button.tsx               # Component using design tokens
│   │   ├── Card.tsx
│   │   ├── Typography.tsx
│   │   └── ...
│   ├── styles/
│   │   ├── tokens.css               # CSS variables from design tokens
│   │   ├── global.css
│   │   └── ...
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── Projects.tsx
│   └── App.tsx
├── public/
├── AGENTS.md                         # This file
├── package.json
└── vite.config.ts
```

---

## Code Style & Conventions

### TypeScript
- Use TypeScript strict mode
- Type all component props explicitly
- Prefer interfaces over types for object shapes

### Component Naming
- Use PascalCase for component files and exports: `Button.tsx`, `CardGrid.tsx`
- Props interfaces: `ButtonProps`, `CardGridProps`

### Styling
- Use CSS Modules (`Component.module.css`) for component-scoped styles
- Reference design tokens as CSS variables: `var(--color-primary-500)`
- No magic numbers; always use token values
- Maintain color and spacing consistency across components

### File Organization
- One component per file
- Keep component logic separate from styling
- Place reusable styles in `styles/` directory

---

## Testing & Quality

### Run Tests
- Unit tests: `pnpm test`
- Watch mode: `pnpm test:watch`
- Test coverage: `pnpm test:coverage`

### Linting & Type Checking
- ESLint: `pnpm lint`
- TypeScript check: `pnpm type-check`
- Fix issues: `pnpm lint --fix`

### Before Committing
1. Run `pnpm lint` and `pnpm type-check`
2. Run `pnpm test` to ensure tests pass
3. Verify design token alignment (check CSS variable usage)
4. Commit message format: `[feature/fix]: <description>`

---

## Working with Design Tokens

### When to Update Tokens

- **Token changes in Figma:** Export new `design-tokens.json` and replace `src/tokens/design-tokens.json`
- **New token categories:** Add to the token file and register in CSS variables
- **Component updates:** Ensure components use token values, not hardcoded values

### Token Consistency Checklist

- [ ] All colors reference `var(--color-*)`
- [ ] All text uses `var(--font-size-*)` and `var(--font-weight-*)`
- [ ] All spacing uses `var(--spacing-*)`
- [ ] All border radius uses `var(--border-radius-*)`
- [ ] No hardcoded hex colors, pixel values, or magic numbers

---

## Common Tasks

### Add a New Component
1. Create `src/components/ComponentName.tsx`
2. Create `src/components/ComponentName.module.css` with token-based styles
3. Export from `src/components/index.ts`
4. Add tests if adding complex logic

### Update Design System
1. Make changes in Figma
2. Export tokens as JSON
3. Replace `src/tokens/design-tokens.json`
4. Update components using affected tokens
5. Run `pnpm type-check` and `pnpm lint`

### Deploy Portfolio
- Build: `pnpm build`
- Output goes to `dist/` directory
- Deploy via your hosting platform (Vercel, Netlify, etc.)

---

## Troubleshooting

### Tokens Not Applied
- Verify `src/tokens/design-tokens.json` exists and is valid JSON
- Check CSS is importing token variables correctly
- Ensure CSS custom properties are defined before use

### Component Mismatch with Figma
- Compare component visual against Figma design
- Check token values (colors, sizes, spacing)
- Update CSS or component props to match Figma

---

## References

- Figma Design System: [Add URL]
- Token Export Format: [Add token structure doc if available]
- Design System Documentation: [Add link if available]
