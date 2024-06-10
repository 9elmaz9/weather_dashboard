const cityInput = document.getElementById("city-input") as HTMLInputElement;
const searchButton = document.getElementById("search-button") as HTMLButtonElement;
const weatherResult = document.getElementById("weather-result") as HTMLDivElement;

searchButton.addEventListener("click", () => {
    const cityName = cityInput.value.trim();
    if (cityName !== "") {
        fetchWeather(cityName);
    }
});

async function fetchWeather(city: string) {
    const apiKey = '251126110a12ca931e37e79df0a8bba5';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(`Fetching weather for: ${city}`); // Для отладки
    console.log(`URL: ${url}`); // Для отладки

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found or API key issue");
        }
        const weatherData = await response.json();
        displayWeather(weatherData);
    } catch (error: any) {
        weatherResult.innerHTML = `<p>${error.message}</p>`;
        console.error(error); // Для отладки
    }
}

function displayWeather(data: any) {
    const { name, main, weather } = data;
    weatherResult.innerHTML = `
        <div class="weather-info">
            <h2>${name}</h2>
            <p>Temperature: ${main.temp} °C</p>
            <p>Weather: ${weather[0].description}</p>
        </div>
    `;
}
