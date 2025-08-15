    // alert("JavaScript file is connected!");
// Targeting all the input fields
document.addEventListener("DOMContentLoaded", () => {
const CardholderName = document.getElementById("cardholder-name");
const CardNumber = document.getElementById("card-number");
const ExpiryMonth = document.getElementById("expiry-month");
const ExpiryYear = document.getElementById("expiry-year");
const CVC = document.getElementById("cvc");


// Targeting the respective fields in the card preview
const CardholderNamePreview = document.getElementById("card-front-name");
const CardNumberPreview = document.getElementById("front-card-number");
const ExpiryMonthPreview = document.getElementById("card-front-expiry-month");
const ExpiryYearPreview = document.getElementById("card-front-expiry-year");
const CVCPreview = document.getElementById("card-back-cvc");

// Add event listeners to the form 
CardholderName.addEventListener("input", (e) => {
  CardholderNamePreview.value = e.target.value || 'JANE APPLESEED';
});
CardNumber.addEventListener("input", (e) => {
  CardNumberPreview.value = e.target.value || '0000 0000 0000 0000';
});
ExpiryMonth.addEventListener("input", (e) => {
  ExpiryMonthPreview.value = e.target.value || '00';
});
ExpiryYear.addEventListener("input", (e) => {
  ExpiryYearPreview.value = e.target.value || '00';
});
CVC.addEventListener("input", (e) => {
  CVCPreview.value = e.target.value || '000';
});
});