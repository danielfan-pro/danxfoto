/* ═══════════════════════════════════════
   DanXFoto — main.js
═══════════════════════════════════════ */

// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Mobile hamburger menu ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
let menuScrollY = 0;

function setMenuOpen(isOpen) {
  if (isOpen) {
    menuScrollY = window.scrollY;
    document.body.style.top = `-${menuScrollY}px`;
  }

  hamburger.classList.toggle('open', isOpen);
  navLinks.classList.toggle('open', isOpen);
  document.body.classList.toggle('menu-open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));

  if (!isOpen) {
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.top = '';
    window.scrollTo(0, menuScrollY);
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    });
  }
}

hamburger.addEventListener('click', () => {
  setMenuOpen(!navLinks.classList.contains('open'));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    setMenuOpen(false);
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navLinks.classList.contains('open')) {
    setMenuOpen(false);
  }
});

// ── Active nav link on scroll ──
const sections = document.querySelectorAll('section[id], div[id]');
const navItems = document.querySelectorAll('.nav-links a:not(.btn-book)');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) current = section.getAttribute('id');
  });
  navItems.forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === '#' + current) a.style.color = 'var(--gold)';
  });
});

// ── Portfolio filter ──
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    portfolioItems.forEach(item => {
      const show = filter === 'all' || item.dataset.cat === filter;
      item.classList.toggle('hidden', !show);
    });
  });
});

// ── Scroll reveal animation ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.service-card, .testimonial-card, .portfolio-item, .about-content, .about-img-wrap, .contact-info, .contact-form'
).forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ── Lightbox (GLightbox) ──
const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  autoplayVideos: false,
  closeOnOutsideClick: true,
  keyboardNavigation: true,
  cssEfects: {
    fade: { in: 'fadeIn', out: 'fadeOut' },
  },
});

// ── Set minimum date to today ──
const dateInput = document.getElementById('date');
if (dateInput) {
  const today = new Date().toISOString().split('T')[0];
  dateInput.min = today;
}

// ── Email validation ──
const emailInput = document.getElementById('email');
const emailError = document.createElement('span');
emailError.className = 'field-error';
emailError.textContent = 'Please enter a valid email address';
emailInput.parentNode.appendChild(emailError);

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
}

emailInput.addEventListener('blur', () => {
  if (emailInput.value && !isValidEmail(emailInput.value)) {
    emailInput.classList.add('input-error');
    emailError.classList.add('visible');
  } else {
    emailInput.classList.remove('input-error');
    emailError.classList.remove('visible');
  }
});

emailInput.addEventListener('input', () => {
  if (isValidEmail(emailInput.value)) {
    emailInput.classList.remove('input-error');
    emailError.classList.remove('visible');
  }
});

// ── Contact form (EmailJS) ──
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!isValidEmail(emailInput.value)) {
    emailInput.classList.add('input-error');
    emailError.classList.add('visible');
    emailInput.focus();
    return;
  }

  const btn = contactForm.querySelector('.btn-submit');
  const statusMsg = document.getElementById('formStatus');

  btn.textContent = 'Sending...';
  btn.disabled = true;
  statusMsg.className = 'form-status';
  statusMsg.textContent = '';

  emailjs.sendForm(_cfg.si, _cfg.ti, contactForm)
    .then(() => {
      btn.textContent = 'Send Message';
      btn.disabled = false;
      contactForm.reset();
      statusMsg.className = 'form-status success';
      statusMsg.textContent = '✓ Message sent! I\'ll be in touch within 24 hours.';
      setTimeout(() => { statusMsg.textContent = ''; statusMsg.className = 'form-status'; }, 6000);
    })
    .catch((err) => {
      console.error('EmailJS error:', err);
      btn.textContent = 'Send Message';
      btn.disabled = false;
      statusMsg.className = 'form-status error';
      if (!navigator.onLine) {
        statusMsg.textContent = '✗ No internet connection. Please check your network and try again.';
      } else if (err.status === 400) {
        statusMsg.textContent = '✗ Something went wrong with the form. Please try again.';
      } else if (err.status === 429) {
        statusMsg.textContent = '✗ Too many requests. Please wait a few minutes and try again.';
      } else {
        statusMsg.textContent = '✗ Failed to send. Please email me directly at hello@danxfoto.com';
      }
    });
});

// ── Smooth scroll for all anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = navbar.offsetHeight + 16;
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    }
  });
});
