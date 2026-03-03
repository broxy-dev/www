const i18n = {
  zh: {
    title: 'Broxy',
    tagline: '将任意网页变成 MCP 服务器',
    subtitle: '让 AI 直接操控浏览器',
    flow: {
      user: '用户',
      webpage: '网页执行',
      aiClient: 'API/MCP',
      broxy: 'Broxy',
      result: '结果'
    },
    features: {
      title: '功能介绍',
      api: { title: '对外接口', desc: '在网页上执行 JavaScript，暴露 API 供外部调用' },
      mcp: { title: 'AI 联动', desc: '支持 MCP，让 Claude/Cursor 直接操控浏览器' },
      automation: { title: '网页自动化', desc: '模拟输入、点击、请求，自动化任意网页' }
    },
    usecases: {
      title: '使用场景',
      automation: { title: 'AI 自动化操作', desc: '让 Claude/Cursor 自动填写表单、提交报告、预订会议室' },
      monitor: { title: '网页数据监控', desc: '实时监控价格、股票行情、竞品数据' },
      api: { title: '无 API 变 API', desc: '将没有开放 API 的网站转换为可调用接口' }
    },
    install: {
      title: '安装方法',
      developerTab: '为你的网站添加 Broxy 功能',
      userTab: '用户安装',
      developerHint: '添加后，访客即可立即使用 Broxy 服务，无需安装任何扩展',
      copy: '复制',
      step1: '安装 Tampermonkey',
      step1Note: '部分浏览器需开启开发者模式',
      step2: '添加 Broxy 脚本',
      step2Note: '点击链接即可安装到 Tampermonkey',
      step3: '打开任意网站开始使用',
      step3Note: '点击右下角 Broxy 图标'
    },
    try: {
      title: '立即体验',
      button: '点击体验 Broxy',
      loading: '加载中...',
      hint: 'Broxy 已加载！点击右下角浮动按钮，即可将本页面公开为 API/MCP，在任意工作流、AI 客户端中调用'
    },
    footer: {
      copyright: '© 2026 Broxy. All rights reserved.'
    }
  },
  en: {
    title: 'Broxy',
    tagline: 'Turn any webpage into an MCP server',
    subtitle: 'Let AI control the browser directly',
    flow: {
      user: 'User',
      webpage: 'Execute',
      aiClient: 'API/MCP',
      broxy: 'Broxy',
      result: 'Result'
    },
    features: {
      title: 'Features',
      api: { title: 'API Endpoint', desc: 'Execute JavaScript on webpage, expose APIs for external calls' },
      mcp: { title: 'AI Integration', desc: 'MCP support for Claude/Cursor to directly control browser' },
      automation: { title: 'Automation', desc: 'Simulate input, click, and request on any webpage' }
    },
    usecases: {
      title: 'Use Cases',
      automation: { title: 'AI Automation', desc: 'Let Claude/Cursor fill forms, submit reports, book rooms automatically' },
      monitor: { title: 'Data Monitoring', desc: 'Track prices, stocks, and competitor data in real-time' },
      api: { title: 'API Generator', desc: 'Convert websites without APIs into callable interfaces' }
    },
    install: {
      title: 'Installation',
      developerTab: 'Add Broxy to your website',
      userTab: 'User Installation',
      developerHint: 'Visitors can use Broxy immediately without installing any extension',
      copy: 'Copy',
      step1: 'Install Tampermonkey',
      step1Note: 'Some browsers require Developer Mode',
      step2: 'Add Broxy script',
      step2Note: 'Click to install to Tampermonkey',
      step3: 'Open any website to use',
      step3Note: 'Click Broxy icon at bottom-right'
    },
    try: {
      title: 'Try Now',
      button: 'Try Broxy',
      loading: 'Loading...',
      hint: 'Broxy loaded! Click the floating button at bottom-right to expose this page as API/MCP for any workflow or AI client'
    },
    footer: {
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
