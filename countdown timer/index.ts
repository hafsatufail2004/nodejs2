import readlineSync from "readline-sync";

function getInput(question:string):string{
    return readlineSync.question(question + ' ')
    }

function StartCountDown(duration:number){
let timer = duration;

const countDownIntervals = setInterval(() => {
    const minutes = Math.floor(timer/60);

    const second = timer % 60;

    console.log(`${minutes.toString().padStart(2,'0')}:${second.toString().padStart(2,'0')}`)

    if(--timer < 0){
        clearInterval(countDownIntervals);
        console.log('Countdown timer has ended!');
           }
  },1000);
};
function StartGame(){
    console.log('Welcome to Countdown Timer!');
    console.log('---------------------------');
    const durationInMinutes = parseInt(getInput('Enter the duration in minutes.'));
if(isNaN(durationInMinutes) || durationInMinutes <= 0){
console.log('Invalid duration.Please enter a positive number of minutes.')
return;
}
const durationInSeconds = durationInMinutes * 60;
console.log(`Countdown timer started for ${durationInMinutes} minutes`);
StartCountDown(durationInSeconds);
}
StartGame();

