// * * * 1-mashq * * * //

var FizzBuzzTask = Number(Math.abs(prompt("Son kriting")));

if(FizzBuzzTask == ""){
    console.log("Son kritishingiz majburiy");
}else if (FizzBuzzTask % 3 == 0 && FizzBuzzTask % 5 == 0) {
  console.log("FizzBUZZ");
} else if (FizzBuzzTask % 3 == 0) {
  console.log("Fizz");
} else if (FizzBuzzTask % 5 == 0) {
  console.log("Buzz");
} else {
  console.log(`${FizzBuzzTask} Kritilgan raqam 3 ga ham 5 ga ham bo'linmaydi`);
}



// * * * 2-mashq * * * //

// var rundemNumber = Math.round(Math.random() * 5);
// var userNumber = Number(Math.abs(Math.round(prompt("son kriting"))));

// console.log(`random number: ${rundemNumber}`);

// if(userNumber == ""){
//     console.log("son kiritishingiz majburiy");
// }else if(rundemNumber == userNumber){
//     console.log(`topdingiz siz kiritgan son: ${userNumber} random number bilan bir xil.`);
// }else{
//     console.log(`!topolmadingiz siz kiritgan son ${userNumber} random number bilan bir xil emas.`);
// }