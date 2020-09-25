//Steps

const infos = document.getElementById('infos');
const instructions = document.getElementById('instructions');
const timerStep = document.getElementById('timer-step');
const chessClock = document.getElementById('chess-clock');

const steps = [infos, timerStep, chessClock ];

//Default-time

const timerDisplay = document.getElementById('timer-display');



//General functions

function show(element) {
    element.classList.remove("hide");
    element.classList.add("show");
}

function hide(element) {
    element.classList.add("hide");
    element.classList.remove("show");
}

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

function setTimer()
{
    console.log(document.getElementById('btn10').value)
}





