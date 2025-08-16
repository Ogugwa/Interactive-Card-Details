    // alert("JavaScript file is connected!");
// Targeting all the input fields
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


// Form validation for formats
// Selecting the form
const form = document.getElementById("basic-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid=true;
  });
  //Validate the form name to be text only
  CardholderName.addEventListener("input", (e) => {
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(e.target.value)) {
      alert("Please enter a valid name.");
    }
  });
  //Validate the form card number to be numbers only
  CardNumber.addEventListener("input", (e) => {
    const regex = /^[0-9\s]*$/;
    if (!regex.test(e.target.value)) {
      alert("Please enter a valid card number.");
    }
  });
  //Validate the form expiry date to be numbers only
  ExpiryMonth.addEventListener("input", (e) => {
    const regex = /^[0-9]*$/;
    if (!regex.test(e.target.value)) {
      alert("Please enter a valid expiry month.");
    }
  });
  ExpiryYear.addEventListener("input", (e) => {
    const regex = /^[0-9]*$/;
    if (!regex.test(e.target.value)) {
      alert("Please enter a valid expiry year.");
    }
  });
  //Validate the form CVC to be numbers only
  CVC.addEventListener("input", (e) => {
    const regex = /^[0-9]*$/;
    if (!regex.test(e.target.value)) {
      alert("Please enter a valid CVC.");
    }
  });