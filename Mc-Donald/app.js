`use strict`;
// const addBtn = document.querySelectorAll(".add-btn");
// const minusBtn = document.querySelectorAll(".minus-btn");
// const inputTedad = document.querySelectorAll(".tedadd");
// let tedad = 0;
// const firstPrice = document.querySelectorAll(".first-pric");
// const price = document.querySelectorAll(".price").getAttribute("value");

// let fPriceSum = 0;
// let fPriceMinus;

///------counting number of order-------
// addBtn.addEventListener("click", () => {
//   tedad += 1;
//   inputTedad.innerHTML = tedad;
//   fPriceSum = tedad * price;
//   fPriceMinus = fPriceSum; // assign fpricesum to fpriceminus
//   firstPrice.innerHTML = "";

//   firstPrice.innerHTML = `${fPriceSum}  تومان`;
///اجرای مجدد
//   if (tedad > 0) {
//     minusBtn.addEventListener("click", adding);
//   }
// });

// minusBtn.addEventListener("click", adding);

// function adding(e) {
//   tedad -= 1;
//   inputTedad.innerHTML = tedad;
//   fPriceMinus -= price;
/// از منفی بودن جلوگیری میکنه
//   if (tedad === 0) {
//     firstPrice.innerHTML = `${fPriceMinus}  تومان`; // write last price then remove event listner
//     minusBtn.removeEventListener("click", adding);
//   } else {
//     firstPrice.innerHTML = `${fPriceMinus}  تومان`;
//   }
// }
let totalPrice = document.getElementById("total-price");
let service = document.getElementById("service");
let offCode = document.getElementById("off-code");
let endPrice = document.getElementById("end-price");
const submit = document.getElementById("submit");
const modal = document.getElementById("modal-box");
const taiidNahaii = document.getElementById("taiid-nahaii");

const allFood = document.querySelectorAll(".food-box");
allFood.forEach((food) => {
  food.querySelector(".first-pric").textContent = "0 تومان";
});

/// minus button
allFood.forEach((food, btn) => {
  food.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("minus-btn") ||
      event.target.parentElement.classList.contains("minus-btn")
    ) {
      changeOrder(food, "minus");
    }

    ///addbutton
    if (
      event.target.classList.contains("add-btn") ||
      event.target.parentElement.classList.contains("add-btn")
    ) {
      changeOrder(food, "add");
    }
  });
});
let arrorder = [];
function changeOrder(food, changeType) {
  let tedad = Number.parseInt(food.querySelector(".tedadd").textContent) || 0;
  let firstPrice = parseFloat(food.querySelector(".price").textContent);
  console.log(tedad, firstPrice);

  if (changeType === "minus" && tedad > 0) {
    let order = tedad * firstPrice;
    arrorder.pop(order);
    let allPrice = arrorder.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    totalPrice.textContent = `${allPrice}  تومان`;
    tedad--;
  }
  if (changeType === "add") {
    let order = tedad * firstPrice;
    arrorder.push(order);
    let allPrice = arrorder.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    totalPrice.textContent = `${allPrice}  تومان`;

    tedad++;
  }

  food.querySelector(".tedadd").textContent = tedad;
  food.querySelector(".first-pric").textContent = `${tedad * firstPrice} تومان`;
  let order = tedad * firstPrice;
  // console.log(order);
  arrorder.push(order);
  console.log(arrorder);

  ///end box
  let allPrice = arrorder.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log(allPrice);
  totalPrice.textContent = `${allPrice}  تومان`;

  ///service
  service.textContent = `${allPrice * 0.05}  تومان`;
  let p = allPrice - allPrice * 0.05;
  endPrice.textContent = p;

  //off
  //   const tickBtn = document.getElementById("tick");
  //   let inputOff = document.getElementById("off-code");
  //   let off = document.getElementById("off");
  //   tickBtn.addEventListener("click", () => {
  //     if (inputOff === winter) {
  //       off.textContent = `10 درصد`;
  //     }
  //   });
}
// console.log(arrorder);

///modal
submit.addEventListener("click", () => {
  modal.style.display = "block";
});
function closeModal() {
  taiidNahaii.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
closeModal();
