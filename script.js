"use strict";

const signUpForm = document.querySelector(".sign-up_form");
const emailInput = document.querySelector("#email");
const errorMessage = document.querySelector(".error-message");
const btn = document.querySelector(".btn");
const successMessage = document.querySelector(".success-message");
const dismissBtn = document.querySelector(".dismiss-btn");

btn.addEventListener("click", () => {
  console.log("Button clicked!");
  const isValidEmail = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

  if (emailInput.value.match(isValidEmail)) {
    // Check if the email value does not match the regex
    signUpForm.style.display = "none";
    successMessage.style.display = "block";
  } else {
    emailInput.style.borderColor = "red";
    emailInput.style.color = "red";
    errorMessage.style.display = "inline";
  }
});

dismissBtn.addEventListener("click", () => {
  successMessage.style.display = "none";
  signUpForm.style.display = "flex";
});
