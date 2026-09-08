# Samuel Ulivi Portfolio

Professional portfolio and personal website of Samuel Ulivi, showcasing education, professional experience, technical capabilities, software projects, and cybersecurity background.

## Stack

- React 19 and TypeScript
- Vite with static GitHub Pages-compatible output
- Local English and Italian content
- CSS motion system with `prefers-reduced-motion` support

## Local development

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Create a production build with `npm run build`, then preview it with `npm run preview`. Run `npm run typecheck` for TypeScript validation.

## Content editing

Professional content is separate from presentation:

- Profile, social links, contact and CV request: `src/data/profile.ts`, `src/data/contact.ts`
- Experience: `src/data/experience.ts`
- Education: `src/data/education.ts`
- Certifications and languages: `src/data/certifications.ts`, `src/data/capabilities.ts`
- Capabilities: `src/data/capabilities.ts`
- Projects: `src/data/projects.ts`
- Navigation and interface translations: `src/data/navigation.ts`, `src/locales/`
- Content maintenance instructions: `CONTENT_MAINTENANCE.md`

The main page copy is localized in `src/locales/content.ts`. English is the default; Italian is active at launch. Slovenian and German are not activated because complete verified translations are not available.

## Assets and privacy

The approved portrait is copied into `public/assets/portrait.png` for the application. The private research archive, CV and local project repositories are ignored under `sources/` in this checkout and are never imported into the build. No public CV download, phone number, analytics, cookies or contact form is included.

The CV request link uses the editable template in `src/data/contact.ts`. A public CV can be enabled later only after a deliberate privacy review.

## Deployment preparation

The configured base path supports the proposed repository `samuel-ulivi` and expected URL `https://ulvisamuel.github.io/samuel-ulivi/`. No remote repository, GitHub Pages workflow, publication or deployment is configured in this local task.

## Accessibility and motion

The site uses semantic landmarks, a skip link, visible keyboard focus, native buttons for menu/tabs/disclosures, descriptive links, meaningful portrait alt text, and touch-sized controls. Reduced motion disables the hero choreography, menu animation, disclosure motion and smooth scrolling while preserving the same information.

## Known limitations

- The portrait remains a PNG because the available local macOS image tooling could not generate WebP; its intrinsic dimensions and eager loading prevent layout shift.
- Project screenshots and live demos were not verified as safe or available, so the project index uses factual text and repository links.
- Some project contribution splits and repository security issues require factual or maintenance review before public linking.

## License

Copyright (c) 2026 Samuel Ulivi.

The MIT License applies to original software source code in this repository. Unless otherwise stated, Samuel Ulivi's portrait, personal content, biographical information, project descriptions, branding and personal visual assets are excluded from the MIT License and may not be reused without permission. Third-party trademarks, names, logos and assets remain the property of their respective owners.