// TIMER
let timer = setInterval(timerHandler, 1000);
let seconds = 0;
let minutes = 0;
let hours = 0;

function timerHandler() {
    seconds++;
    if(seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if(minutes == 60) {
        minutes = 0;
        hours++;
    }
    
    displayTime();
};

function displayTime() {
    let secDouble;
    let minDouble;
    let hourDouble;
    let timerElement = document.getElementById("timer");
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    if(minutes < 10) {
        minDouble = "0" + minutes;
    }
    if(hours < 10) {
        hourDouble = "0" + hours;
    }
    timerElement.innerHTML = hourDouble + " : " + minDouble + " : " + seconds;
}