// Global Navigation & Common Utilities for Multi-Page Portfolio
(function() {
  // Read and apply theme immediately if not already applied
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
})();

document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Logic
  const themeToggle = document.getElementById('themeToggle');
  const getTheme = () => document.documentElement.getAttribute('data-theme') || 'dark';

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      themeToggle.setAttribute('title', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  };

  if (themeToggle) {
    applyTheme(getTheme());
    themeToggle.addEventListener('click', () => {
      const current = getTheme();
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      const isExpanded = mobileDrawer.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close mobile menu on outside click or resize
    document.addEventListener('click', (e) => {
      if (!mobileToggle.contains(e.target) && !mobileDrawer.contains(e.target)) {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Back to Top Button
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Contact Form Submission Simulation (on contact.html)
  const contactForm = document.getElementById('portfolioContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const messageInput = document.getElementById('contactMessage');
      const successBanner = document.getElementById('contactSuccessBanner');
      const submitBtn = document.getElementById('contactSubmitBtn');

      let isValid = true;

      // Validate name
      if (!nameInput.value.trim()) {
        nameInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        nameInput.closest('.form-group').classList.remove('has-error');
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
        emailInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        emailInput.closest('.form-group').classList.remove('has-error');
      }

      // Validate message
      if (!messageInput.value.trim()) {
        messageInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        messageInput.closest('.form-group').classList.remove('has-error');
      }

      if (!isValid) return;

      // Submit state
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
        </svg> Sending...`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        if (successBanner) {
          successBanner.classList.add('visible');
          contactForm.reset();
          setTimeout(() => {
            successBanner.classList.remove('visible');
          }, 6000);
        }
      }, 1200);
    });

    // Clear error on input
    ['contactName', 'contactEmail', 'contactMessage'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', () => {
          el.closest('.form-group').classList.remove('has-error');
        });
      }
    });
  }
});
