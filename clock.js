let hr = document.querySelector(".hr");
let mn = document.querySelector(".mn");
let sc = document.querySelector(".sc");

function showtime() {
  let date = new Date();
  let hh = date.getHours() * 30;
  let mm = date.getMinutes() * 6;
  let ss = date.getSeconds() * 6;
  hr.style.transform = "rotate(" + (hh + mm / 12) + "deg)";
  mn.style.transform = "rotate(" + mm + "deg)";
  sc.style.transform = "rotate(" + ss + "deg)";
}
setInterval("showtime()");
