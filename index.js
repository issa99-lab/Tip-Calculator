'use strict';

const btnEl = document.getElementById("button");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
let answerSpan = document.getElementById("totalX");

function totalBill() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = (tipValue / 100 + 1) * billValue;
  answerSpan.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener('click', totalBill);