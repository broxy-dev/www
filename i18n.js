const i18n = {
  zh: {
    nav: {
      features: '功能特性',
      quickstart: '使用指南',
      usecases: '使用场景',
      install: '安装'
    },
    hero: {
      badge: '开源免费',
      titlePrefix: '将任意网页变成 ',
      titleSuffix: ' 服务器',
      subtitle: '让 Claude、OpenClaw 等 AI 助手直接操控浏览器',
      cta: '开始使用'
    },
    features: {
      title: '强大功能',
      api: { title: '对外接口', desc: '在任意网页执行 JavaScript，暴露 API 供外部调用' },
      mcp: { title: 'AI 联动', desc: '支持 MCP，让 Claude/OpenClaw 直接操控浏览器' },
      automation: { title: '网页自动化', desc: '模拟输入、点击、请求，自动化任意网页' },
      security: { title: '安全私密', desc: '所有操作均在本地运行，数据不上传外部服务器' },
      zero: { title: '零配置', desc: '拖拽到书签栏即可使用，无需安装任何扩展' },
      cross: { title: '跨平台', desc: '支持 Chrome、Firefox、Safari、Edge 及所有支持脚本的浏览器' }
    },
    quickstart: {
      title: '使用指南',
      step1: {
        title: '安装插件/脚本',
        desc: '选择 Edge 扩展或油猴脚本完成安装，即可在浏览器中使用 Broxy'
      },
      step2: {
        title: '启动并配置',
        desc: '打开目标网站启动 Broxy，配置工具后即可获取操控该网页的能力'
      },
      step3: {
        title: '复制地址使用',
        desc: '复制 API 地址用于工作流脚本，或复制 MCP 地址用于 AI 助手'
      }
    },
    usecases: {
      title: '真实场景',
      automation: {
        tag: 'AI 自动化',
        input: '帮我填这个表单并提交报告',
        output: '表单已填写并提交成功！',
        desc: '让 AI 自动填写表单、提交报告、执行工作流'
      },
      monitor: {
        tag: '数据监控',
        input: '每小时监控这个商品的价格',
        output: '监控已开始！当前价格：¥299',
        desc: '实时监控价格、股票行情、竞品数据变化'
      },
      api: {
        tag: 'API 生成',
        input: '把这个网站的搜索变成 API',
        output: 'API 已创建：GET /search?q={query}',
        desc: '将无 API 网站转换为可调用的接口服务'
      }
    },
    install: {
      title: '准备好了吗？',
      desc: '几秒钟安装 Broxy，开始用 AI 控制你的浏览器',
      hint: '选择以下任一方式安装',
      bookmarkletTab: '书签',
      recommendedBadge: '推荐',
      bookmarkletHint: '拖拽按钮到书签栏，打开网页后点击书签即可加载Broxy（Ctrl/⌘ + Shift + B 显示书签栏）',
      bookmarkletBtn: '🚀 加载Broxy',
      bookmarkletStep1: '拖拽【加载Broxy】到书签栏',
      bookmarkletStep2: '打开目标网页，点击书签',
      bookmarkletStep3: '点击右下角Broxy图标开始使用',
      edgeTab: 'Edge 扩展',
      edgeLink: '安装 Edge 扩展',
      edgeNote: '安装完成后，打开任意网页即可在右下角看到 Broxy 入口',
      userTab: '油猴脚本',
      developerTab: '开发者接入',
      developerHint: '添加到你的页面，访客即可立即使用 Broxy',
      copy: '复制',
      step1: '安装 Tampermonkey',
      step1Note: '浏览器扩展管理器',
      step2: '添加 Broxy 脚本',
      step2Note: '点击即可安装',
      step3: '点击浮动按钮配置',
      step3Note: '右下角 Broxy 图标'
    },
    footer: {
      desc: '将任意网页变成 MCP 服务器',
      copyright: '© 2026 Broxy. 保留所有权利。'
    }
  },
  en: {
    nav: {
      features: 'Features',
      quickstart: 'Usage Guide',
      usecases: 'Use Cases',
      install: 'Install'
    },
    hero: {
      badge: 'Open Source & Free',
      titlePrefix: 'Turn any webpage into an ',
      titleSuffix: ' server',
      subtitle: 'Let Claude, OpenClaw, and other AI assistants directly control your browser',
      cta: 'Get Started'
    },
    features: {
      title: 'Powerful Capabilities',
      api: { title: 'API Endpoint', desc: 'Execute JavaScript on any webpage, expose APIs for external calls' },
      mcp: { title: 'AI Integration', desc: 'MCP support for Claude/OpenClaw to directly control browser' },
      automation: { title: 'Automation', desc: 'Simulate input, click, and request on any webpage' },
      security: { title: 'Secure & Private', desc: 'All operations run locally, no data sent to external servers' },
      zero: { title: 'Zero Config', desc: 'Drag to bookmarks, click to use. No installation required' },
      cross: { title: 'Cross Platform', desc: 'Works on Chrome, Firefox, Safari, Edge and any browser with userscript support' }
    },
    quickstart: {
      title: 'Usage Guide',
      step1: {
        title: 'Install Extension/Script',
        desc: 'Choose Edge Addons or Userscript to use Broxy in your browser'
      },
      step2: {
        title: 'Launch & Configure',
        desc: 'Open target website, launch Broxy and configure tools to control the page'
      },
      step3: {
        title: 'Copy Endpoint to Use',
        desc: 'Copy API for workflow scripts, or MCP endpoint for AI assistants'
      }
    },
    usecases: {
      title: 'Real-world scenarios',
      automation: {
        tag: 'AI Automation',
        input: 'Help me fill this form and submit the report',
        output: 'Form filled and submitted successfully!',
        desc: 'Let AI fill forms, submit reports, and automate workflows'
      },
      monitor: {
        tag: 'Data Monitoring',
        input: 'Monitor this product\'s price every hour',
        output: 'Monitoring started! Price: $299',
        desc: 'Track prices, stocks, and competitor data in real-time'
      },
      api: {
        tag: 'API Generator',
        input: 'Turn this website\'s search into an API',
        output: 'API created: GET /search?q={query}',
        desc: 'Turn websites without APIs into callable interfaces'
      }
    },
    install: {
      title: 'Ready to get started?',
      desc: 'Install Broxy in seconds and start controlling your browser with AI',
      hint: 'Choose one of the following methods',
      bookmarkletTab: 'Bookmarklet',
      recommendedBadge: 'Recommended',
      bookmarkletHint: 'Drag button to bookmarks, then click it on any webpage to load Broxy (Ctrl/⌘ + Shift + B to show bookmarks bar)',
      bookmarkletBtn: '🚀 Launch Broxy',
      bookmarkletStep1: 'Drag [Launch Broxy] to bookmarks bar',
      bookmarkletStep2: 'Open target webpage, click bookmark',
      bookmarkletStep3: 'Click Broxy icon at bottom-right to start',
      edgeTab: 'Edge Addons',
      edgeLink: 'Install from Edge Addons',
      edgeNote: 'After installation, open any webpage to find Broxy at bottom-right',
      userTab: 'Userscript',
      developerTab: 'For Developers',
      developerHint: 'Add this to your page and visitors can use Broxy immediately',
      copy: 'Copy',
      step1: 'Install Tampermonkey',
      step1Note: 'Browser extension manager',
      step2: 'Add Broxy script',
      step2Note: 'Click to install',
      step3: 'Click floating button to config',
      step3Note: 'Broxy icon at bottom-right corner'
    },
    footer: {
      desc: 'Turn any webpage into an MCP server',
      copyright: '© 2026 Broxy. All rights reserved.'
    }
  }
};

const defaultLang = navigator.language.startsWith('zh') ? 'zh' : 'en';

function getLang() {
  return localStorage.getItem('broxy_lang') || defaultLang;
}

function setLang(lang) {
  localStorage.setItem('broxy_lang', lang);
  applyLang(lang);
}

function applyLang(lang) {
  const t = i18n[lang];
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = t;
    for (const k of keys) {
      value = value?.[k];
    }
    if (value) el.textContent = value;
  });
  
  document.documentElement.lang = lang;
}

function toggleLang() {
  const current = getLang();
  const next = current === 'zh' ? 'en' : 'zh';
  setLang(next);
  return next;
}
