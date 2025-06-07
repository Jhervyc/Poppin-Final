const popup = document.getElementById("popup");
const signInBox = document.getElementById("signInBox");
const signUpBox = document.getElementById("signUpBox");

document.getElementById("exploreBtn").addEventListener("click", () => {
  popup.style.display = "flex";
});

function togglePopup() {
  popup.style.display = "none";
}

function switchToSignUp() {
  signInBox.classList.add("hidden");
  signUpBox.classList.remove("hidden");
}

function switchToSignIn() {
  signUpBox.classList.add("hidden");
  signInBox.classList.remove("hidden");
}
