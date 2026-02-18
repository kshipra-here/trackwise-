const signupForm = document.querySelector(".signup");
const loginForm = document.querySelector(".login");

function showLogin() {
  signupForm.classList.remove("active");
  loginForm.classList.add("active");
}

function showSignup() {
  loginForm.classList.remove("active");
  signupForm.classList.add("active");
}

function goHome() {
  window.location.href = "homepage.html";
}
