// * * * 1-mashq * * * // input va button form ni ichida. 2-usul esa bundan mustasino //

var elForm = document.querySelector(".js-form");
var elInput = elForm.querySelector(".js-input");
var elSelect = document.querySelector(".js-select");
var elLetter = document.querySelector(".js-letter");
var button = document.querySelector(".js-button");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var inputValue = elInput.value;
  var selectValue = elSelect.value;

  if (inputValue && selectValue) {
    var result = inputValue * selectValue;
    elLetter.textContent = `Sum: ${result}`;
  } else {
    elLetter.textContent = "Sum kiritish yoki valyuta tanash majburiy";
  }
   // elForm.reset();
});





// 2-usul input va button form ichida emsa //

// var elConvertButton = document.querySelector(".js-button");
// var elInput = document.querySelector(".js-input");
// var elSelect = document.querySelector(".js-select");
// var elResult = document.querySelector(".js-letter");


// elConvertButton.addEventListener("click", function(evt){
//   evt.preventDefault();

//   var inputValue = elInput.value.trim();
//   var selectValue = elSelect.value.trim();

//   if(inputValue && selectValue){
//     var boxResult = inputValue * selectValue;
//     elResult.textContent = boxResult;
//   }else{
//     elResult.textContent = "Summanigizni kiritishingiz va valyuta tanlash majburiy";
//   }
// });