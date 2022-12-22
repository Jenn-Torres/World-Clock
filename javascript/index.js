function updateTime() {
  let buenosAiresCity = document.querySelector("#buenos-aires");
  let buenosAiresDate = buenosAiresCity.querySelector(".date");
  let buenosAiresTime = buenosAiresCity.querySelector(".time");
  let buenosAiresCurrentTime = moment().tz("America/Argentina/Buenos_Aires");

  buenosAiresDate.innerHTML = moment().format("MMMM Do YYYY");
  buenosAiresTime.innerHTML = buenosAiresCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let romeCity = document.querySelector("#rome");
  let romeDate = romeCity.querySelector(".date");
  let romeTime = romeCity.querySelector(".time");
  let romeCurrentTime = moment().tz("Europe/Rome");

  romeDate.innerHTML = moment().format("MMMM Do YYYY");
  romeTime.innerHTML = romeCurrentTime.format("h:mm:ss [<small>]A[</small>]");

  let dubaiCity = document.querySelector("#dubai");
  let dubaiDate = dubaiCity.querySelector(".date");
  let dubaiTime = dubaiCity.querySelector(".time");
  let dubaiCurrentTime = moment().tz("Asia/Dubai");

  dubaiDate.innerHTML = moment().format("MMMM Do YYYY");
  dubaiTime.innerHTML = dubaiCurrentTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
