function updateTime() {
  let buenosAiresCity = document.querySelector("#buenos-aires");
  if (buenosAiresCity) {
    let buenosAiresDate = buenosAiresCity.querySelector(".date");
    let buenosAiresTime = buenosAiresCity.querySelector(".time");
    let buenosAiresCurrentTime = moment().tz("America/Argentina/Buenos_Aires");

    buenosAiresDate.innerHTML = moment().format("MMMM Do YYYY");
    buenosAiresTime.innerHTML = buenosAiresCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let romeCity = document.querySelector("#rome");
  if (romeCity) {
    let romeDate = romeCity.querySelector(".date");
    let romeTime = romeCity.querySelector(".time");
    let romeCurrentTime = moment().tz("Europe/Rome");

    romeDate.innerHTML = moment().format("MMMM Do YYYY");
    romeTime.innerHTML = romeCurrentTime.format("h:mm:ss [<small>]A[</small>]");
  }

  let dubaiCity = document.querySelector("#dubai");
  if (dubaiCity) {
    let dubaiDate = dubaiCity.querySelector(".date");
    let dubaiTime = dubaiCity.querySelector(".time");
    let dubaiCurrentTime = moment().tz("Asia/Dubai");

    dubaiDate.innerHTML = moment().format("MMMM Do YYYY");
    dubaiTime.innerHTML = dubaiCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updatecity(event) {
  let cityTimeZone = event.target.value;
  let cityId = "";
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  if (cityName === "Argentina") {
    cityName = "Buenos Aires";
    cityId = "buenos-aires";
  }
  if (cityName === "Rome") {
    cityId = "rome";
  }
  if (cityName === "Dubai") {
    cityId = "dubai";
  }

  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city" id=${cityId}>
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")} </small></div>
        </div>
        <a href="/">All cities</a>
        `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updatecity);
