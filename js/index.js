const formEl = document.querySelector("form");
// console.log(formEl);

const inputEl = document.querySelectorAll("input");
console.log(inputEl);

function isValidInput(input) {
  if (input.type === "email" && input.value) {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailPattern.test(input.value)) {
      return true;
    }
  }
}

inputEl.forEach((input) => {
  let valid = false;
  valid = isValidInput(input);
});
