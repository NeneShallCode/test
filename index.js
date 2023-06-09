function search(event) {
  event.preventDefault();
  let city = document.querySelector("#searchCity").value;
  searchCity(city);
}
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let day = date.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let currentDay = days[day];
let formattedDate = `${currentDay}, ${hours}:${minutes}`;
let h3 = document.querySelector("h3");
h3.innerHTML = formattedDate;

function showTemp(response) {
  document.querySelector(".city").innerHTML = response.data.name;
  document.querySelector(".temp").innerHTML = Math.round(
    response.data.main.temp
  );
}
function searchCity(city) {
  let units = "metric";
  let apiKey = "514a1ffade9078bc9c2d40d114f61a0b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemp);
}
function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}
function searchLocate(position) {
  let apiKey = "514a1ffade9078bc9c2d40d114f61a0b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
let searchForm = document.querySelector(".searchEngine");
searchForm.addEventListener("submit", search);
