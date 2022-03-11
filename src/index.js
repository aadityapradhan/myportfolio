import Scrollbar from "smooth-scrollbar";
import { gsap } from "gsap";
import '../src/styles/main.scss';
import easing from 'easing-js';





//initialize scrollbar package
const verticalScrollbar = Scrollbar.init(document.querySelector('.scrollbar'), {
  dumping: 0.1,
  delegateTo: document,
});
verticalScrollbar.setPosition(0, 0);
verticalScrollbar.track.yAxis.element.remove();
verticalScrollbar.track.xAxis.element.remove();
//scrollevent
verticalScrollbar.addListener((s) => {
  var yScrollOffset = s.offset.y;
  var header = document.querySelector("header");
  header.classList.toggle("sticky", yScrollOffset > 0);
});



function scrollAchievement(){
  verticalScrollbar.scrollTo(0, 300, 700);
  // verticalScrollbar.scrollTo(0, 100, 600, {
  //   callback: () => {},
  //   easing: easing.easeOutBack,
  // });
}
let scrollbtn = document.querySelector('.look-btn');
scrollbtn.addEventListener('click', scrollAchievement);
//menubtn script




  







//CURSOR ANIMATION
const cursor = document.createElement('div');
cursor.className = 'cursor';

const cursorF = document.createElement('div');
cursorF.className = 'cursor-f';

let cursorX = 0;
let cursorY = 0;
let pageX = 0;
let pageY = 0;
let size = 8;
let sizeF = 36;
let followSpeed = .16;

document.body.appendChild(cursor);
document.body.appendChild(cursorF);

if ('ontouchstart' in window) {
  cursor.style.display = 'none';
  cursorF.style.display = 'none';
}

let highlightZone = document.querySelector('.text-area');
highlightZone.addEventListener('mouseenter', (e)=>{
// console.log(e.clientX); 
   
  // console.log(e.clientX);
     gsap.to(cursor, { scale: 10.5,});
     gsap.to(cursorF, { scale: .2 }); 
 
});
highlightZone.addEventListener('mouseleave', (e)=>{
  gsap.to(cursor, { scale: 1 });
  gsap.to(cursorF, { scale: 1 });
});

cursor.style.setProperty('--size', size + 'px');
cursorF.style.setProperty('--size', sizeF + 'px');


document.addEventListener('mouseleave', (e)=>{
  gsap.fromTo(cursorF, {scale: 1}, {scale: 0, duration: 1});
  gsap.fromTo(cursor, {scale: 1}, {scale: 0, duration: 1});
  
});
document.addEventListener('mouseenter', (e)=>{
  gsap.fromTo(cursorF, {scale: 0}, {scale: 1, duration: 1});
  gsap.fromTo(cursor, {scale: 0}, {scale: 1, duration: 1});
});


window.addEventListener('mousemove', function (e) {
  pageX = e.clientX;
  pageY = e.clientY;
  cursor.style.left = e.clientX - size / 2 + 'px';
  cursor.style.top = e.clientY - size / 2 + 'px';
  cursorF.style.opacity = .5;
  
  
  
}, );


function loop() {
  cursorX = lerp(cursorX, pageX, followSpeed);
  cursorY = lerp(cursorY, pageY, followSpeed);
  
  

  cursorF.style.top = cursorY - sizeF / 2 + 'px';
  cursorF.style.left = cursorX - sizeF / 2 + 'px';
 
  requestAnimationFrame(loop);
}

loop();
function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end
};
//custom code here

let clicked = false;
if ('ontouchstart' in window) {

}
else {
  function mousedown(e) {
    gsap.to(cursor, { scale: 4.5 });
    gsap.to(cursorF, { scale: .2 });

    clicked = true;
  }

  function mouseup(e) {
    gsap.to(cursor, { scale: 1 });
    gsap.to(cursorF, { scale: 1 });

   clicked = false;
  }
  window.addEventListener('mousedown', mousedown, false);
  window.addEventListener('touchstart', mousedown, false);
  window.addEventListener('touchend', mouseup, false);
  window.addEventListener('mouseup', mouseup, false);


};

let bodycontent = document.querySelector(".bodyview");
var loader = document.querySelector('.loader_container');
window.addEventListener('load', function () {
  this.setTimeout(load_preloader, 3000);
  function load_preloader() {
    loader.style.display = 'none';
    gsap.fromTo(bodycontent, {opacity: 0}, {opacity: 1, duration: 1});
  }
});