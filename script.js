// 1-Task // birinchi harf kotta yoki kichik ekanligni aniqlash //

var elForm = document.querySelector(".js-form");
var elInput = elForm.querySelector(".js-input");
var elResult = document.querySelector(".js-result");

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();

  var inputValue = elInput.value.trim();
if(inputValue == ""){
  elResult.textContent= "harf kiritishingiz shart";
}else if(inputValue[0] == inputValue[0].toUpperCase()){
    elResult.textContent = "birinchi harf kotta!";
  }else{
    elResult.textContent = "birinchi harf kichik!";
  }
});



// 2-Task // birinchi va oxirgi harf bir-biriga oxshash yoki oxhsash emasligini topish // 

// var elForm = document.querySelector(".js-form");
// var elInput = elForm.querySelector(".js-input");
// var elResult = document.querySelector(".js-result");

// elForm.addEventListener("submit", function(evt) {
//   evt.preventDefault();

//   var inputValue = elInput.value.trim();

//   if(inputValue[0] == inputValue[inputValue.length -1]){
//     elResult.textContent = "BINGOO !!!";
//   }else{
//     elResult.textContent = "Birinchi va oxirgi harf xar-xil!";
//   }

// });



// 3-Task // birinchi son kotta bolsa kichikga kichik bolsa kottaga o'zgartirish ToUpperCase(), ToLowerCase() foydalanib.

// var elForm = document.querySelector(".js-form");
// var elInput = elForm.querySelector(".js-input");
// var elResult = document.querySelector(".js-result");
// var newText = "";

// elForm.addEventListener("submit", function(evt) {
//   evt.preventDefault();
//    var inputValue = elInput.value.trim();

//    if(inputValue[0] == inputValue[0].toUpperCase()){
//     newText = inputValue[0].toLowerCase() + inputValue.slice(1, inputValue.length);
//    }else if(inputValue[0] == inputValue[0].toLowerCase()){
//     newText = inputValue[0].toUpperCase() + inputValue.slice(1, inputValue.length);
//    }
//    elResult.textContent = newText
// });



// 4-Task // uch marotaba son kritiladi va o'sha sonlardan o'rtanchasini topish.

// var oneNumber = prompt("birinchi son  kriting");
// var twoNumber = prompt("ikkinchi son kriting");
// var threeNumber = prompt("uchunchi son kriting");

// if(oneNumber > twoNumber && oneNumber < threeNumber || oneNumber < twoNumber && oneNumber > threeNumber){
//   console.log(oneNumber);
// }else if(twoNumber > oneNumber && twoNumber < threeNumber || twoNumber < oneNumber && twoNumber > threeNumber){
//   console.log(twoNumber);
// }else if(threeNumber > oneNumber && threeNumber < twoNumber || threeNumber < oneNumber && threeNumber > twoNumber){
//   console.log(threeNumber)
// }else{
//   console.log("xato!");
// }