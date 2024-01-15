var userName = prompt("Ismingizni kriting").trim();
var userSourName = prompt("Familiyangizni kriting").trim();
var userAge = Number(prompt("Yoshingizni kriting"));
var userEmail = prompt("Emailingizni kriting").trim();
var userPhoneNumber = Number(prompt("Telefon nomeringizni kriting"));
var userSum = Number(Math.abs(prompt("Sizni necha yuz dollor bor")));
var DOLLOR_UZS = 12400;``
var sum = userSum * DOLLOR_UZS;

console.log(`Name: ${userName}
Sourname: ${userSourName}
Age: ${userAge}
Email: ${userEmail}
Phone: ${userPhoneNumber}
Sizning UZB somingiz: ${sum}`);