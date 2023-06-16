const regex = new RegExp(
  "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$",
  "g"
);

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
  } else if (regex.test(emailInput.value)) {
    successMessage.classList.add("active");
    emailSpan.innerHTML = emailInput.value;

    emailInput.classList.remove("active");
    errorMessage.classList.remove("active");
  } else {
    showError("Valid email required");
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
