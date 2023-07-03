const kmInputElement = document.querySelector("[name='userkm']");
const userAgeInputElement = document.querySelector("[name='userage']");
const btnContinue = document.querySelector(".btn_continue");
const ticketPrice = 0.21 * parseInt(kmInputElement);
const priceInCent = ticketPrice.toFixed(2);
const couponChildren = (ticketPrice.toFixed(2)) * 0.2;
const couponElders = (ticketPrice.toFixed(2)) * 0.4;
const discountPriceChildren = (priceInCent - couponChildren).toFixed(2);
const discountPriceElders = (priceInCent - couponElders).toFixed(2); 

console.log(ticketPrice);
console.log(priceInCent);
console.log("couponChildren", couponChildren);
console.log("couponElders", couponElders);
console.log("discountPriceChildren", discountPriceChildren); 
console.log("discountPriceElders", discountPriceElders);

btnContinue.addEventListener("click", function () {
    
const userKm = kmInputElement.value;
const userAge = userAgeInputElement.value;

if (userAge < 18) {
    console.log("L'utente pagherà il prezzo intero scontato del 20%", discountPriceChildren );
} else if ( userAge >= 18 && userAge <= 65) {
    console.log("L'utente pagherà il prezzo intero", priceInCent);
} else {
    console.log("L'utente pagherà il prezzo intero scontato del 40%", discountPriceElders);    
}

})

