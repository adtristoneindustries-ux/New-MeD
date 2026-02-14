// GSAP Animations
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // Set initial state immediately
  gsap.set('.service-item', { opacity: 1, y: 0 });

  // Hero animation
  gsap.from('.services-hero h1', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  });

  gsap.from('.services-hero p', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power3.out'
  });

  // Service cards animation - 3D flip effect
  gsap.utils.toArray('.service-item').forEach((item, index) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true
      },
      rotationY: 90,
      opacity: 0,
      scale: 0.8,
      duration: 0.4,
      delay: index * 0.08,
      ease: 'back.out(1.7)',
      transformOrigin: 'center center'
    });
  });
}
