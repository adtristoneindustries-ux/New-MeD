// GSAP Animations
if (typeof gsap !== 'undefined') {
  gsap.from('.contact-hero h1', {
    y: 50,
    opacity: 0,
    duration: 1
  });

  gsap.from('.contact-info', {
    scrollTrigger: {
      trigger: '.contact-container',
      start: 'top 80%'
    },
    x: -100,
    opacity: 0,
    duration: 1
  });

  gsap.from('.contact-form-section', {
    scrollTrigger: {
      trigger: '.contact-container',
      start: 'top 80%'
    },
    x: 100,
    opacity: 0,
    duration: 1
  });
}

// Initialize EmailJS
emailjs.init('iX5aizFdNax10Jp4W');

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const message = document.getElementById('formMessage');
    const phoneInput = document.getElementById('contactPhone');
    const emailInput = document.getElementById('contactEmail');
    
    // Validate mobile number (exactly 10 digits)
    if (!/^[0-9]{10}$/.test(phoneInput.value)) {
      message.className = 'form-message error';
      message.textContent = 'Mobile number must be exactly 10 digits (numbers only).';
      phoneInput.focus();
      return;
    }
    
    // Validate email format with required @ and domain extensions
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|org|net|edu|gov|co\.in|ac\.in)$/.test(emailInput.value)) {
      message.className = 'form-message error';
      message.textContent = 'Email must contain @ symbol and valid domain (.com, .in, .org, .net, .edu, .gov, .co.in, .ac.in)';
      emailInput.focus();
      return;
    }
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    const formData = {
      from_name: document.getElementById('contactName').value,
      from_email: emailInput.value,
      phone: phoneInput.value,
      country: document.getElementById('contactCountry').value,
      neet_score: document.getElementById('contactNeet').value,
      course: document.getElementById('contactCourse').value,
      message: document.getElementById('contactMessage').value || 'No additional details provided',
      to_email: 'medindiacag@gmail.com'
    };
    
    try {
      await emailjs.send('service_3x6oz4q', 'template_1sd101t', formData);
      
      message.className = 'form-message success';
      message.textContent = 'Thank you! Your message has been sent successfully. Our team will contact you soon.';
      contactForm.reset();
      
    } catch (error) {
      message.className = 'form-message error';
      message.textContent = 'Failed to send. Please try again or call us directly at +91 86100 13089.';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
}
