

const countdown = document.getElementById("time");

let startingMinutes;
let currentTime;
let intervalId; // Variable to store the interval ID
let isTimerRunning = false; // Track whether the timer is running

function clearTimer() {
    if (intervalId) {
        clearInterval(intervalId);
    }
}

function focusTimer() {
    clearTimer();
    startingMinutes = 25;
    currentTime = startingMinutes * 60;
    countdown.innerHTML = "25:00";
    isTimerRunning = false; // Set timer to paused
}

function shortTimer() {
    clearTimer();
    startingMinutes = 5;
    currentTime = startingMinutes * 60;
    countdown.innerHTML = "5:00";
    isTimerRunning = false; // Set timer to paused
}

function longTimer() {
    clearTimer();
    startingMinutes = 10;
    currentTime = startingMinutes * 60;
    countdown.innerHTML = "10:00";
    isTimerRunning = false; // Set timer to paused
}

function Timer() {
    const minutes = Math.floor(currentTime / 60);
    let seconds = currentTime % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    countdown.innerHTML = `${minutes}:${seconds}`;

    if (currentTime > 0) {
        currentTime--;
    } else {
        clearInterval(intervalId);
        isTimerRunning = false; // Set timer to paused when it reaches zero
    }
}

function startTimer() {
    if (!isTimerRunning) { // Check if the timer is not already running
        intervalId = setInterval(Timer, 1000); // Start a new timer
        isTimerRunning = true; // Set timer to running
    }
}




