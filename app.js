console.log("Hello World!");

const myName = "Wing";
console.log(myName);

let age = 38;
console.log(age);

const lastName = "Chan";
console.log(lastName);

console.log(myName + " " + lastName);

let a = 2;
let b = 4;

let number = 10;
console.log(number);

let pennies = 50;
let pounds = 70;
let piggyBank = pennies + pounds;
console.log(piggyBank);

let fullName = `${myName} ${lastName}`;
console.log(fullName);
console.log(`${myName} is ${myName.length} characters long`);

const isTrue = true;
console.log(isTrue);
console.log(typeof myName);
console.log("The type of number is " + typeof pennies);
console.log(`The type of isTrue is ${typeof isTrue}`);

let otherName;
console.log(otherName);

let myAge = null;
console.log(myAge);

const movieRating = 15;
let customerAge = 10;

if (customerAge == 15 || customerAge > 15) {
  console.log("Let's watch Nosferatu!");
} else if (customerAge < 15) {
  console.log("Let's watch Mufasa instead!");
} else {
  console.log("Let's go have pizza!");
}
