//Steps

const infos = document.getElementById('infos');
const instructions = document.getElementById('instructions');
const timerStep = document.getElementById('timer-step');
const chessClock = document.getElementById('chess-clock');

//General functions

function show(element) {
    element.classList.remove("hide");
    element.classList.add("show");
}

function hide(element) {
    element.classList.add("hide");
    element.classList.remove("show");
}

//Todo : Refactor functions into switch cases

function showTimerStep(){
    hide(infos);
    show(timerStep);         
}

function showInstructions(){
   hide(infos);
   show(instructions);
}

function showFirstStep(){
    hide(timerStep);
    show(infos);  
}

function showClockStep(){
    hide(timerStep);
    show(chessClock);         
}

function back(){
    hide(instructions);
    show(infos);
}

//Timer

let timer;

function timerSelect(){
    hide(chessClock);
    show(timerStep);
    
}



function setTimer(value)
{
    timer = 0;
    timer = value * 60;
    hide(timerStep);
    initialState(timer);
    show(chessClock);
    
}

//Chess clock

let whiteTimeLeft;
let blackTimeLeft;
let isWhiteActive = false;
let isBlackActive = false;

function initialState(timer){

    let initialHoursLeft = 0;
    let initialMinutesLeft = 0;
    let initialSecondsLeft = 0;
    
    //Initial time
    initialHoursLeft = Math.floor(timer / 3600) % 24;
    initialMinutesLeft = Math.floor(timer / 60) % 60;
    initialSecondsLeft = timer % 60;

    //Display
    
    //Hours
    console.log(initialHoursLeft);
    if(initialHoursLeft > 0) {
        document.getElementById('whiteHours').style.display = "block";
        document.getElementById('blackHours').style.display = "block";
        document.getElementById('whiteHours').innerHTML = initialHoursLeft + ' :&nbsp;';
        document.getElementById('blackHours').innerHTML = initialHoursLeft + " :&nbsp;";
    }
    else {        
        document.getElementById('whiteHours').style.display = "none";
        document.getElementById('blackHours').style.display = "none";
    }    
    //Minutes    
    document.getElementById('whiteMinutes').innerHTML = formatTime(initialMinutesLeft) + " :&nbsp;";
    document.getElementById('blackMinutes').innerHTML = formatTime(initialMinutesLeft) + " :&nbsp;";
    //Seconds
    document.getElementById('whiteSeconds').innerHTML = formatTime(initialSecondsLeft);    
    document.getElementById('blackSeconds').innerHTML = formatTime(initialSecondsLeft);

    //Set initial time for players

    whiteTimeLeft = timer;
    blackTimeLeft = timer;

    //Clock status

    isClockActive = false;
    isWhiteActive = false;
    isBlackActive = false;
}

//Format time
function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
