const ipElement = document.getElementById("ip");
const locationElement = document.getElementById("location");
const weatherByIpElement = document.getElementById("weather-ip");
const weatherByLocationElement = document.getElementById("weather-location");

// Function to fetch and display data
async function fetchApiData() {
  try {
    // Step 1: Get public IP address
    const ipResponse = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipResponse.json();
    const ip = ipData.ip;
    ipElement.textContent = `Your IP: ${ip}`;

    // Step 2: Get location based on IP
    const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
    const locationData = await locationResponse.json();
    const { city, region, country_name, latitude, longitude } = locationData;
    locationElement.textContent = `Your Location: ${city}, ${region}, ${country_name}`;

    // Step 3: Get weather using city (OpenWeatherMap API via RapidAPI)
    // const weatherByCityResponse = await fetch(
    //   `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=imperial`,
    //   {
    //     headers: {
    //       "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
    //       "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
    //     },
    //   }
    // );
    // const weatherByCityData = await weatherByCityResponse.json();
    // weatherByIpElement.textContent = `Weather by City: ${weatherByCityData.weather[0].description}, ${weatherByCityData.main.temp}°F`;

    // // Step 4: Get weather using coordinates (WeatherAPI)
    // const weatherByLocationResponse = await fetch(
    //   `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${latitude},${longitude}`
    // );
    // const weatherByLocationData = await weatherByLocationResponse.json();
    // weatherByLocationElement.textContent = `Weather by Location: ${weatherByLocationData.current.condition.text}, ${weatherByLocationData.current.temp_c}°C`;
  } catch (error) {
    console.error("Error fetching API data:", error);
  }
}

// Trigger the API calls on page load
fetchApiData();
