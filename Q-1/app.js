`use strict`;
///---------1-1---------
const table = document.getElementById("age-table");
const label = table.getElementsByTagName("label");
const firstTd = document.getElementsByTagName("td")[0];
const firstTd2 = table.getElementsByTagName("td")[0];
const form = document.getElementsByName("search")[0];
const firstInput = form.getElementsByTagName("input")[0];
const allInputs = form.querySelectorAll("input");
const lastInput = allInputs[allInputs.length - 1];

console.log(table);
console.log(label);
console.log(firstTd);
console.log(firstTd2);

console.log(form);
console.log(firstInput);
console.log(lastInput);

///---------1-2---------
const externalLink = document.getElementById("external-link");
externalLink.style.color = orange;

function colorLinks(hex) {
  var links = document.getElementsByTagName("external-link");
  for (var i = 0; i < links.length; i++) {
    if (links[i].href) {
      links[i].style.color = hex;
    }
  }
}
colorLinks(orange);
