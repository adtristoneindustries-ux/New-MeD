gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from('.services-hero h1', {
  opacity: 0,
  y: 30,
  duration: 0.8,
  ease: 'power2.out'
});

gsap.from('.services-hero p', {
  opacity: 0,
  y: 20,
  duration: 0.8,
  delay: 0.2,
  ease: 'power2.out'
});

// Stats Section Animations
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

// MBBS Guide Animations
gsap.from('.guide-header', {
  opacity: 0,
  y: 30,
  duration: 0.8,
  scrollTrigger: {
    trigger: '.mbbs-guide',
    start: 'top 80%',
    once: true
  }
});

gsap.utils.toArray('.guide-card').forEach((card, i) => {
  gsap.from(card, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      once: true
    }
  });
});

// Tamil Nadu Guide Animations
gsap.from('.tn-guide-header', {
  opacity: 0,
  scale: 0.95,
  duration: 0.8,
  scrollTrigger: {
    trigger: '.tn-guide-header',
    start: 'top 80%',
    once: true
  }
});

gsap.utils.toArray('.official-link').forEach((link, i) => {
  gsap.from(link, {
    opacity: 0,
    x: -20,
    duration: 0.5,
    delay: i * 0.1,
    scrollTrigger: {
      trigger: '.official-links',
      start: 'top 85%',
      once: true
    }
  });
});
