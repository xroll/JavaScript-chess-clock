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

    const whiteHours = document.getElementById('whiteHours');
    const blackHours = document.getElementById('blackHours');
    const whiteMinutes = document.getElementById('whiteMinutes');
    const blackMinutes = document.getElementById('blackMinutes');
    const whiteSeconds = document.getElementById('whiteSeconds');
    const blackSeconds = document.getElementById('blackSeconds');
    
    //Initial time
    initialHoursLeft = Math.floor(timer / 3600) % 24;
    initialMinutesLeft = Math.floor(timer / 60) % 60;
    initialSecondsLeft = timer % 60;

    //Display
    
    //Hours
    console.log(initialHoursLeft);
    if(initialHoursLeft > 0) {
        whiteHours.style.display = "block";
        blackHours.style.display = "block";
        whiteHours.innerHTML = initialHoursLeft + ' :&nbsp;';
        blackHours.innerHTML = initialHoursLeft + " :&nbsp;";
    }
    else {        
        whiteHours.style.display = "none";
        blackHours.style.display = "none";
    }    
    //Minutes    
    whiteMinutes.innerHTML = formatTime(initialMinutesLeft) + " :&nbsp;";
    blackMinutes.innerHTML = formatTime(initialMinutesLeft) + " :&nbsp;";
    //Seconds
    whiteSeconds.innerHTML = formatTime(initialSecondsLeft);    
    blackSeconds.innerHTML = formatTime(initialSecondsLeft);

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

function startClock(){
    isWhiteActive = true;
    isClockActive = true;
    clock();
}

function clock(){
    clockTick = setInterval(countdown, 1000);
 }

 function stopClock(){
    clearInterval(clockTick);
}

 function countdown() {

    if(isWhiteActive){

        if(whiteTimeLeft === 0)
        {
            stopClock();
        }
        else{
            whiteTimeLeft = whiteTimeLeft -1;

            let whiteHoursLeft = Math.floor(whiteTimeLeft / 3600) % 24;
            let whiteMinutesLeft = Math.floor(whiteTimeLeft / 60) % 60;
            let whiteSecondsLeft = whiteTimeLeft % 60;
    
            whiteHours.innerHTML = whiteHoursLeft + " : ";
            whiteMinutes.innerHTML = formatTime(whiteMinutesLeft) + " : ";
            whiteSeconds.innerHTML = formatTime(whiteSecondsLeft);
        }
    }
    else if (isBlackActive){

        if(blackTimeLeft === 0)
        {
            stopClock();
        }
        else{
            blackTimeLeft = blackTimeLeft -1 ; 

            let blackHoursLeft = Math.floor(blackTimeLeft / 3600) % 24;
            let blackMinutesLeft = Math.floor(blackTimeLeft / 60) % 60;
            let blackSecondsLeft = blackTimeLeft % 60;
            
            blackHours.innerHTML = blackHoursLeft + " : ";
            blackMinutes.innerHTML = formatTime(blackMinutesLeft) + " :      ";
            blackSeconds.innerHTML = formatTime(blackSecondsLeft);
        }
    }    
}

//Toggle active player

function toggleClock(){
    isWhiteActive = !isWhiteActive;
    isBlackActive = !isBlackActive;
}

//Toggle by timer press
function whiteToggle(){
    if(isWhiteActive){
        toggleClock()
    }
}

function blackToggle(){
    if(isBlackActive){
        toggleClock()
    }
}

//Toggle with Spacebar input listener
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        console.log(isWhiteActive, isBlackActive);
        if(!isClockActive){
            isClockActive = true;
            startClock();
        }
        else{
            toggleClock();
        }        
    }
}
