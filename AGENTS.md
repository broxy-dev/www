# AGENTS.md

## Project Overview

This is the Broxy website - a static landing page for Broxy, a tool that turns any webpage into an MCP server. The project uses pure vanilla HTML, CSS, and JavaScript without any build system or framework.

## Build/Lint/Test Commands

This is a static website with no build system. To preview locally:

```bash
# Using Python (if available)
python3 -m http.server 8000

# Using Node.js npx (if Node.js is available)
npx serve .

# Using PHP (if available)
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

**No automated tests or lint commands are configured.** Manual testing by opening the site in a browser is the primary verification method.

## Project Structure

```
www/
├── index.html          # Main landing page
├── script.js           # Core functionality (theme, language, UI interactions)
├── i18n.js             # Internationalization (zh/en translations)
├── styles.css          # Styling with light/dark theme support
└── assets/
    ├── broxy-v1.user.js  # Tampermonkey userscript
    ├── data.js           # Broxy configuration data (routes/tools)
    └── logo.png          # Logo image
```

## Code Style Guidelines

### JavaScript

- **Variable declarations**: Use `const` for constants, `let` for variables that will be reassigned. Avoid `var`.
- **Functions**: Use function declarations for hoisted functions, arrow functions for callbacks and short utilities.
- **Naming conventions**:
  - `camelCase` for functions and variables
  - `PascalCase` for constructor functions (not used in this project)
  - `UPPER_SNAKE_CASE` for constants (not used in this project)
- **DOM elements**: Prefix with descriptive names, use `el` or element type (e.g., `btn`, `copyBtn`)
- **Event handlers**: Prefix with `init` for setup functions (e.g., `initCopyButton`, `initTryButton`)

```javascript
// Good
const copyBtn = document.querySelector('.copy-btn');
function getTheme() { ... }
const toggleTheme = () => { ... };

// Avoid
var x = document.querySelector('.copy-btn');
```

### Comments

- Comments are sparse in this codebase
- When used, comments may be in Chinese or English
- JSDoc-style comments are used for documenting public APIs (see `script.js` header)

### CSS

- **Naming**: Use lowercase with hyphens (e.g., `.flow-box`, `.install-tab`)
- **CSS Variables**: Define theme colors in `:root` and override in `[data-theme="dark"]`
- **Selectors**: Prefer class selectors over tag selectors
- **Organization**: Group related styles with comment headers (e.g., `/* Hero */`, `/* Controls */`)
- **Responsive**: Use `@media (max-width: 768px)` for mobile styles

```css
:root {
  --bg: #ffffff;
  --text: #000000;
}

[data-theme="dark"] {
  --bg: #000000;
  --text: #ffffff;
}
```

### HTML

- **Indentation**: 2 spaces
- **Data attributes**: Use `data-*` attributes for JavaScript hooks and i18n
- **Semantic elements**: Use appropriate semantic elements (`<main>`, `<section>`, `<footer>`)
- **Meta tags**: Include Open Graph and Twitter Card meta tags for social sharing

```html
<button id="lang-toggle" class="ctrl-btn" title="Language">EN</button>
<p data-i18n="tagline">Turn any webpage into an MCP server</p>
```

### Internationalization (i18n)

- Translation keys use dot notation (e.g., `features.api.title`)
- Keys are defined in `i18n.js` as nested objects
- Elements with `data-i18n` attribute are auto-translated on language change

```javascript
const i18n = {
  zh: {
    features: {
      api: { title: '对外接口', desc: '...' }
    }
  },
  en: {
    features: {
      api: { title: 'API Endpoint', desc: '...' }
    }
  }
};
```

### Error Handling

- Use try/catch for async operations that may fail
- Log errors to console with descriptive messages
- Provide user feedback for failed operations (e.g., copy failed)

```javascript
try {
  await navigator.clipboard.writeText(code);
} catch (err) {
  console.error('Copy failed:', err);
}
```

### DOM Manipulation

- Use `querySelector` and `querySelectorAll` for element selection
- Use optional chaining (`?.`) when accessing potentially null elements
- Use `classList.add/remove/toggle` for class manipulation

```javascript
document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
btn.classList.add('hidden');
```

### localStorage

- Use prefixed keys to avoid collisions (e.g., `broxy_theme`, `broxy_lang`)
- Check for null/undefined before using stored values

```javascript
const stored = localStorage.getItem('broxy_theme');
if (stored) return stored;
```

## Key Patterns

### Theme System

1. Theme is stored in localStorage as `broxy_theme`
2. Falls back to system preference via `prefers-color-scheme`
3. Applied via `data-theme` attribute on `<html>` element
4. CSS variables change based on theme

### Language System

1. Language stored in localStorage as `broxy_lang`
2. Falls back to browser language (`navigator.language`)
3. Applied by iterating `[data-i18n]` elements and setting `textContent`

### Global API

The `window.BroxyDev` object exposes:
- `getTheme()`, `setTheme(theme)`, `toggleTheme()`
- `getLang()`, `setLang(lang)`, `toggleLang()`
- `getSettings()` - returns `{ theme, lang }`
- `getBrowserInfo()` - returns browser/page metadata

## Browser Support

- Modern browsers (ES6+ support required)
- No transpilation or polyfills
- Uses modern APIs: `localStorage`, `clipboard.writeText()`, `matchMedia()`
