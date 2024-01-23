
// SINF ISHI //

// 1-Task // arr dagi hamma stringlarni qo'shib qaytarish //

// const fruits = ["banan", "kivi", "ananas"];
// let count = 0;
// for (const fruit of fruits) {
//   count += fruit.length;
// }
// console.log(count);



// 2-Task // agar prompt dan kiritilgan malumod da "hi", yoki "hello" so'zi ishtirok etgan bo'lsa "assalomu aleykum" so'zi qaytarsin //

// const userLetter = prompt("so'z kriting");
// if(userLetter.toLowerCase().includes("hi") || userLetter.toLowerCase().includes("hello")){
//     console.log("asslomu aleykum");
// }else{
//     console.log("xato");
// }



// 3-task // eng kotta length ni qaytarish //

// const cars = ["BMW", "MERS", "AUDI", "CHEVROLET"];
// let count = "";
// for(const car of cars){
//     if(car.length > count.length){
//         count = car;
//     }
// }
// console.log(count);



// 4-Task // birinchi sonni oxiridagi songa qo'shib qaytarish //

// const maxNumber = [1, 34, 553, 12, 52, 776,];
// const result = maxNumber[0] + maxNumber[maxNumber.length -1];
// console.log(result);



// 5-Task // max hariflarni nechtaligini topish toUpperCase() foydalanib // 

// const maxWords = prompt("so'z kriting");
// let wordsArr = maxWords.split("");
// let count = 0;
// for(const Words of wordsArr){
//     if(Words == Words.toUpperCase()){
//         count++
//     }
// }
// console.log(count);




// UY ISHI //
    
// 1-Task //

const elForm = document.querySelector(".js-form");
const elInput = elForm.querySelector(".js-input");
const elResult = document.querySelector(".js-result");

function wordFind() {  
    elForm.addEventListener("submit", function(evt) {
        evt.preventDefault();
        const inputValue = elInput.value.toUpperCase().trim().split("");
        let count = 0;
        const resInpValue = inputValue[inputValue.length -1];
        for(const iterator of inputValue){
            if(iterator === resInpValue){
                count++
            }
            elResult.textContent = `o'shash harf: ${count}`;
        }
    }); 

}
wordFind();



// 2-Task //

// undefined ??? //


// 3-task //

// const handlWord = (arr) => {
//     let result = "";
//     for(let  i = 0; i<arr.length; i++){
//         for(let si = 0; si <arr[i].length; si++){
//             if(si === 0 || si === arr[i].length-1){
//                 result += arr[i][si].toUpperCase()
//             }else{
//                 result += arr[i][si]
//             }
//         }
//     }
//     return result
// }
// let result = handlWord(["banan"]);
// console.log(result);
