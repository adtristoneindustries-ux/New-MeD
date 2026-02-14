// Initialize EmailJS
emailjs.init('iX5aizFdNax10Jp4W');

// Show popup after 1 second only once per session
setTimeout(() => {
  const popup = document.querySelector('.popup-overlay');
  if (popup && !sessionStorage.getItem('popupShown')) {
    popup.classList.add('active');
  }
}, 1000);

// Close popup
const closeBtn = document.querySelector('.popup-close');
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    document.querySelector('.popup-overlay').classList.remove('active');
    sessionStorage.setItem('popupShown', 'true');
  });
}

// Form submission
const popupForm = document.getElementById('popupForm');
if (popupForm) {
  popupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = popupForm.querySelector('button[type="submit"]');
    const message = document.getElementById('popupMessageStatus');
    const mobileInput = document.getElementById('popupMobile');
    const emailInput = document.getElementById('popupEmail');
    
    // Validate mobile number (exactly 10 digits)
    if (!/^[0-9]{10}$/.test(mobileInput.value)) {
      message.className = 'popup-message error';
      message.textContent = 'Mobile number must be exactly 10 digits (numbers only).';
      mobileInput.focus();
      return;
    }
    
    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
      message.className = 'popup-message error';
      message.textContent = 'Please enter a valid email address.';
      return;
    }
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    const formData = {
      from_name: document.getElementById('popupName').value,
      from_email: emailInput.value || 'Not provided',
      mobile: mobileInput.value,
      state: document.getElementById('popupState').value,
      message: document.getElementById('popupMessage').value || 'No message',
      to_email: 'medindiacag@gmail.com'
    };
    
    try {
      await emailjs.send('service_3x6oz4q', 'template_7rz4x1d', formData);
      
      message.className = 'popup-message success';
      message.textContent = 'Thank you! We will contact you soon.';
      popupForm.reset();
      
      setTimeout(() => {
        document.querySelector('.popup-overlay').classList.remove('active');
        sessionStorage.setItem('popupShown', 'true');
      }, 2000);
      
    } catch (error) {
      message.className = 'popup-message error';
      message.textContent = 'Failed to send. Please try again or call us directly.';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit';
    }
  });
}
