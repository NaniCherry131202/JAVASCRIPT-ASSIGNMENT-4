//Display Clock
let hrs = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let period = document.getElementById("period");

setInterval(() => {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let amPm = hours >= 12 ? "PM" : "AM"; // Determine AM or PM

  hrs.innerHTML = (hours < 10 ? "0" : "") + hours; // 24-hour format
  min.innerHTML = (minutes < 10 ? "0" : "") + minutes;
  sec.innerHTML = (seconds < 10 ? "0" : "") + seconds;
  period.innerHTML = amPm; // Display AM/PM
}, 1000);
//Calendar
document.addEventListener("DOMContentLoaded", function () {
  const today = new Date();
  const day = ("0" + today.getDate()).slice(-2);
  const month = ("0" + (today.getMonth() + 1)).slice(-2); // January is 0
  const year = today.getFullYear();
  document.getElementById(
    "calendar"
  ).innerHTML = `${day} / ${month} / ${year}`;
});
//Auto slide
let firstIndex = 0;
function automaticSlide() {
  setTimeout(automaticSlide, 3000);
  const images = document.querySelectorAll(".images img");
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  firstIndex++;
  if (firstIndex > images.length) {
    firstIndex = 1;
  }
  images[firstIndex - 1].style.display = "block";
}
automaticSlide();
//TypeWriter
const typewriterText = "Full Stack developer";
   
   let index = 0; 

   function typeWriter() {
       if (index < typewriterText.length) {
           document.getElementById('typewriter').innerHTML += typewriterText.charAt(index);
           index++;
           setTimeout(typeWriter, 100);
       }
   }
   window.onload = typeWriter;