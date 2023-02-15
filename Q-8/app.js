`use strict`;
const box = Array.from(document.getElementsByClassName("box"));
const closeBtn = Array.from(document.getElementsByClassName("close-btn"));
closeBtn.forEach((element) => {
  element.addEventListener("click", deleteBox);
});
function deleteBox(e) {
  e.target.closest("div.box").classList.add("close");
}
