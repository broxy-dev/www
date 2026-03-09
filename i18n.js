const i18n = {
  zh: {
    nav: {
      features: '功能特性',
      quickstart: '快速上手',
      usecases: '使用场景',
      install: '安装'
    },
    hero: {
      badge: '开源免费',
      title: '将任意网页变成 MCP 服务器',
      subtitle: '让 Claude、Cursor 等 AI 助手直接操控浏览器，无需 API',
      cta: '开始使用'
    },
    features: {
      title: '强大功能',
      api: { title: '对外接口', desc: '在任意网页执行 JavaScript，暴露 API 供外部调用' },
      mcp: { title: 'AI 联动', desc: '支持 MCP，让 Claude/Cursor 直接操控浏览器' },
      automation: { title: '网页自动化', desc: '模拟输入、点击、请求，自动化任意网页' },
      security: { title: '安全私密', desc: '所有操作均在本地运行，数据不上传外部服务器' },
      zero: { title: '零配置', desc: '通过 Tampermonkey 一键安装，开箱即用' },
      cross: { title: '跨平台', desc: '支持 Chrome、Firefox、Safari、Edge 及所有支持脚本的浏览器' }
    },
    quickstart: {
      title: '三步上手',
      step1: {
        title: '安装 Tampermonkey',
        desc: '从 tampermonkey.net 获取浏览器扩展',
        link: '下载 Tampermonkey'
      },
      step2: {
        title: '添加 Broxy 脚本',
        desc: '点击安装 Broxy 用户脚本',
        link: '安装 Broxy 脚本'
      },
      step3: {
        title: '开始使用',
        desc: '打开任意网页，点击 Broxy 浮动按钮',
        link: '在本页体验'
      }
    },
    usecases: {
      title: '真实场景',
      automation: {
        tag: 'AI 自动化',
        input: '帮我填这个表单并提交报告',
        output: '表单已填写并提交成功！',
        desc: '让 Claude/Cursor 自动填写表单、提交报告、预订会议室'
      },
      monitor: {
        tag: '数据监控',
        input: '每小时监控这个商品的价格',
        output: '监控已开始！当前价格：¥299',
        desc: '实时监控价格、股票行情、竞品数据'
      },
      api: {
        tag: 'API 生成',
        input: '把这个网站的搜索变成 API',
        output: 'API 已创建：GET /search?q={query}',
        desc: '将没有开放 API 的网站转换为可调用接口'
      }
    },
    install: {
      title: '准备好了吗？',
      desc: '几秒钟安装 Broxy，开始用 AI 控制你的浏览器',
      userTab: '用户安装',
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
    try: {
      hint: 'Broxy 已加载！点击右下角浮动按钮，即可将本页面公开为 API/MCP'
    },
    footer: {
      desc: '将任意网页变成 MCP 服务器',
      copyright: '© 2026 Broxy. 保留所有权利。'
    }
  },
  en: {
    nav: {
      features: 'Features',
      quickstart: 'Quick Start',
      usecases: 'Use Cases',
      install: 'Install'
    },
    hero: {
      badge: 'Open Source & Free',
      title: 'Turn any webpage into an MCP server',
      subtitle: 'Let Claude, Cursor, and other AI assistants directly control your browser. No API needed.',
      cta: 'Get Started'
    },
    features: {
      title: 'Powerful Capabilities',
      api: { title: 'API Endpoint', desc: 'Execute JavaScript on any webpage, expose APIs for external calls' },
      mcp: { title: 'AI Integration', desc: 'MCP support for Claude/Cursor to directly control browser' },
      automation: { title: 'Automation', desc: 'Simulate input, click, and request on any webpage' },
      security: { title: 'Secure & Private', desc: 'All operations run locally, no data sent to external servers' },
      zero: { title: 'Zero Config', desc: 'One-click install via Tampermonkey, works out of the box' },
      cross: { title: 'Cross Platform', desc: 'Works on Chrome, Firefox, Safari, Edge and any browser with userscript support' }
    },
    quickstart: {
      title: 'Get started in 3 steps',
      step1: {
        title: 'Install Tampermonkey',
        desc: 'Get the browser extension from tampermonkey.net',
        link: 'Download Tampermonkey'
      },
      step2: {
        title: 'Add Broxy Script',
        desc: 'Click to install the Broxy userscript',
        link: 'Install Broxy Script'
      },
      step3: {
        title: 'Start Using',
        desc: 'Open any webpage and click the Broxy floating button',
        link: 'Try on this page'
      }
    },
    usecases: {
      title: 'Real-world scenarios',
      automation: {
        tag: 'AI Automation',
        input: 'Help me fill this form and submit the report',
        output: 'Form filled and submitted successfully!',
        desc: 'Let Claude/Cursor fill forms, submit reports, and book meetings automatically'
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
        desc: 'Convert websites without APIs into callable interfaces'
      }
    },
    install: {
      title: 'Ready to get started?',
      desc: 'Install Broxy in seconds and start controlling your browser with AI',
      userTab: 'User Installation',
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
    try: {
      hint: 'Broxy loaded! Click the floating button at bottom-right to expose this page as API/MCP'
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
