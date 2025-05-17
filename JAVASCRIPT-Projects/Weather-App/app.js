let city = document.querySelector("#city");
let SearchBtn = document.querySelector("#Searchbtn");
let inputBox = document.querySelector("#city");
let temperature = document.querySelector(".temperature");
let description = document.querySelector(".description");
let cityName = document.querySelector("#cityName");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
let weatherImg = document.querySelector("#weather-img")




//  ---checkweather function-----

async function checkweather(city) {
  const apikey = "Paste Your Apikey";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  const weatherdata = await fetch(`${url}`).then((response) => response.json());
  console.log(weatherdata);

  if (weatherdata.cod === 200) {
    temperature.innerHTML = `${Math.round(
      weatherdata.main.temp - 273.15
    )} <sup>°C</sup>`;
    description.innerHTML = `${weatherdata.weather[0].description}`;
    cityName.innerHTML = `${weatherdata.name} ${weatherdata.sys.country}`;
    humidity.innerHTML = `<strong>humidity:</strong> ${weatherdata.main.humidity} %`;
    wind.innerHTML = `<strong>Wind:</strong> ${weatherdata.wind.speed} m/s`;
    switch (weatherdata.weather[0].main) {
        case `Clouds`:
            weatherImg.src = "assets/cloud.png";
            break;
        case `Clear`:
            weatherImg.src = "assets/clear.png";
            break;
        case `Rain`:
            weatherImg.src = "assets/rain.png";
            break;
        case `Mist`:
            weatherImg.src = "assets/mist.png";
            break;
        case `Snow`:
            weatherImg.src = "assets/snow.png";
            break;
    }
  } else {
    cityName.textContent = "Sorry, Location not found!!!";
     weatherImg.src = "assets/404.png";
            temperature.innerHTML =
              description.innerHTML =
              humidity.innerHTML =
              wind.innerHTML =
                "";
  }
}


SearchBtn.addEventListener("click", () => {
  checkweather(inputBox.value);
});
