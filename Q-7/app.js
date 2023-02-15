// const ul = Array.from(document.getElementsByClassName("ul-list"));
// ul.addEventlistener("click", () => {
//   let li = document.getElementById("list-item");
//   li.style.display = "none";
// });
const menu = document.getElementById("list");

menu.addEventListener("click", dropdown);
function dropdown(e) {
  const ulList = document.getElementById("ul-list");
  if (ulList.style.display === "none") {
    ulList.style.display = "block";
  } else {
    ulList.style.display = "none";
  }
}
// dropdown();
