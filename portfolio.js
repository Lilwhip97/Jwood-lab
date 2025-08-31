// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Fade-in sections
const sections = document.querySelectorAll('section');
const revealSection = () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if(top < window.innerHeight - 100) section.classList.add('visible');

    // Staggered card animations
    const cards = section.querySelectorAll('.card');
    cards.forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), i * 200);
    });
  });
}
window.addEventListener('scroll', revealSection);
window.addEventListener('load', revealSection);

// Scroll-to-top button
const scrollBtn = document.getElementById('scrollTopBtn');
window.onscroll = () => { scrollBtn.style.display = (window.scrollY > 300) ? 'block' : 'none'; };
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
