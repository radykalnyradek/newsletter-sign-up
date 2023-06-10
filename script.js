const regex = new RegExp(
  "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
  "g"
);

const emailInput = document.querySelector(".input-email");
const submitBtn = document.querySelector(".submit-btn");
const dismissBtn = document.querySelector(".dismiss-btn");
const successMessage = document.querySelector(".success-message");
const emailSpan = document.querySelector(".email-span");

window.addEventListener("DOMContentLoaded", () => {
  successMessage.classList.remove("active");
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (regex.test(emailInput.value)) {
    successMessage.classList.add("active");
    emailSpan.innerHTML = emailInput.value;
  } else {
  }
});

dismissBtn.addEventListener("click", () => {
  if (successMessage.classList.contains("active")) {
    successMessage.classList.remove("active");
  }
});
