"use strict";

//-----------------------------------All Extentions
let num1 , num2 , processor, result, log_up , log_down, str
let guess = document.querySelector(".guess");
const lastguess = document.querySelector(".lastguess")
const lastlog = document.querySelector(".lastlog")
const toplama = document.querySelector(".toplama")
const çikarma = document.querySelector(".çıkarma")
const çarpma = document.querySelector(".çarpma")
const bölme = document.querySelector(".bölme")
const mod = document.querySelector(".mod")
const karesi = document.querySelector(".karesi")
const log = document.querySelector(".log")
const clearalls = document.querySelector(".c")
const clearOnce = document.querySelector(".clear")
const zero = document.querySelector(".zero")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine")
const sonuc = document.querySelector(".sonuç")


//-------------------All Function's
function process(e) {
    if (e !== "_" && num1 === undefined) {
      num1 = guess.value;
      guess.value = "";
      console.log(`${num1,num2} num1 === undefined`);
    }else if (num1 !== guess.value && guess.value !== "") {
      num1 = guess.value;
      guess.value = "";
      console.log(`${num1,num2} e === "_"`);
    } else if (num1 !== undefined) {
      num2 = guess.value;
      console.log(`${num1,num2} num1 !== undefined`); 
    }
  processor = e; 
}
function clearAll() {num1, num2,processor,result,guess.value = undefined
  lastguess.textContent = "History Calculation"
}
  
function fclearOnce() {guess.value = guess.value.slice(0, -1)}
function AddNumber(e) {guess.value += e}

//------------------------All Event Listener's
toplama.addEventListener("click", function () {process("+")});
çikarma.addEventListener("click", function () {process("-")});
çarpma.addEventListener("click", function () {process("*")});
bölme.addEventListener("click", function () {process("/")});
mod.addEventListener("click", function () {process("%")});
karesi.addEventListener("click", function () {process("^")});
log.addEventListener("click", function () {process("log")});
/*
if (e === "_") {
    num1 = guess.value;
    console.log(`${num1} $ e === "_"`);
    result = Math.sqrt(Number(num1));
    guess.value = result;
    console.log(result);
    log_up = `²√${Number(num1)} =`;
    log_down = `²√${Number(num1)} = ${result}`;
    document.querySelector(".lastlog").textContent = log_up;
    document.querySelector(".lastguess").textContent = log_down; } */
clearalls.addEventListener("click", clearAll)
clearOnce.addEventListener("click", fclearOnce)
//Add Number's
zero.addEventListener("click", function () {AddNumber("0")});
one.addEventListener("click", function () {AddNumber("1")});
two.addEventListener("click", function () {AddNumber("2")});
three.addEventListener("click", function () {AddNumber("3")});
four.addEventListener("click", function () {AddNumber("4")});
five.addEventListener("click", function () {AddNumber("5")});
six.addEventListener("click", function () {AddNumber("6")});
seven.addEventListener("click", function () {AddNumber("7")});
eight.addEventListener("click", function () {AddNumber("8")});
nine.addEventListener("click", function () {AddNumber("9")});


sonuc.addEventListener("click", function () {
  num2 = guess.value;
  let result;

  function calculateResult(operator, precision) {
    switch (operator) {
      case "+":
        return (Number(num1) + Number(num2)).toFixed(precision);
      case "-":
        return (Number(num1) - Number(num2)).toFixed(precision);
      case "*":
        return (Number(num1) * Number(num2)).toFixed(precision);
      case "/":
        return (Number(num1) / Number(num2)).toFixed(precision);
      case "%":
        return (Number(num1) % Number(num2)).toFixed(precision);
      case "^":
        return Math.pow(Number(num1), Number(num2)).toFixed(2);
      case "log":
        return Math.log(Number(num1)).toFixed(2); 
      default:
        return null;
    }
  }

  if (num1.includes(".") || num2.includes(".")) {
    result = calculateResult(processor, 7);
    while (result.slice(-1) === "0") {
      result = result.slice(0, -1);
    }
  } else {
    result = calculateResult(processor, 0);
  }

  if (result !== null) {
    log_down = `${Number(num1)} ${processor} ${Number(num2)} = ${result}`;
    log_up = `${Number(num1)} ${processor} ${Number(num2)} =`;
  } else {
    guess.value = -1;
  }

  lastguess.textContent = log_down;
  guess.value = result;
  result = undefined;
});
