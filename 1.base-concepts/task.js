"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d === 0) {
    arr[0] = -b / (2 * a);
  } else if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  } else {
    percent = (percent / 100) / 12;
    let loanBody = amount - contribution;
    let monthlyPayments = loanBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
    let totalSum = monthlyPayments * countMonths;

    return Number(totalSum.toFixed(2));
  }
}