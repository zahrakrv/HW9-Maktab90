`use strict`
const myDiv = document.getElementById("myDiv");
myDiv.addEventListener("mouseover", showTooltip);
myDiv.addEventListener("mouseout", hideTooltip);
function showTooltip() {
   const tooltip = document.querySelector(".tooltip");
   tooltip.style.display = "block";
}
function hideTooltip() {
   const tooltip = document.querySelector(".tooltip");
   tooltip.style.display = "none";
}  