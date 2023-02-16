`use strict`;
///---------1-1---------
const table = document.getElementById("age-table");
const label = table.getElementsByTagName("label");
const label2 = document.querySelectorAll("#age-table label"); //راه دوم مورد 2
//("#age-table>label"): اگه می نوشتیم، یعنی فرزند اصلیش، نوه هاش و... نه
const firstTd = document.getElementsByTagName("td")[0];
//const first2 = document.querySelector("td:first-child");
// const first2 = document.querySelector("td");
const firstTd2 = table.getElementsByTagName("td")[0];
const form = document.getElementsByName("search")[0];
// const form2 = document.querySelector("form[name='search']");
const firstInput = form.getElementsByTagName("input")[0];
const allInputs = form.querySelectorAll("input");
const lastInput = allInputs[allInputs.length - 1];

console.log(table);
console.log(label2);
console.log(firstTd);
console.log(firstTd2);
console.log(form);
console.log(firstInput);
console.log(lastInput);

// 1. The table with id="age-table".
// 2. All label elements inside that table (there should be 3 of them).
// 3. The first td in that table (with the word “Age”).
// 4. The form with name="search".
// 5. The first input in that form.
// 6. The last input in that form.
