import Scrollbar  from "smooth-scrollbar";

var options = {
    'damping': 0.3,
}
Scrollbar.init(document.querySelector('#scrollbar'), options);

let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;

    // console.log(x, y);
    innerCursor.style.left = `${x}px`;
    innerCursor.style.top =  `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top =  `${y}px`;
}

let highlightTexts = Array.from(document.querySelectorAll('.special-highlight'));




let specialTxt = Array.from(document.querySelectorAll('.special-highlight'));

specialTxt.forEach((txt)=> {
    txt.addEventListener('mouseover', ()=>{
    innerCursor.classList.add("grow");
    });

    txt.addEventListener('mouseleave', ()=>{
        innerCursor.classList.remove("grow");
    })
});