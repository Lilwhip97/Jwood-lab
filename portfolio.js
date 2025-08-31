// Typed Text
const typedText = document.getElementById('typed-text');
const textArray = ["Future Web Developer","Creative Designer","Digital Adventurer"];
let arrayIndex=0,textIndex=0;
function type(){
  if(textIndex<textArray[arrayIndex].length){
    typedText.textContent += textArray[arrayIndex][textIndex];
    textIndex++;
    setTimeout(type,100);
  } else { setTimeout(erase,1500); }
}
function erase(){
  if(textIndex>0){
    typedText.textContent = textArray[arrayIndex].substring(0,textIndex-1);
    textIndex--;
    setTimeout(erase,50);
  } else { arrayIndex=(arrayIndex+1)%textArray.length; setTimeout(type,500); }
}
document.addEventListener("DOMContentLoaded",type);

// Theme Toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click',()=>{
  document.body.classList.toggle('light');
  themeBtn.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';
});

// Scroll-triggered sections
const parallaxSections = document.querySelectorAll('.parallax');
window.addEventListener('scroll',()=>{
  const trigger = window.innerHeight/1.2;
  parallaxSections.forEach(section=>{
    const top = section.getBoundingClientRect().top;
    if(top<trigger){section.classList.add('visible'); section.querySelector('.parallax-bg').classList.add('active');}
  });
});

// Hero interactive SVG background
const svgBg = document.getElementById('interactive-svg-bg');
function createCircle(x,y){
  const circle=document.createElementNS("http://www.w3.org/2000/svg","circle");
  circle.setAttribute("cx",x);
  circle.setAttribute("cy",y);
  circle.setAttribute("r",Math.random()*10+5);
  circle.setAttribute("fill","rgba(255,255,255,0.1)");
  svgBg.appendChild(circle);
  setTimeout(()=>circle.remove(),2000);
}
document.addEventListener('mousemove', e=>{createCircle(e.clientX,e.clientY);});

// Hero light refraction
const heroContent = document.querySelector('.hero-content');
document.addEventListener('mousemove', e=>{
  const x=e.clientX/window.innerWidth-0.5;
  const y=e.clientY/window.innerHeight-0.5;
  heroContent.style.transform = `translate(${x*20}px, ${y*20}px)`;
});

// Scroll Top button
const scrollBtn=document.getElementById('scrollTopBtn');
window.addEventListener('scroll',()=>{
  if(window.scrollY>500){scrollBtn.style.display='block';} else {scrollBtn.style.display='none';}
});
scrollBtn.addEventListener('click',()=>{window.scrollTo({top:0, behavior:'smooth'});});

// Particles.js initialization
particlesJS("particles-js",{
  "particles": {
    "number":{"value":80,"density":{"enable":true,"value_area":800}},
    "color":{"value":"#ffffff"},
    "shape":{"type":"circle"},
    "opacity":{"value":0.7,"random":true},
    "size":{"value":3,"random":true},
    "line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
    "move":{"enable":true,"speed":4,"direction":"none","random":true,"straight":false,"out_mode":"out"}
  },
  "interactivity":{"events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"}}}
});
