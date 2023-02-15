`use strict`;
// function clear(elem) {
//   while (elem.firstChild) {
//     elem.firstChild.remove();
//   }
// }
// clear();
const ol = document.getElementById("elem");

function clear(elem) {
  elem.innerHTML = "";
}
setTimeout(() => {
  clear(ol);
}, 2000);
