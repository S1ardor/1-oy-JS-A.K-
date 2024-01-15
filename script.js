// * * * 1-mashq * * * //
var elResult = document.querySelector(".js-result");

var FizzBuzzTask = Number(Math.abs(prompt("Son kriting")));
if(FizzBuzzTask == ""){
    elResult.textContent = "Son kritishingiz majburiy";
}else if (FizzBuzzTask % 3 == 0 && FizzBuzzTask % 5 == 0) {
  elResult.textContent = `FizzBuzz: ${FizzBuzzTask}`;
} else if (FizzBuzzTask % 3 == 0) {
  elResult.textContent = `Fizz: ${FizzBuzzTask}`;
} else if (FizzBuzzTask % 5 == 0) {
  elResult.textContent = `Buzz: ${FizzBuzzTask}`;
} else {
  elResult.textContent = `${FizzBuzzTask} Kritilgan raqam 3 ga ham 5 ga ham bo'linmaydi`;
}