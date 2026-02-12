// Hero Background Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-bg img');
const totalSlides = slides.length;

if (slides.length > 0) {
  slides[0].classList.add('active');
  
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
  }, 5000);
}

// GSAP Animations
if (typeof gsap !== 'undefined') {
  // Hero animations
  gsap.from('.hero-text h1', {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.3
  });

  gsap.from('.hero-text h2', {
    x: -100,
    opacity: 0,
    duration: 1,
    delay: 0.5
  });

  gsap.from('.hero-subtitle', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.7
  });

  gsap.from('.hero-buttons', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.9
  });

  // Package boxes animation
  gsap.from('.package-box', {
    scrollTrigger: {
      trigger: '.packages-banner',
      start: 'top 80%'
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
  });

  // Leader section animation
  gsap.from('.leader-content', {
    scrollTrigger: {
      trigger: '.leader-section',
      start: 'top 80%'
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });

  gsap.from('.leader-content h2', {
    scrollTrigger: {
      trigger: '.leader-section',
      start: 'top 80%'
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    delay: 0.3
  });

  gsap.from('.leader-content p', {
    scrollTrigger: {
      trigger: '.leader-section',
      start: 'top 80%'
    },
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    delay: 0.5
  });

  // Stats counter animation
  const statNumbers = document.querySelectorAll('.stat-number');
  statNumbers.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    gsap.to(stat, {
      scrollTrigger: {
        trigger: '.stats-section',
        start: 'top 80%'
      },
      innerHTML: target,
      duration: 2,
      snap: { innerHTML: 1 },
      onUpdate: function() {
        stat.innerHTML = Math.ceil(stat.innerHTML);
      }
    });
  });
}
