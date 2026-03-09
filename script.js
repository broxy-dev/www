/**
 * BroxyDev Global API
 * 
 * Theme:
 *   - getTheme() => 'light' | 'dark'
 *   - setTheme(theme: 'light' | 'dark')
 *   - toggleTheme() => 'light' | 'dark'
 * 
 * Language:
 *   - getLang() => 'zh' | 'en'
 *   - setLang(lang: 'zh' | 'en')
 *   - toggleLang() => 'zh' | 'en'
 * 
 * Settings:
 *   - getSettings() => { theme, lang }
 * 
 * Browser Info:
 *   - getBrowserInfo() => { userAgent, language, platform, url, title, referrer, screenWidth, screenHeight, viewportWidth, viewportHeight }
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

let mouseX = -100;
let mouseY = -100;

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
  initCursor();
  initParticles();
  initScrollReveal();
  initNavbarScroll();
  initCardHover();
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
    btn.querySelector('span').textContent = currentLang === 'zh' ? '加载中...' : 'Loading...';
    
    const script = document.createElement('script');
    script.src = 'assets/broxy-v1.user.js';
    script.onload = () => {
      btn.classList.add('hidden');
      document.querySelector('.try-hint')?.classList.remove('hidden');
    };
    script.onerror = () => {
      btn.disabled = false;
      btn.querySelector('span').textContent = currentLang === 'zh' ? '点击体验 Broxy' : 'Try on this page';
    };
    document.body.appendChild(script);
  });
}

function initCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  
  if (!dot || !ring) return;
  
  let ringX = -100;
  let ringY = -100;
  
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = (mouseX - 4) + 'px';
    dot.style.top = (mouseY - 4) + 'px';
  });
  
  document.querySelectorAll('a, button, .feature-card, .usecase-card, .quickstart-card, .install-link').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
  });
  
  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    
    const ringWidth = ring.classList.contains('hovering') ? 52 : 36;
    ring.style.left = (ringX - ringWidth / 2) + 'px';
    ring.style.top = (ringY - ringWidth / 2) + 'px';
    
    requestAnimationFrame(animateRing);
  }
  animateRing();
}

function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let particles = [];
  const particleCount = 80;
  const connectionDistance = 120;
  
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.radius = Math.random() * 1.5 + 0.5;
      this.opacity = Math.random() * 0.3 + 0.1;
    }
    
    update() {
      this.x += this.vx;
      this.y += this.vy;
      
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      
      const dx = this.x - mouseX;
      const dy = this.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 150) {
        const force = (150 - dist) / 150;
        this.vx += dx / dist * force * 0.01;
        this.vy += dy / dist * force * 0.01;
      }
      
      this.vx *= 0.999;
      this.vy *= 0.999;
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(128, 128, 128, ${this.opacity})`;
      ctx.fill();
    }
  }
  
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < connectionDistance) {
          const opacity = (1 - dist / connectionDistance) * 0.08;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(128, 128, 128, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    
    requestAnimationFrame(animate);
  }
  animate();
}

function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 80);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

function initCardHover() {
  document.querySelectorAll('.usecase-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const rotateX = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2) * -3;
      const rotateY = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2) * 3;
      card.style.transform = `translateY(-8px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) perspective(800px) rotateX(0) rotateY(0)';
    });
  });
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem('broxy_theme')) {
    setTheme(e.matches ? 'dark' : 'light');
  }
});
