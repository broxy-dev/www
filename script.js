/**
 * BroxyDev 全局接口
 * 
 * 主题相关:
 *   - getTheme() => 'light' | 'dark'           // 获取当前主题
 *   - setTheme(theme: 'light' | 'dark')        // 设置主题
 *   - toggleTheme() => 'light' | 'dark'        // 切换主题，返回新主题
 * 
 * 语言相关:
 *   - getLang() => 'zh' | 'en'                 // 获取当前语言
 *   - setLang(lang: 'zh' | 'en')               // 设置语言
 *   - toggleLang() => 'zh' | 'en'              // 切换语言，返回新语言
 * 
 * 设置:
 *   - getSettings() => { theme, lang }         // 获取所有设置
 * 
 * 浏览器信息:
 *   - getBrowserInfo() => {
 *       userAgent,      // 用户代理
 *       language,       // 浏览器语言
 *       platform,       // 操作系统平台
 *       url,            // 当前页面链接
 *       title,          // 当前页面标题
 *       referrer,       // 页面来源
 *       screenWidth,    // 屏幕宽度
 *       screenHeight,   // 屏幕高度
 *       viewportWidth,  // 视口宽度
 *       viewportHeight  // 视口高度
 *     }
 */
window.BroxyDev = {
  getTheme,
  setTheme,
  toggleTheme,
  getLang,
  setLang,
  toggleLang,
  getSettings: () => ({
    theme: getTheme(),
    lang: getLang()
  }),
  getBrowserInfo: () => ({
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    url: window.location.href,
    title: document.title,
    referrer: document.referrer,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight
  })
};

function getTheme() {
  const stored = localStorage.getItem('broxy_theme');
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme) {
  localStorage.setItem('broxy_theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  
  if (theme === 'dark') {
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="5"/>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>`;
  } else {
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>`;
  }
}

function toggleTheme() {
  const newTheme = getTheme() === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  return newTheme;
}

function updateLangIcon(lang) {
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'zh' ? 'EN' : '中文';
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = getLang();
  
  setTheme(getTheme());
  applyLang(lang);
  updateLangIcon(lang);
  
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    const newLang = toggleLang();
    updateLangIcon(newLang);
  });
  
  initInstallTabs();
  initCopyButton();
  initTryButton();
});

function initInstallTabs() {
  const tabs = document.querySelectorAll('.install-tab');
  const panels = document.querySelectorAll('.install-panel');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.tab + '-panel';
      
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      
      tab.classList.add('active');
      document.getElementById(targetId)?.classList.add('active');
    });
  });
}

function initCopyButton() {
  const copyBtn = document.querySelector('.copy-btn');
  if (!copyBtn) return;
  
  copyBtn.addEventListener('click', async () => {
    const code = copyBtn.previousElementSibling?.textContent || '';
    const currentLang = getLang();
    const originalText = currentLang === 'zh' ? '复制' : 'Copy';
    
    try {
      await navigator.clipboard.writeText(code);
      copyBtn.textContent = currentLang === 'zh' ? '已复制' : 'Copied';
      copyBtn.classList.add('copied');
      
      setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.classList.remove('copied');
      }, 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  });
}

function initTryButton() {
  const btn = document.getElementById('try-btn');
  if (!btn) return;
  
  btn.addEventListener('click', () => {
    if (btn.disabled) return;
    
    btn.disabled = true;
    const currentLang = getLang();
    btn.textContent = currentLang === 'zh' ? '加载中...' : 'Loading...';
    
    const script = document.createElement('script');
    script.src = 'assets/broxy-v1.user.js';
    script.onload = () => {
      btn.classList.add('hidden');
      document.querySelector('.try-hint')?.classList.remove('hidden');
    };
    script.onerror = () => {
      btn.disabled = false;
      btn.textContent = currentLang === 'zh' ? '点击体验 Broxy' : 'Try Broxy';
    };
    document.body.appendChild(script);
  });
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('broxy_theme')) {
    setTheme(e.matches ? 'dark' : 'light');
  }
});
