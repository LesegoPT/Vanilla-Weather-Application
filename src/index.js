function displayWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  console.log(response.data);
  descriptionElement.innerHTML = response.data.weather[0].description;
  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = "c03face7caa58a9b7ffa9f52b7238a93";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&appid=${apiKey}&&units=metric`;
axios.get(apiUrl).then(displayWeather);
