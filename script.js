// Close Bootstrap mobile menu when clicking a nav link
const navCollapse = document.getElementById('navMenu');
if (navCollapse) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
      if (bsCollapse) bsCollapse.hide();
    });
  });
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScroll = currentScroll;
});

// Fade-in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply fade-in to key elements
document.querySelectorAll('.section-header, .content-block, .welcome-text, .welcome-quote, .preview-card, .ministry-full, .ministry-card-small, .pastor-card, .platform-card, .contact-info, .contact-form-wrapper, .timeline-item').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Message Sent!';
    btn.disabled = true;
    btn.style.background = '#22c55e';
    btn.style.borderColor = '#22c55e';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      btn.style.background = '';
      btn.style.borderColor = '';
      contactForm.reset();
    }, 3000);
  });
}
