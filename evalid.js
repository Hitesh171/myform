// get references to all form inputs
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const genderInputs = document.querySelectorAll("input[name='gender']");
const languageInput = document.getElementById("Language");
const cityInput = document.getElementById("city");
const emailInput = document.getElementById("email");
const mobileInput = document.getElementById("mobile");

// add event listeners for input focus
firstNameInput.addEventListener("focus", () => {
  firstNameInput.classList.remove("error");
  document.getElementById("first-name-error").classList.add("hide");
});

lastNameInput.addEventListener("focus", () => {
  lastNameInput.classList.remove("error");
  document.getElementById("last-name-error").classList.add("hide");
});

genderInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    genderInputs.forEach((input) => input.classList.remove("error"));
  });
});

languageInput.addEventListener("focus", () => {
  languageInput.classList.remove("error");
});

cityInput.addEventListener("focus", () => {
  cityInput.classList.remove("error");
});

emailInput.addEventListener("focus", () => {
  emailInput.classList.remove("error");
  document.getElementById("email-error").classList.add("hide");
});

mobileInput.addEventListener("focus", () => {
  mobileInput.classList.remove("error");
  document.getElementById("mobile-error").classList.add("hide");
});

// add event listeners for input blur
firstNameInput.addEventListener("blur", () => {
  if (!firstNameInput.value) {
    firstNameInput.classList.add("error");
    document.getElementById("first-name-error").classList.remove("hide");
  }
});

lastNameInput.addEventListener("blur", () => {
  if (!lastNameInput.value) {
    lastNameInput.classList.add("error");
    document.getElementById("last-name-error").classList.remove("hide");
  }
});

genderInputs.forEach((input) => {
  input.addEventListener("blur", () => {
    if (!document.querySelector("input[name='gender']:checked")) {
      genderInputs.forEach((input) => input.classList.add("error"));
    }
  });
});

languageInput.addEventListener("blur", () => {
  if (!languageInput.value) {
    languageInput.classList.add("error");
  }
});

cityInput.addEventListener("blur", () => {
  if (!cityInput.value) {
    cityInput.classList.add("error");
  }
});
emailInput.addEventListener("blur", validateEmail);

mobileInput.addEventListener("blur", validateMobile);

function validateEmail() {
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === '') {
    showError(emailInput, 'Please enter your email address');
  } else if (!emailRegex.test(emailValue)) {
    showError(emailInput, 'Please enter a valid email address');
  } else {
    hideError(emailInput);
  }
}

function validateMobile() {
  const mobileValue = mobileInput.value.trim();
  const mobileRegex = /^[0-9]{10}$/;

  if (mobileValue === '') {
    showError(mobileInput, 'Please enter your mobile number');
  } else if (!mobileRegex.test(mobileValue)) {
    showError(mobileInput, 'Please enter a valid mobile number');
  } else {
    hideError(mobileInput);
  }
}

