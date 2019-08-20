// TIMER
let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timerElement = document.getElementById("timer");

// BUTTONS
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");

// BUTTON MECHANICS
startBtn.addEventListener("click", function() {
    timer = setInterval(timerHandler, 1000);
    resetBtn.disabled = false;
});

stopBtn.addEventListener("click", function() {
    timer = clearInterval(timer);
    resetBtn.disabled = false;
});

resetBtn.addEventListener("click", function() {
    timer = clearInterval(timer);
    resetBtn.disabled = true;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timerElement.innerHTML = "00 : 00 : 00";
});

// TIME HANDLER FUNCTION
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

// DISPLAY TIME FUNCTION
function displayTime() {
    let secDouble = seconds;
    let minDouble = minutes;
    let hourDouble = hours;
    if(seconds < 10) {
        secDouble = "0" + seconds;
    }
    if(minutes < 10) {
        minDouble = "0" + minutes;
    }
    if(hours < 10) {
        hourDouble = "0" + hours;
    }
    timerElement.innerHTML = hourDouble + " : " + minDouble + " : " + secDouble;
};