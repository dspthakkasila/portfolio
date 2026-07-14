const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks?.classList.remove('active');
  });
});

const progressBar = document.querySelector('.scroll-progress');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
  if (progressBar) progressBar.style.width = `${progress}%`;
});

const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const top = section.offsetTop - 140;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });
  navItems.forEach((item) => {
    item.classList.toggle('active-link', item.getAttribute('href') === `#${current}`);
  });
});

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });
revealItems.forEach((item) => observer.observe(item));

new Typed('#typing', {
  strings: ['Java Full Stack Developer', 'Laravel Backend Developer', 'React and Django Enthusiast', 'Building modern web products'],
  typeSpeed: 55,
  backSpeed: 35,
  backDelay: 1400,
  loop: true,
  smartBackspace: true,
  showCursor: true,
  cursorChar: '|'
});

document.getElementById('year').textContent = new Date().getFullYear();
