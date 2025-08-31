// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Fade in sections
const sections = document.querySelectorAll('section');
const revealSection = () => { sections.forEach(section => {
  const top = section.getBoundingClientRect().top;
  if(top < window.innerHeight - 100) section.classList.add('visible');
})};
window.addEventListener('scroll', revealSection);
window.addEventListener('load', revealSection);

// Scroll-to-top
const scrollBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll',()=>{scrollBtn.style.display = (window.scrollY>300)?'block':'none';});
scrollBtn.onclick = ()=> window.scrollTo({top:0,behavior:'smooth'});

// Header shrink
const header = document.querySelector('header');
window.addEventListener('scroll',()=>{(window.scrollY>100)?header.classList.add('shrink'):header.classList.remove('shrink');});

// Initialize particles
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 80 },
    "color": { "value": ["#00f0ff","#ff00ff","#ff6600"] },
    "shape": { "type":"circle" },
    "opacity": { "value":0.5 },
    "size": { "value":3 },
    "line_linked": { "enable":true, "distance":150, "color":"#fff", "opacity":0.4, "width":1 },
    "move": { "enable":true, "speed":2 }
  }
});
