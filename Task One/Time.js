function displayCurrentUTCTime() {
    const utcTimeElement = document.getElementById("utc-time");

    function updateUTCTime() {
        const currentTime = new Date();
        const utcTimeString = currentTime.toISOString(); 
        utcTimeElement.textContent = "Current UTC Time: " + utcTimeString;
    }

    updateUTCTime();

    setInterval(updateUTCTime, 1000);
}

window.onload = displayCurrentUTCTime;
