gsap.registerPlugin(ScrollTrigger);

gsap.to('.stats-heading', {
  opacity: 1,
  duration: 0.8,
  scrollTrigger: {
    trigger: '.neet-stats',
    start: 'top 80%',
    once: true
  }
});

gsap.utils.toArray('.stat-item').forEach((item, i) => {
  gsap.to(item, {
    opacity: 1,
    scale: 1,
    duration: 0.6,
    delay: 0.2 + (i * 0.1),
    ease: 'back.out(1.5)',
    scrollTrigger: {
      trigger: '.stats-grid',
      start: 'top 75%',
      once: true
    }
  });
});

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString('en-IN') + '+';
  }, 16);
}

ScrollTrigger.create({
  trigger: '.stats-grid',
  start: 'top 70%',
  once: true,
  onEnter: () => {
    document.querySelectorAll('.stat-num').forEach(animateCounter);
    
    document.querySelectorAll('.stat-circle').forEach((circle, i) => {
      const progress = circle.querySelector('.circle-progress');
      const percent = parseInt(circle.getAttribute('data-percent'));
      const color = progress.getAttribute('data-color');
      const circumference = 534;
      const offset = circumference - (percent / 100) * circumference;
      
      progress.style.stroke = color;
      
      setTimeout(() => {
        progress.style.strokeDashoffset = offset;
      }, 300 + (i * 150));
    });
  }
});

// Package Tab Switching with Hover
document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const packageContents = document.querySelectorAll('.package-content');

  function switchPackage(packageType) {
    tabBtns.forEach(b => b.classList.remove('active'));
    packageContents.forEach(c => c.classList.remove('active'));
    
    const activeBtn = document.querySelector(`[data-package="${packageType}"]`);
    const targetContent = document.getElementById(`${packageType}-package`);
    
    if (activeBtn) activeBtn.classList.add('active');
    if (targetContent) targetContent.classList.add('active');
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      const packageType = btn.getAttribute('data-package');
      switchPackage(packageType);
    });
    
    btn.addEventListener('click', () => {
      const packageType = btn.getAttribute('data-package');
      switchPackage(packageType);
    });
  });

  // Handle hash navigation
  if (window.location.hash === '#flash-tab') {
    switchPackage('complete');
    setTimeout(() => {
      document.getElementById('flash-tab').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  } else if (window.location.hash === '#elite-tab') {
    switchPackage('premium');
    setTimeout(() => {
      document.getElementById('elite-tab').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }
});

// GSAP Animations for Package Section
gsap.from('.package-tabs', {
  opacity: 0,
  y: -30,
  duration: 0.8,
  scrollTrigger: {
    trigger: '.package-comparison',
    start: 'top 80%',
    once: true
  }
});

gsap.from('.package-header', {
  opacity: 0,
  scale: 0.9,
  duration: 0.6,
  scrollTrigger: {
    trigger: '.package-content.active',
    start: 'top 75%',
    once: true
  }
});

gsap.from('.package-table tbody tr', {
  opacity: 0,
  x: -20,
  duration: 0.4,
  stagger: 0.05,
  scrollTrigger: {
    trigger: '.package-table',
    start: 'top 80%',
    once: true
  }
});
