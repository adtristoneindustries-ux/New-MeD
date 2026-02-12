// GSAP Animations
if (typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // Hero animation
  gsap.from('.about-hero h1', {
    y: 50,
    opacity: 0,
    duration: 1
  });

  gsap.from('.about-hero p', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2
  });

  // Vision Section
  gsap.from('.vision-section h2', {
    scrollTrigger: {
      trigger: '.vision-section',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
      onEnter: () => document.querySelector('.vision-section h2').classList.add('animated'),
      onLeaveBack: () => document.querySelector('.vision-section h2').classList.remove('animated')
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8
  });

  gsap.from('.vision-section p', {
    scrollTrigger: {
      trigger: '.vision-section',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.2
  });

  // Mission Section
  gsap.from('.mission-section h2', {
    scrollTrigger: {
      trigger: '.mission-section',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
      onEnter: () => document.querySelector('.mission-section h2').classList.add('animated'),
      onLeaveBack: () => document.querySelector('.mission-section h2').classList.remove('animated')
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8
  });

  gsap.from('.mission-section p', {
    scrollTrigger: {
      trigger: '.mission-section',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.2
  });

  // Core Values Section
  gsap.from('.values-section h2', {
    scrollTrigger: {
      trigger: '.values-section',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
      onEnter: () => document.querySelector('.values-section h2').classList.add('animated'),
      onLeaveBack: () => document.querySelector('.values-section h2').classList.remove('animated')
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8
  });

  gsap.from('.value-card', {
    scrollTrigger: {
      trigger: '.values-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    y: 80,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
  });

  gsap.from('.values-footer', {
    scrollTrigger: {
      trigger: '.values-footer',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 0.8
  });
}
