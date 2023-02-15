`use strict`;
const btn = document.getElementById("hider");
const div = document.getElementById("text");
btn.addEventListener("click", () => {
  div.classList.add("hide");
  setTimeout(() => {
    btn.classList.add("hide");
  }, 2000);
});
