import readlineSync from 'readline-sync'

function getInput(question: string): string {
    return readlineSync.question(question + ' ');
  }
  

function startCountDown(duration:number){
const countDownEnd = new Date().getTime() + duration * 1000;
const countDownInterval = setInterval(() =>{
    const currentTime = new Date().getTime();
    const remainingTime =countDownEnd - currentTime;
    const minutes = Math.floor((remainingTime/1000)/60);
    const seconds = Math.floor((remainingTime/1000) % 60);
    console.log(`${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`);
    if(remainingTime <= 0 ){
        clearInterval(countDownInterval)
        console.log('Countdown Timer has ended.');
        }
    },1000)
}
function startGame(){
    console.log('Welcome to Countdown Timer');
    console.log('---------------------------');

const durationInSeconds = parseInt(getInput('Enter your duration in seconds:'));
if(isNaN(durationInSeconds) || durationInSeconds <= 0){
console.log('Invalid Duration! Please enter a positive number of second.');
return;
}
console.log(`Countdown timer has started for ${durationInSeconds} second.`);
startCountDown(durationInSeconds)
}
startGame();