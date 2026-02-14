// Splash screen delay
window.onload = function() {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("welcome").style.display = "block";
  }, 10000); // 10 seconds
};

function showRegister() {
  document.getElementById("registerBox").style.display = "block";
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("welcome").style.display = "none";
}

function showLogin() {
  document.getElementById("loginBox").style.display = "block";
  document.getElementById("registerBox").style.display = "none";
  document.getElementById("welcome").style.display = "none";
}

function register() {
  let newUsername = document.getElementById("newUsername").value;
  let newPassword = document.getElementById("newPassword").value;

  if (newUsername && newPassword) {
    localStorage.setItem("username", newUsername);
    localStorage.setItem("password", newPassword);
    alert("Registration successful!");
    window.location.href = "founder.html";
  } else {
    alert("Please enter both a username and password.");
  }
}

function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let storedUser = localStorage.getItem("username");
  let storedPass = localStorage.getItem("password");

  if (username === storedUser && password === storedPass) {
    window.location.href = "founder.html";
  } else {
    alert("Invalid login. Please try again or register.");
  }
}
