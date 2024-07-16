// coded by neext.fun

const dataimg = document.getElementById("dataimg");
const tempctn = document.getElementById("tempid");
const loactionctn = document.getElementById("locationid");
const humidityctn = document.getElementById("humidityid");
const windspeedctn = document.getElementById("windid");

const userinput = prompt("Enter Loaction:");

async function app() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${userinput}&APPID=` // add here your token.
  );
  const data = await response.json();

  if (data.weather[0].main === "Clouds") {
    dataimg.src = `/images/clouds.png`;
  }

  if (data.weather[0].main === "Clear") {
    dataimg.src = `/images/clear.png`;
  }

  if (data.weather[0].main === "Drizzle") {
    dataimg.src = `/images/drizzle.png`;
  }

  if (data.weather[0].main === "Humidity") {
    dataimg.src = `/images/humidity.png`;
  }
  if (data.weather[0].main === "Mist") {
    dataimg.src = `/images/mist.png`;
  }
  if (data.weather[0].main === "Rain") {
    dataimg.src = `/images/rain.png`;
  }
  if (data.weather[0].main === "Search") {
    dataimg.src = `/images/search.png`;
  }
  if (data.weather[0].main === "Snow") {
    dataimg.src = `/images/snow.png`;
  }
  if (data.weather[0].main === "Wind") {
    dataimg.src = `/images/wind.png`;
  }

  let weather = data.main.temp;
  tempctn.innerHTML = `${Math.round(weather) / 10}°C`;

  if (data.name) {
    let location = data.name;
    loactionctn.innerHTML = `${location}`;
  } else {
    loactionctn.innerHTML = `Invalid Location.`;
  }

  if(data.main)
    {
        let humidity = data.main.humidity;
        humidityctn.innerHTML = `${humidity}%`;
    }

    if(data.wind)
        {
            let wind = data.wind.speed;
            windspeedctn.innerHTML = `${Math.round(wind)} m/s`;
        }
    
}

app();
setInterval(app, 1000);
