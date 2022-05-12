"use strict"

function solveEquation(a, b, c) {
  let arr = [];

  let discriminant = b**2 - 4 * a * c;
  if (discriminant > 0) {
    arr[0] = parseInt((( -b + Math.sqrt(discriminant)) / (2 * a)).toFixed(0));
    arr[1] = parseInt((( -b - Math.sqrt(discriminant)) / (2 * a)).toFixed(0));
  }
  else if (discriminant === 0) {
    arr[0] = -b / (2 * a);
  }
  return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
