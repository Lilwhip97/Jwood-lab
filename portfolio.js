// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Fade in sections on scroll
const sections = document.querySelectorAll('section');
const revealSection = () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if(top < window.innerHeight - 100) section.classList.add('visible');
  });
};
window.addEventListener('scroll', revealSection);
window.addEventListener('load', revealSection);

// Scroll-to-top
const scrollBtn = document.getElementById('scrollTopBtn');
window.onscroll = () => { scrollBtn.style.display = (window.scrollY > 300) ? 'block' : 'none'; };
scrollBtn.onclick = () => window.scrollTo({ top:0, behavior:'smooth' });

// Header shrink
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if(window.scrollY > 100){
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});
