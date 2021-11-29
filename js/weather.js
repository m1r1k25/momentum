const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherError = document.querySelector('.weather-error')

async function getWeather() {
   let lang = select.value;
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=6d8c67fee05c48b1c598daff1665dbff&units=metric`;
   const res = await fetch(url);
   if (res.status === 200 && lang === "en") {
      const data = await res.json();
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
      weatherDescription.textContent = data.weather[0].description;
      wind.textContent = `Wind speed: ${data.wind.speed.toFixed(0)} m/s`;
      humidity.textContent = `Humidity: ${data.main.humidity.toFixed(0)}%`;
   } else if (res.status === 200 && lang === "ru") {
      const data = await res.json();
      weatherIcon.className = 'weather-icon owf';
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
      weatherDescription.textContent = data.weather[0].description;
      wind.textContent = `Скорость ветра: ${data.wind.speed.toFixed(0)} м/с`;
      humidity.textContent = `Влажность ${data.main.humidity.toFixed(0)}%`;
   } else {
      weatherError.textContent = `Error! city not found for '${city.value}'!`;
      weatherIcon.classList.add("none");
      temperature.classList.add("none");
      weatherDescription.classList.add("none");
      wind.classList.add("none");
      humidity.classList.add("none");
   }
}

getWeather();
city.addEventListener('change', getWeather);

function setLocalStorage() {
   localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
   if(localStorage.getItem('city')) {
   city.value = localStorage.getItem('city');
   getWeather();
   }
}
window.addEventListener('load', getLocalStorage);

select.addEventListener('change', getWeather);
