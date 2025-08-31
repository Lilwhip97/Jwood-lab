// Typing animation
const typedText = document.getElementById('typed-text');
const phrases = ["Innovation is the only way forward.","I craft futuristic web experiences.","Your vision, my code.","Let's create the future together."];
let i=0,j=0,current=[],isDeleting=false,typeSpeed=100;
function type(){ 
  if(i>=phrases.length)i=0;
  const full=phrases[i];
  isDeleting?current=full.substring(0,current.length-1):current=full.substring(0,current.length+1);
  typedText.textContent=current;
  if(!isDeleting&&current===full){ isDeleting=true; typeSpeed=50; setTimeout(type,1500);}
  else if(isDeleting&&current===""){ isDeleting=false; i++; typeSpeed=100; setTimeout(type,500);}
  else{ setTimeout(type,typeSpeed);}
}
document.addEventListener("DOMContentLoaded", type);

// Smooth scroll
document.querySelectorAll('nav a').forEach(link=>link.addEventListener('click',e=>{ e.preventDefault(); document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});}));

// Section reveal
const sections=document.querySelectorAll('section, .parallax');
const reveal=()=>{ const trigger=window.innerHeight/1.1; sections.forEach(section=>{ const top=section.getBoundingClientRect().top; if(top<trigger) section.classList.add('visible'); }); };
window.addEventListener('scroll',reveal);
window.addEventListener('load',reveal);

// Scroll to top
const scrollBtn=document.getElementById('scrollTopBtn');
window.addEventListener('scroll',()=>{ scrollBtn.style.display=window.scrollY>300?'block':'none'; });
scrollBtn.addEventListener('click',()=>{ window.scrollTo({top:0,behavior:'smooth'}); });

// Header collapse
const header=document.getElementById('header');
window.addEventListener('scroll',()=>{ window.scrollY>100?header.classList.add('shrink'):header.classList.remove('shrink'); });

// Cards tilt effect
const cards=document.querySelectorAll('.card');
cards.forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const rect=card.getBoundingClientRect();
    const x=e.clientX-rect.left, y=e.clientY-rect.top, centerX=rect.width/2, centerY=rect.height/2;
    const rotateX=((y-centerY)/centerY)*10, rotateY=((x-centerX)/centerX)*10;
    card.style.transform=`rotateY(${rotateY}deg) rotateX(${-rotateX}deg) scale(1.05)`;
  });
  card.addEventListener('mouseleave',()=>{ card.style.transform='rotateY(0deg) rotateX(0deg) scale(1)'; });
});

// Parallax
const parallaxSections=document.querySelectorAll('.parallax');
window.addEventListener('scroll',()=>{
  const scrollTop=window.scrollY;
  parallaxSections.forEach(section=>{
    const bg=section.querySelector('.parallax-bg');
    const rect=section.getBoundingClientRect();
    const offset=rect.top/window.innerHeight;
    bg.style.transform=`translateY(${offset*50}px)`;
  });
});
