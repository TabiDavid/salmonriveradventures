//google fonts code//

WebFont.load({ google: { families: ['Trade Winds', 'Roboto'] } });


// Menu nav bar//
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);


//Days forcast//

const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=aee52151b6cc7c7556030fdb68db7347";
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject2) => {
    

    let fivedayforecast = [];
    let day = 1;
    let weekday = [];
    var days = new Array('Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat');

    for (let i = 0; i < jsObject2.list.length && day < 6; i++) {
      if (jsObject2.list[i].dt_txt.includes("18:00:00")) {
        fivedayforecast[i] = jsObject2.list[i].main.temp;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject2.list[i].weather[0].icon + '.png';
        const desc = jsObject2.list[i].weather[0].description; 

        let now = new Date(jsObject2.list[i].dt_txt);
        weekday = days[now.getDay()];
        document.getElementById("day" + day).innerHTML = weekday;
        document.getElementById("forecast" + day).innerHTML = fivedayforecast[i] + "&deg; F";
        document.getElementById("icon" + day).setAttribute("src", imagesrc); 
        document.getElementById("icon" + day).setAttribute("alt", desc);
        day++;
      }
    }
  });

  const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })  
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Preston") {
        let eventul = document.createElement('ul');
        let eventdiv = document.createElement('div');
        for (let cont = 0; cont < towns[i].events.length; cont++) {
          let list = document.createElement('li');
          
          list.setAttribute('class', 'eventlist');
          list.textContent = towns[i].events[cont];
          eventul.appendChild(list);
        }

        eventdiv.appendChild(eventul);
        document.querySelector('div.eventdiv').appendChild(eventdiv);
      }
    }
});