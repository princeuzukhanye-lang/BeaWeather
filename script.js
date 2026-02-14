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

// =======================
// Weather App Function
// =======================
async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("weatherResult").innerHTML =
        `<h2>${data.name}</h2>
         <p>Temperature: ${data.main.temp} °C</p>
         <p>Condition: ${data.weather[0].description}</p>`;
    } else {
      document.getElementById("weatherResult").innerHTML = "City not found.";
    }
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = "Error fetching weather.";
  }
}
