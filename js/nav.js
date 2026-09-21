const sections = document.querySelectorAll('main > section[id]');
const navLinks = document.querySelectorAll('header nav a[href^="#"]');

if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const link = document.querySelector(`header nav a[href="#${entry.target.id}"]`);
      if (!link) return;
      navLinks.forEach((a) => a.classList.remove('active'));
      link.classList.add('active');
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach((section) => observer.observe(section));
}

const navToggle = document.querySelector('.nav-toggle');
const headerNav = document.querySelector('header nav');

if (navToggle && headerNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = headerNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  headerNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      headerNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (event) => {
    if (!headerNav.classList.contains('open')) return;
    if (headerNav.contains(event.target) || navToggle.contains(event.target)) return;
    headerNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
}
