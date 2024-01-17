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



// * * * 2-mashq * * * //

// var elResult = document.querySelector(".js-result");

// var userName = prompt("Ismingizni kriting").trim();
// var userSourName = prompt("Familiyangizni kriting").trim();
// var userAge = prompt("Yoshingizni kriting");
// var userEmail = prompt("Emailingizni kriting").trim();
// var userPhoneNumber = prompt("Telefon nomeringizni kriting");
// var userSum = prompt("Sizni necha yuz dollor bor");
// var DOLLOR_UZS = 12400;
// var result = Number(Math.abs(userSum)) * DOLLOR_UZS;

// elResult.textContent = userName + " " + userSourName + " " + userAge + " " + userEmail + " " + userPhoneNumber + " " + result;


