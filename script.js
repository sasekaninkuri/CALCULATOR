// declare variables


// let age = 29
// let Name = "sasekani"
// let surname = "maluleke"
// let email = "sasekaninkuri560@gmail.com"

// console.log (age,Name,surname,email)

// let itsRainingNow =true


// if(itsRainingNow){
//     console.log("bring an umbrella and a rain coat")
// }else{
//     console.log("wear a hat or a t-shirt")
// }

// let itsColdToday =true

// if(itsColdToday) {
//     console.log("wear a jacket")
// }else{
//     console.log("wear a hat")
// }


// let Gender = "Female";

// if (Gender===  "male") {
//     console.log("hi Sir how can i help you")

// }else{
//     console.log("hi Ma'am how can i help you")
// }

// let bankAccountBalance= 2000

// if(bankAccountBalance>=2000){
//     console.log("you have money")
// }else{
//     console.log("you are broke")
// }


// let yourAge =18

// if(yourAge>=18){
//     console.log("you're old")
// }else{
//     console.log("you're too young")




// if you are 18 years and older and you have money, then you qualify to enter the club.


// let Age = 16
// let haveMoney = false
// if (Age & "money") {
//     console. log ("you qualify to enter the club")
// } else {
//     console. log ("still qualify to enter the club")

// }
// if (Age < 18) {
//     console. log("you cannot enter the club at all")
// }

    
// if you have a good credit score and you have capital, you qualify to but a house.

// let goodCreditScore=true
// let capital=true

// // if you have a good credit score and you have capital, you qualify to but a house.
// if(goodCreditScore&& capital){
//     console.log("good credit score and you have capital")

// }

// // if you have capital but not a good credit score, you need to build your credit score in order to qualify for a house

// else if(goodCreditScore && !capital ){
//     console.log("have capital but not a good credit score")

// }

// // if you have a good credit score but no capital, you need to save up for capital

// else if(goodCreditScore && !capital){
//     console.log("you do not have capital,you need to save up for capital ")




// // if you dont have capital and you have no credit score, you cannot buy a house at all
// else{
//     console.log("you cannot buy a house at all")
// }


document.getElementById("send").addEventListener("click",submit)

function submit (){

let name = document.getElementById("name").value;
let surname = document.getElementById("surname").value;
let email = document.getElementById("email").value;
let contact = document.getElementById("contact").value;
let address = document.getElementById("address").value;


console.log(name)
console.log(surname)
console.log(email)
console.log(contact)
console.log(address)

}
