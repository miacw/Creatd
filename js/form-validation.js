let nameField = document.getElementById("form-name");
let nameError = document.querySelector("#name-message");

function validateForm() {
  if (nameField.value == "") {
    nameError.classList.remove("hidden");
  }
}
