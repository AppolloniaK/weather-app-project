function formatDate(timestamp) {
let date = new Date(timestamp);
let hours = date.getHours();
let minutes = date.getMinutes();
let day = date.getDate();
return = `${day} ${hours}:${minutes}`;
}

function displayTemp(response) {
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
let humidityElement = document.querySelector("#humidity");
let speedElement = document.querySelector("#speed");
let dateElement = document.quertSelector("#date");


console.log(response.data);
temperatureElement.innerHTML = Math.round(response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = Math.round(response.data.main.humidity);
speedElement.innerHTML = Math.round(response.data.wind.speed);
dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "50cfd6595523a7f69104e698dea7cff4";
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=new york&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemp);