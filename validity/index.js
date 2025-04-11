const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordEl = password.value;
console.log(passwordEl);
const emailError = document
  .querySelector("#email")
  .parentElement.querySelector("span.error");
console.log(emailError);
const pwError = document
  .querySelector("#password")
  .parentElement.querySelector("span.error");

/************************************************* */

function showError() {
  if (email.validity.typeMismatch) {
    // If it's not an email address,
    emailError.textContent = "Entered value needs to be an email address.";
    emailError.style.backgroundColor = "red";
  } else if (email.validity.valueMissing) {
    // If empty
    emailError.textContent = "You need to enter an email address.";
    emailError.style.backgroundColor = "pink";
  }
  // Add the `active` class
  emailError.className = "error active";

  if (password.validity.valueMissing) {
    pwError.textContent = "Enter password";
  } else {
    pwError.textContent = "";
  }
  pwError.className = "error active";
}

/*********************************** */
email.addEventListener("input", (e) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
});
/****************************************** */

form.addEventListener("submit", (e) => {
  if (!email.validity.valid) {
    showError();

    event.preventDefault();
  }
});

password.addEventListener("input", () => {
  if (password.value.validity.tooShort) {
    showError();
  }
});
