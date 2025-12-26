# Memory Card

A simple memory card game built with React and Vite.

## Overview
Match pairs of cards by remembering their positions. Click a card to flip it, then flip a second card to try to find its match. Matched pairs stay face up; mismatches flip back after a brief pause. Earn a point for each matched pair and complete the game by revealing all cards. You can restart at any time, which reshuffles the deck for a fresh round.

## Features
- Responsive, animated card flipping
- Move counter and scoring by matched pairs
- Automatic flip-back on mismatches with a short delay
- Prevents extra clicks during flip-back to avoid accidental inputs
- Restart the game at any time; cards are reshuffled
- Single difficulty level (standard grid)

## Tech Stack
- React 19
- Vite
- CSS

## Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm (preferred package manager)

### Installation
```bash
npm install
```

### Development
Run the dev server (Vite default port is 5173):
```bash
npm run dev
```
Then open http://localhost:5173 in your browser.

### Build
Create an optimized production build:
```bash
npm run build
```

### Preview Production Build
Serve the built app locally to verify the production output:
```bash
npm run preview
```

## How to Play
- Click a card to flip it face up.
- Click a second card to reveal it and compare.
  - If they match: you score a point and both stay face up.
  - If they do not match: both cards flip back after a short delay.
- Each attempt (two flips) increments the move counter.
- The game ends when all cards are matched and face up.
- You can restart at any time; a new game begins with the deck reshuffled.

## Deployment (GitHub Pages)
If you deploy to GitHub Pages at https://<your-username>.github.io/<repo-name>/, set the base path in Vite and use gh-pages:

1) Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2) Update vite.config.js to set base to your repository name:
```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/memory-card/', // replace with your repo name
})
```

3) Add scripts to package.json:
```json
{
  "scripts": {
    "build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4) Deploy:
```bash
npm run deploy
```

5) In your GitHub repository, enable Pages with the `gh-pages` branch as the source.

## Project Structure
```
.
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   └── GameHeader.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Roadmap / Ideas
- Add timer and best-time tracking
- Add sound effects and improved animations
- Multiple grid sizes (difficulty levels)
- Accessibility improvements (keyboard navigation, ARIA roles)
- High score persistence (localStorage)

## License
MIT
