var elInput = document.querySelector(".js-input");
var elPreButton = document.querySelector(".js-btn");
var elNextButton = document.querySelector(".js-button");
var elResult = document.querySelector(".js-result");
var elPreDelete = document.querySelector(".js-predelete");
var elNextDelete = document.querySelector(".js-nextdelete");

var cars = ["BMW", "MERS", "AUDI", "BYD"];
elResult.textContent = cars.join(" ");
console.log(cars);

elPreButton.addEventListener("click", function(evt) {
  var inputValue = elInput.value.trim().toUpperCase();
  var carsUnshift = cars.unshift(inputValue);
  elResult.textContent = carsUnshift;
  elResult.textContent = cars;
});

elNextButton.addEventListener("click", function (evt) {
  var inputNextValue = elInput.value.trim().toUpperCase();
  var carsPush = cars.push(inputNextValue);
  elResult.textContent = carsPush;
  elResult.textContent = cars;
});

// Pre va Next dan delete //
var inputDeleteValue = elInput.value;

elPreDelete.addEventListener("click", function(){
    var preDelete = cars.shift(inputDeleteValue);
    elResult.textContent = preDelete;
    elResult.textContent = cars;
  });
  
  elNextDelete.addEventListener("click", function () {
    var preDelete = cars.pop(inputDeleteValue);
    elResult.textContent = preDelete;
    elResult.textContent = cars;
  });











// 2-usul css ga etibor berilmagan lekin kod yaxshi chiqgan//

// const elForm = document.querySelector(".js-form");
// var elInput = document.querySelector(".js-input");
// var elPreButton = document.querySelector(".js-button");
// var elNextButton = document.querySelector(".js-btn");
// var elPreButtonDelete = document.querySelector(".js-delete__pre-button");
// var elNextButtonDelete = document.querySelector(".js-delete__next-button");
// var elRender = document.querySelector(".box");
// const elBtns = document.querySelectorAll(".js-form button");

// var cars = ["BMW", "MERS", "AUDI", "BYD"];

// const elList = document.querySelector(".js-list")
// let elTemplate = document.querySelector(".js-template").content
// const handleRenderList = (arr) => {
//     if(arr.length){
//         const documentFragment = document.createDocumentFragment()
//         elList.innerHTML = null
//         for(const word of arr){
//             const clone = elTemplate.cloneNode(true)
//             const elHeading = clone.querySelector("h3")
//             elHeading.textContent = word
//             documentFragment.appendChild(clone);
//         }   
//         elList.appendChild(documentFragment);
//     }
// }
// const handleClick = (evt) => {
//     console.log(evt.target.id)
//     switch(evt?.target?.id){
//         case "before":{
//             cars.unshift(elInput.value)
//         }break;
//         case "after":{
//             cars.push(elInput.value)
//         }break;
//         case "left":{
//             cars.shift()
//         }break;
//         case "right":{
//             cars.pop()
//         }break;
//         default: return false
//     }
//     handleRenderList(cars)
// }
// elBtns.forEach((item) => {
//     item.addEventListener("click", handleClick)
// })
// elForm.addEventListener("submit", function(evt){
   
//     evt.preventDefault()
//     var inputValue = elInput.value;

// });
// handleRenderList(cars);