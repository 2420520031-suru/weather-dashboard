const API_KEY = "5f4c3c6676a99d52de316fd04660fda5";

const cityInput = document.getElementById("city");
const searchBtn = document.getElementById("searchBtn");
const weatherCard = document.getElementById("weatherCard");

async function getWeather(city){

try{

weatherCard.innerHTML="<h2>Loading...</h2>";

const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

if(!response.ok){

throw new Error("City not found");

}

const data=await response.json();

weatherCard.innerHTML=`

<h2>${data.name}, ${data.sys.country}</h2>

<p>🌡 <strong>Temperature:</strong> ${data.main.temp} °C</p>

<p>🤗 <strong>Feels Like:</strong> ${data.main.feels_like} °C</p>

<p>💧 <strong>Humidity:</strong> ${data.main.humidity}%</p>

<p>💨 <strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>

<p>🌥 <strong>Weather:</strong> ${data.weather[0].main}</p>

<p>📝 <strong>Description:</strong> ${data.weather[0].description}</p>

<p>📊 <strong>Pressure:</strong> ${data.main.pressure} hPa</p>

`;

}

catch(error){

weatherCard.innerHTML=`

<h2>Error</h2>

<p style="color:red;">
${error.message}
</p>

`;

}

}

searchBtn.addEventListener("click",()=>{

const city=cityInput.value.trim();

if(city!==""){

getWeather(city);

}

});

cityInput.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

searchBtn.click();

}

});