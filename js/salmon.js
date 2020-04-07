//google fonts code//

WebFont.load({ google: { families: ['Trade Winds', 'Roboto'] } });


// Menu nav bar//
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

//Cotacachi Info sun set, sun out//

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
      var result = JSON.parse(this.responseText);

      document.getElementById("demo").innerHTML = " Sunrise "　+ " at " + result.results.sunrise + " <br> " + " Sunset " + " at " + result.results.sunset;
    }
  };
  xhttp.open("GET", "https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400", true);
  xhttp.send();
}

//Ajax temperatura//

const inconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

const weather = {};

weather.temperature = {
    unit : "celsius"
}

const KELVIN = 273;
const key = "aee52151b6cc7c7556030fdb68db7347";

if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);

}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";

}

function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}

function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;

}

function getWeather(latitude, longitude){
    let api = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=aee52151b6cc7c7556030fdb68db7347";
    
    //`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;//


fetch(api)
.then(function(response){
    let data = response.json();
    return data;
})
.then(function(data){
    weather.temperature.value = Math.floor(data.main.temp - KELVIN);
    weather.description = data.weather[0].description;
    weather.iconId = data.weather[0].icon;
    weather.city = data.name;
    weather.country = data.sys.country;

})
.then(function(){
    displayWeather();
});
}
function displayWeather(){
    inconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;

}
