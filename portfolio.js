// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Reveal sections on scroll
const sections = document.querySelectorAll('section');
const reveal = () => {
  const triggerBottom = window.innerHeight / 1.1;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom){ section.classList.add('visible'); }
  });
};
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Scroll to top button
const scrollBtn = document.getElementById('scrollTopBtn');
window.onscroll = () => { scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none'; }
scrollBtn.addEventListener('click', () => { window.scrollTo({top:0, behavior:'smooth'}); });

// Particle.js initialization
particlesJS.load('particles-js', 'particles.json', function() { console.log('Particles Loaded'); });
