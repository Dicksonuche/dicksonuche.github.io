const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDayIndex = new Date().getDay();
const currentDayName = daysOfWeek[currentDayIndex];

function displayCurrentUTCTime(){
const currentDayElement = document.getElementById('currentDay');
const utcTimeElement= document.getElementById("utc-time");

function updateUTCTime(){
    const currentTime=new Date();
    const utcTimeString= currentTime.toISOString();
    utcTimeElement.textContent="Current UTC Time:" + utcTimeString;

}

currentDayElement.textContent= currentDayName;
updateUTCTime();
setInterval(updateUTCTime, 1000);
}

window.onload= displayCurrentUTCTime;