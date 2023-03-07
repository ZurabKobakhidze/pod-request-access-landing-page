const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error");

function validateEmail() {
  if (emailInput.value.includes("@" && ".")) {
    errorMessage.className = "error_none";
  } else {
    errorMessage.className = "error";
  }
}
