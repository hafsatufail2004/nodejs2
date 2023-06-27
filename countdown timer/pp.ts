function startCountdown(duration: number) {
    let timer = duration;
  
    const countdownInterval = setInterval(() => {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;
  
      console.log(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
  
      if (--timer < 0) {
        clearInterval(countdownInterval);
        console.log('Countdown timer has ended.');
      }
    }, 1000);
  }
  
  function startGame() {
    console.log('Welcome to the Countdown Timer!');
    console.log('-------------------------------');
  
    const durationInMinutes = parseInt(getInput('Enter the duration in minutes: '));
  
    if (isNaN(durationInMinutes) || durationInMinutes <= 0) {
      console.log('Invalid duration. Please enter a positive number of minutes.');
      return;
    }
  
    const durationInSeconds = durationInMinutes * 60;
    console.log(`Countdown timer started for ${durationInMinutes} minutes.`);
  
    startCountdown(durationInSeconds);
  }
  
  startGame();

function getInput(arg0: string): string {
    throw new Error("Function not implemented.");
}
  