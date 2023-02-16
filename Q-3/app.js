`use strict`;
// let ul = document.createElement("ul");
// let li = document.createElement("li");

// li.innerText = prompt("enter your favourite food");

// ul.appendChild(li);
// document.body.appendChild(ul);

// function addList() {
//   let a = true;
//   while (a) {
//     let favfood = prompt("Please enter a drink");
//     if (favfood !== null && favfood !== "") {
//       let ul = document.getElementById("fav-food");
//       let li = document.createElement("li");
//       li.innerHTML = favfood;
//       ul.appendChild(li);
//     } else if (
//       document.onkeyup((e) => {
//         if (e.key == "Escape") return true;
//       }) ||
//       favfood === ""
//     ) {
//       a = false;
//     }
//   }
// }
// addList();
function liMaker() {
  let ul = document.createElement("ul");

  document.body.append(ul);

  while (true) {
    let liContent = prompt("Please enter your content: ");

    let li = document.createElement("li");

    if (liContent !== "" && liContent != null) {
      li.append(liContent);

      ul.appendChild(li);
    } else if (
      liContent == "" ||
      document.onKeyup((e) => {
        if (e.key == "Escape") return true;
      })
    ) {
      break;
    }
  }
}
liMaker();
