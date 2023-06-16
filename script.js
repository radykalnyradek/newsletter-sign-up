const emailInput = document.querySelector(".input-email");
const submitBtn = document.querySelector(".submit-btn");
const dismissBtn = document.querySelector(".dismiss-btn");
const successMessage = document.querySelector(".success-message");
const emailSpan = document.querySelector(".email-span");
const errorMessage = document.querySelector(".error-message");
const headerImage = document.querySelector(".header-image");

window.addEventListener("DOMContentLoaded", () => {
  successMessage.classList.remove("active");
  changeHeaderImage();
});

window.addEventListener("resize", (e) => {
  changeHeaderImage();
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (emailInput.value === "") {
    showError("Please enter your email");
  } else {
    validateEmail(emailInput.value);
  }
});

dismissBtn.addEventListener("click", () => {
  if (successMessage.classList.contains("active")) {
    successMessage.classList.remove("active");
  }
});

function showError(errText) {
  errorMessage.innerHTML = errText;
  emailInput.classList.add("active");
  errorMessage.classList.add("active");
}

function changeHeaderImage() {
  if (window.innerWidth > 1440) {
    headerImage.src = "assets/images/illustration-sign-up-desktop.svg";
  } else {
    headerImage.src = "assets/images/illustration-sign-up-mobile.svg";
  }
}

function validateEmail(email) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const result = regex.test(email);
  if (result) {
    console.log(result);
    successMessage.classList.add("active");
    emailSpan.innerHTML = email;
    emailInput.classList.remove("active");
    errorMessage.classList.remove("active");
  } else {
    showError("Valid email required");
  }
}
