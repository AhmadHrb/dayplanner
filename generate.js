let wakeTimes = [0,7,8,9];
let sleepTimes = [0,21,22,23];
function generate() {
let wakeup = document.querySelector('input[name="wakeup"]:checked').value;
let sleep = document.querySelector('input[name="sleep"]:checked').value;
let study = parseInt(document.querySelector('input[name="study"]:checked').value);
let breakTime = 0;
if (document.querySelector('input[name="break"]:checked')) {

    breakTime = document.querySelector('input[name="break"]:checked').value;
    if (((study/breakTime)*0.5) < 0) breakTime = 0.5;
    else breakTime = (study/breakTime)*0.5;
}
let phone = document.querySelector('input[name="phone"]:checked').value;
let workout = 0;
if (document.querySelector('input[name="workout"]:checked')) workout = document.querySelector('input[name="workout"]:checked').value;
let piano = 0;
if (document.querySelector('input[name="piano"]:checked')) piano = document.querySelector('input[name="piano"]:checked').value;
let draw = 0;
if (document.querySelector('input[name="draw"]:checked')) draw = document.querySelector('input[name="draw"]:checked').value;

let timeAvailable = sleepTimes[sleep] - wakeTimes[wakeup];
let timePlanned = study + breakTime + phone;
console.log(timePlanned,timeAvailable)
console.log(study,breakTime,phone)
if (timePlanned > timeAvailable) {
    alert("You don't have enough time to do all of that!");
    console.log(timeAvailable,timePlanned)
    return;
}
let timeLeft = timeAvailable - timePlanned;
let activities = workout + piano + draw;
let timeForActivity = timeLeft/activities;
let timeForWorkout = timeForActivity * workout;
let timeForPiano = timeForActivity * piano;
let timeForDraw = timeForActivity * draw;

alert("Breakfast: " + (wakeTimes[wakeup] + 1) + ":00 AM");
alert("Lunch: " + ((wakeTimes[wakeup] + 7)-12) + ":00 PM");
let currentTime = wakeTimes[wakeup] + 2;
if (phone == 4) {
    alert("Phone: " + (currentTime+2) + ":00");
    currentTime += 2;
} else if (phone == 2) {
    alert("Phone: " + (currentTime+1) + ":00");
    currentTime += 1;
}
for (let i =1; i < study; i+=breakTime) {
    if (breakTime <= 0) break;
    // TODO continue;
    alert("Study: " + (currentTime) + ":00" + " - " + (currentTime+i) + ":00");
    alert("Break: " + (currentTime+i) + ":00" + " - " + (currentTime+i) + ":30");
    breakTime -= 1;
    currentTime += i;
}
}