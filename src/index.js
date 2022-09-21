import Scrollbar from "smooth-scrollbar";
import '../src/styles/main.scss';






//initialize scrollbar package
const verticalScrollbar = Scrollbar.init(document.querySelector('.scrollbar'), {
  dumping: 0.1,
  delegateTo: document,
});
verticalScrollbar.setPosition(0, 0);
verticalScrollbar.track.yAxis.element.remove();
verticalScrollbar.track.xAxis.element.remove();











// let bodycontent = document.querySelector(".bodyview");
// var loader = document.querySelector('.loader_container');
// window.addEventListener('load', function () {
//   // this.setTimeout(load_preloader, 3000);
//   load_preloader();
//   function load_preloader() {
//     loader.style.display = 'none';
//     gsap.fromTo(bodycontent, { opacity: 0 }, { opacity: 1, duration: 1 });
//   }
// });