const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEL = document.getElementById('mins');
const secondsEL = document.getElementById('seconds');



const newYears = '1 Jan 2023';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    
    const hours = Math.floor(totalseconds / 3600) % 24;

    const mins = Math.floor(totalseconds / 60) % 60;

    const seconds = Math.floor (totalseconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime (hours);
    minsEL.innerHTML = formatTime (mins);
    secondsEL.innerHTML = formatTime (seconds);

    console.log(days, hours, mins, seconds);
}


function formatTime(time) {
     return time < 10 ? `0${time}` : time;
}


//initial Call
countdown();

setInterval(countdown, 1000);