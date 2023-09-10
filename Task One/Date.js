const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDayIndex = new Date().getDay();
const currentDayName = daysOfWeek[currentDayIndex];
const currentDayElement = document.getElementById('currentDay');
currentDayElement.textContent = currentDayName;
