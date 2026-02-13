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
gsap.to('.stats-circle-bg', {
  opacity: 1,
  scale: 1,
  duration: 1,
  ease: 'back.out(1.2)',
  scrollTrigger: {
    trigger: '.neet-stats',
    start: 'top 70%',
    once: true
  }
});

gsap.utils.toArray('.stat-row').forEach((row, i) => {
  gsap.to(row, {
    opacity: 1,
    x: 0,
    duration: 0.6,
    delay: 0.3 + (i * 0.15),
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.stats-circle-bg',
      start: 'top 70%',
      once: true
    }
  });
});

gsap.utils.toArray('.stat-divider').forEach((divider, i) => {
  gsap.to(divider, {
    opacity: 1,
    scaleX: 1,
    duration: 0.5,
    delay: 0.5 + (i * 0.15),
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.stats-circle-bg',
      start: 'top 70%',
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
  trigger: '.stats-circle-bg',
  start: 'top 70%',
  once: true,
  onEnter: () => {
    document.querySelectorAll('.stat-number').forEach(animateCounter);
  }
});

// Icon hover animations
gsap.utils.toArray('.stat-icon-box').forEach((icon) => {
  icon.addEventListener('mouseenter', () => {
    gsap.to(icon, {
      scale: 1.15,
      rotation: 10,
      duration: 0.3,
      ease: 'back.out(2)'
    });
  });
  
  icon.addEventListener('mouseleave', () => {
    gsap.to(icon, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
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
