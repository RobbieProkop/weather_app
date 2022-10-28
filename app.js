//initialize weather class
const weather = new Weather("Boston", "MA");

// get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log("results :>> ", results);
    })
    .catch((err) => console.log("err :>> ", err));
}
