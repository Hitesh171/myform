// get references to all form inputs
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const genderInputs = document.querySelectorAll("input[name='gender']");
const languageInput = document.getElementById("Language");
const cityInput = document.getElementById("city");


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
// Email validation function using regex
function validateEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}

// Mobile number validation function using regex
function validateMobile(mobile) {
  const regex = /^\d{10}$/;
  return regex.test(mobile);
}

// Get email and mobile input elements
const emailInput = document.getElementById("email");
const mobileInput = document.getElementById("mobile");

// Add event listeners for email input
emailInput.onfocus = function() {
  emailInput.classList.remove("error");
  document.getElementById("email-error").classList.add("hide");
}

emailInput.onblur = function() {
  const email = emailInput.value.trim();
  if (!email) {
    emailInput.classList.add("error");
    document.getElementById("email-error").classList.remove("hide");
  } else if (!validateEmail(email)) {
    emailInput.classList.add("error");
    document.getElementById("email-error").classList.remove("hide");
  }
}

// Add event listeners for mobile input
mobileInput.onfocus = function() {
  mobileInput.classList.remove("error");
  document.getElementById("mobile-error").classList.add("hide");
}

mobileInput.onblur = function() {
  const mobile = mobileInput.value.trim();
  if (!mobile) {
    mobileInput.classList.add("error");
    document.getElementById("mobile-error").classList.remove("hide");
  } else if (!validateMobile(mobile)) {
    mobileInput.classList.add("error");
    document.getElementById("mobile-error").classList.remove("hide");
  }
}
