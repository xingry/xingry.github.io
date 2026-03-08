// 主JavaScript文件

document.addEventListener('DOMContentLoaded', function() {
  // 暗色模式切换
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
    
    // 检查本地存储的暗色模式设置
    if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
    }
  }
  
  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // 代码块复制按钮
  document.querySelectorAll('pre code').forEach(codeBlock => {
    const pre = codeBlock.parentElement;
    if (pre.tagName === 'PRE') {
      const button = document.createElement('button');
      button.className = 'copy-button';
      button.innerHTML = '<i class="far fa-copy"></i>';
      button.title = '复制代码';
      
      button.addEventListener('click', function() {
        const text = codeBlock.textContent;
        navigator.clipboard.writeText(text).then(() => {
          button.innerHTML = '<i class="fas fa-check"></i>';
          button.style.color = '#4CAF50';
          setTimeout(() => {
            button.innerHTML = '<i class="far fa-copy"></i>';
            button.style.color = '';
          }, 2000);
        });
      });
      
      pre.style.position = 'relative';
      button.style.position = 'absolute';
      button.style.top = '10px';
      button.style.right = '10px';
      button.style.background = 'rgba(0,0,0,0.3)';
      button.style.border = 'none';
      button.style.color = 'white';
      button.style.padding = '5px 10px';
      button.style.borderRadius = '4px';
      button.style.cursor = 'pointer';
      button.style.fontSize = '12px';
      
      pre.appendChild(button);
    }
  });
  
  // 图片懒加载
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
  
  // 回到顶部按钮
  const backToTopButton = document.createElement('button');
  backToTopButton.id = 'backToTop';
  backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTopButton.title = '回到顶部';
  backToTopButton.style.position = 'fixed';
  backToTopButton.style.bottom = '20px';
  backToTopButton.style.right = '20px';
  backToTopButton.style.display = 'none';
  backToTopButton.style.zIndex = '1000';
  backToTopButton.style.background = '#3498db';
  backToTopButton.style.color = 'white';
  backToTopButton.style.border = 'none';
  backToTopButton.style.borderRadius = '50%';
  backToTopButton.style.width = '50px';
  backToTopButton.style.height = '50px';
  backToTopButton.style.fontSize = '20px';
  backToTopButton.style.cursor = 'pointer';
  backToTopButton.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  document.body.appendChild(backToTopButton);
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  // 阅读进度条
  const progressBar = document.createElement('div');
  progressBar.id = 'readingProgress';
  progressBar.style.position = 'fixed';
  progressBar.style.top = '0';
  progressBar.style.left = '0';
  progressBar.style.width = '0%';
  progressBar.style.height = '3px';
  progressBar.style.background = '#3498db';
  progressBar.style.zIndex = '1001';
  progressBar.style.transition = 'width 0.3s ease';
  
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });
});

// 工具函数
function formatDate(date) {
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
