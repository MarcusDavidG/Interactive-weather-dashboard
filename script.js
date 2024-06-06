document
  .getElementById("weather-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const city = document.getElementById("city-input").value;
    getWeather(city);
  });

function getWeather(city) {
  const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        updateWeatherInfo(data);
      } else {
        alert("City not found");
      }
    })
    .catch((error) => console.error("Error fetching weather data:", error));
}

function updateWeatherInfo(data) {
  document.getElementById("city-name").innerText = data.name;
  document
    .getElementById("temperature")
    .querySelector("span").innerText = `${data.main.temp} °C`;
  document
    .getElementById("humidity")
    .querySelector("span").innerText = `${data.main.humidity} %`;
  document
    .getElementById("wind-speed")
    .querySelector("span").innerText = `${data.wind.speed} m/s`;
  document
    .getElementById("weather-description")
    .querySelector("span").innerText = data.weather[0].description;
  document.getElementById(
    "weather-icon"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  document.getElementById("weather-info").classList.remove("hidden");
}
