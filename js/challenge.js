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
    const newList = document.createElement('li');
    newList.setAttribute('data-num', `${count}`)
    const textBeforeSpan = document.createTextNode(`${count} has been liked `)
    const span = document.createElement('span');
    span.textContent = 1;
    const textAfterSpan = document.createTextNode(' time');
    newList.appendChild(textBeforeSpan);
    newList.appendChild(span);
    newList.appendChild(textAfterSpan);
    console.log(newList);
    const likeArray = Array.from(document.querySelectorAll('[data-num]'))
    console.log(newList.dataset.num)
        if (likeArray.find(item => item.dataset.num == newList.dataset.num)) {
            let existingList = document.querySelector(`[data-num= "${newList.dataset.num}"]`)
            let spanCount = parseInt(existingList.querySelector('span').textContent, 10)
            spanCount++;
            existingList.querySelector('span').textContent = spanCount;
            if (spanCount <= 2) {
                existingList.innerHTML = existingList.innerHTML.replace('time', 'times')
            }
        } else { 
            document.querySelector('.likes').appendChild(newList);
            console.log('This is a fresh post')};
    };

function leaveAComment(event) {
    event.preventDefault()
    let newComment = document.createElement('p');
    newComment.textContent = document.getElementById('comment-input').value;
    document.querySelector('.comments').appendChild(newComment);
    document.getElementById('comment-form').reset();
}

let postComment = document.getElementById('submit').addEventListener('click', leaveAComment)
let heartBtn = document.getElementById('heart').addEventListener('click', heartTime)
let pauseBtn = document.getElementById('pause').addEventListener('click', pauseTimer)
let minusBtn = document.getElementById('minus').addEventListener('click', decreaseTime)
let plusBtn = document.getElementById('plus').addEventListener('click', increaseTime)