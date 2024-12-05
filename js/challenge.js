let count = 0;
let timerRunning = true; 
const countDisplay = document.getElementById('counter')

function startTimer() {
    intervalId = setInterval(increaseTime, 1000);
}

startTimer();

function increaseTime() {
    count++;
    countDisplay.textContent = count;
}
function decreaseTime() {
    count--;
    countDisplay.textContent = count;
}

function pauseTimer() {
    btnTxt = document.getElementById('pause');
    if(timerRunning) {
        clearInterval(intervalId);
        disableBtns();
        btnTxt.textContent = 'resume';
        timerRunning = false;
    } else {
        timerRunning = true;
        startTimer();
        enableBtns();
        btnTxt.textContent = 'pause';
    }
}
function disableBtns() {
    document.querySelectorAll('button:not(#pause)').forEach( button => button.disabled = true);
}
function enableBtns() {
    document.querySelectorAll('button:not(#pause)').forEach( button => button.disabled = false);
}
let likeCount = 0;
function resetToZero() {
    likeCount = 0
}
function repeatCounter() {
    intervalId2 = setInterval(resetToZero, 1000)
}
repeatCounter();
function heartTime() {  
    likeCount++;
    let newLike = document.createElement('li');
    if(likeCount = 1) {
    newLike.textContent = `${count} was liked ${likeCount} time`
    document.querySelector('.likes').appendChild(newLike);
    } else {
        likeCount++;
         newLike.textContent = `${count} was liked ${likeCount} time`
    document.querySelector('.likes').appendChild(newLike);

    }
}




//     if(likeCount === 1) {
//         newLike.textContent = `${count} has been liked ${likeCount} time`;
//         document.querySelector('.likes').appendChild(newLike);
//         console.log(likeCount)
//     } else {
//         newLike.textContent = `${count} has been liked ${likeCount} times`;
//         document.querySelector('.likes').appendChild(newLike);
//     }
// }
let heartBtn = document.getElementById('heart').addEventListener('click', heartTime)
let pauseBtn = document.getElementById('pause').addEventListener('click', pauseTimer)
let minusBtn = document.getElementById('minus').addEventListener('click', decreaseTime)
let plusBtn = document.getElementById('plus').addEventListener('click', increaseTime)