//initialize weather class
const weather = new Weather("Boston", "MA");
//init ui
const ui = new UI();
// get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log("results :>> ", results);
      ui.paint(results);
    })
    .catch((err) => console.log("err :>> ", err));
}
