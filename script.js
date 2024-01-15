var userName = prompt("Ismingizni kriting").trim();
var userSourName = prompt("Familiyangizni kriting").trim();
var userAge = (prompt("Yoshingizni kriting"));
var userEmail = prompt("Emailingizni kriting").trim();
var userPhoneNumber = (prompt("Telefon nomeringizni kriting"));
var userSum = prompt("Sizni necha yuz dollor bor");
var DOLLOR_UZS = 12400;
var result = Number(Math.abs(userSum)) * DOLLOR_UZS;

console.log(`Name: ${userName}
Sourname: ${userSourName}
Age: ${userAge}
Email: ${userEmail}
Phone: ${userPhoneNumber}
Sizning UZB somingiz: ${result}`);