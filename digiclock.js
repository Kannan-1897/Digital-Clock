let ampm = document.getElementById("ampm");
function displayTime() {
  let dateTime = new Date();
  let hr = dateTime.getHours();
  let min = addZero(dateTime.getMinutes());
  let secs = addZero(dateTime.getSeconds());
  if (hr > 12) {
    hr = hr - 12;
    ampm.innerHTML = "PM";
  }

  document.getElementById("hours").innerHTML = addZero(hr);
  document.getElementById("mins").innerHTML = min;
  document.getElementById("secs").innerHTML = secs;
}

function addZero(num) {
  return num < 10 ? "0" + num : num;
}

setInterval(displayTime, 500);

let greetpara = document.querySelector(".greeting");
let date = new Date();
let time = date.getHours();

if (time >= 0 && time <= 12) {
  greetpara.innerHTML = "Good Morning! Boss!";
} else if (time > 12 && time < 17) {
  greetpara.innerHTML = "Good Afternoon! Boss!";
} else if (time > 17 && time < 21) {
  greetpara.innerHTML = "Good Evening! Boss!";
} else {
  greetpara.innerHTML = "Good Night! Boss!";
}
