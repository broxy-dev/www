# Broxy

Turn any webpage into an MCP server. Let AI assistants directly control the browser.

## What is Broxy?

Broxy transforms any webpage into an MCP (Model Context Protocol) server, enabling AI assistants like Claude and Cursor to directly interact with and control web pages. This opens up powerful automation possibilities without requiring traditional APIs.

## Features

- **API Endpoint** - Execute JavaScript on any webpage and expose APIs for external calls
- **AI Integration** - Full MCP support for Claude/Cursor to directly control the browser
- **Web Automation** - Simulate input, clicks, and requests on any webpage

## Use Cases

- **AI Automation** - Let Claude/Cursor automatically fill forms, submit reports, book meeting rooms
- **Data Monitoring** - Real-time monitoring of prices, stock quotes, competitor data
- **API Generator** - Convert websites without public APIs into callable interfaces

## Installation

### For Website Developers

Add a single line to your website:

```html
<script src="https://broxy.dev/assets/broxy-v1.user.js"></script>
```

Visitors can immediately use Broxy services without installing any extensions.

### For Users

1. Install [Tampermonkey](https://www.tampermonkey.net/) browser extension
2. Click [here](https://broxy.dev/assets/broxy-v1.user.js) to add the Broxy script
3. Open any website and click the Broxy floating button (bottom-right corner) to configure

## How It Works

```
User ⇄ AI Client (Claude/Cursor) ⇄ Broxy ⇄ Webpage
```

1. User interacts with AI assistant
2. AI sends commands to Broxy via MCP
3. Broxy executes JavaScript on the target webpage
4. Results are returned to the AI assistant

## Global API

When Broxy is loaded, a global `BroxyDev` object is available:

```javascript
// Theme
BroxyDev.getTheme()           // 'light' | 'dark'
BroxyDev.setTheme('dark')
BroxyDev.toggleTheme()

// Language
BroxyDev.getLang()            // 'zh' | 'en'
BroxyDev.setLang('en')
BroxyDev.toggleLang()

// Settings
BroxyDev.getSettings()        // { theme, lang }

// Browser Info
BroxyDev.getBrowserInfo()     // { userAgent, platform, url, ... }
```

## Configuration

Broxy uses a configuration system for defining routes and tools:

```javascript
window.__BROXY_INIT_DATA__ = {
  version: "1.0",
  data: {
    routes: [...],      // REST API endpoints
    tools: [...],       // MCP tools
    mcpConfig: {...},   // MCP server configuration
    initScript: ""      // Custom initialization script
  }
}
```

### Routes

Define custom API endpoints:

```javascript
{
  name: "getTheme",
  pattern: "/theme",
  method: "get",
  handler: "async (method, path, query, body, headers) => { ... }",
  enabled: true
}
```

### MCP Tools

Define tools for AI assistants:

```javascript
{
  name: "setTheme",
  pattern: "/mcp/setTheme",
  description: "Set the website theme",
  handler: "async ({ theme }) => { ... }",
  inputSchema: {
    type: "object",
    properties: {
      theme: { type: "string", description: "dark | light" }
    },
    required: ["theme"]
  },
  enabled: true
}
```

## Development

This is a static website with no build system. To preview locally:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Project Structure

```
www/
├── index.html              # Main landing page
├── script.js               # Core functionality
├── i18n.js                 # Internationalization
├── styles.css              # Styling
└── assets/
    ├── broxy-v1.user.js    # Tampermonkey userscript
    ├── data.js             # Default configuration
    └── logo.png            # Logo image
```

## Browser Support

- Modern browsers with ES6+ support
- Chrome, Firefox, Safari, Edge (latest versions)

## License

MIT License

## Links

- Website: [https://broxy.dev](https://broxy.dev)
- Tampermonkey: [https://www.tampermonkey.net](https://www.tampermonkey.net)
