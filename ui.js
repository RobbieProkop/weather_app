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
    this.sunUp = document.getElementById("w-sunUp");
    this.sunDown = document.getElementById("w-sunDown");
  }

  paint(weather) {
    const f = weather.currentConditions.temp;
    const windF = weather.currentConditions.windchill;

    const toC = (x) => {
      return ((5 / 9) * (x - 32)).toFixed(1);
    };
    this.location.textContent = weather.address;
    this.desc.textContent = weather.currentConditions.icon;
    this.string.textContent = `${f} F (${toC(f)} C)`;

    // this.icon.setAttribute('src', ) = weather.currentConditions.temp;
    this.humidity.textContent = `Relative Humidity: ${weather.currentConditions.humidity}%`;
    this.dew.textContent = `Dew Point: ${
      weather.currentConditions.dew
    } F (${toC(weather.currentConditions.dew)} C)`;
    this.windchill.textContent = `Windchill: ${windF} F (${toC(windF)} C)`;
    this.sunUp.textContent = new Date();
  }
}
