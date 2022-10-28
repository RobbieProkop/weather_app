class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.dew = document.getElementById("w-dew");
    this.windchill = document.getElementById("w-windchill");
  }

  paint(weather) {
    this.location.textContent = weather.display_location.full;
  }
}
