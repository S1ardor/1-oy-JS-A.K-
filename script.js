// * * * 1-mashq * * * //
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
  //   elForm.reset();
});