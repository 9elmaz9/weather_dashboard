"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");
const weatherResult = document.getElementById("weather-result");
searchButton.addEventListener("click", () => {
    const cityName = cityInput.value.trim();
    if (cityName !== "") {
        fetchWeather(cityName);
    }
});
function fetchWeather(city) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiKey = '251126110a12ca931e37e79df0a8bba5';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        console.log(`Fetching weather for: ${city}`); // Для отладки
        console.log(`URL: ${url}`); // Для отладки
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error("City not found or API key issue");
            }
            const weatherData = yield response.json();
            displayWeather(weatherData);
        }
        catch (error) {
            weatherResult.innerHTML = `<p>${error.message}</p>`;
            console.error(error); // Для отладки
        }
    });
}
function displayWeather(data) {
    const { name, main, weather } = data;
    weatherResult.innerHTML = `
        <div class="weather-info">
            <h2>${name}</h2>
            <p>Temperature: ${main.temp} °C</p>
            <p>Weather: ${weather[0].description}</p>
        </div>
    `;
}
