import readlineSync from "readline-sync";
function GetInput(question) {
    return readlineSync.question(question + ' ');
}
function StartGame() {
    console.log("Welcome to  Adevnture Game!");
    console.log("--------------------------");
    console.log('Level 1:Find the Key');
    let level = 1;
    let hasKey = false;
    while (level <= 3) {
        if (level === 1) {
            console.log('You find yourself in a dark room...');
            const action = GetInput('What do you want to do ? (Look around /Open the door.):');
            if (action.toLowerCase().includes('look')) {
                console.log('You will see a small key on the table.');
                hasKey = true;
            }
            else if (action.toLowerCase().includes('open') && hasKey) {
                console.log('Congratulations!You have opened the door and completed Level:1');
                level++;
            }
            else {
                console.log('You can not open the door without the key');
            }
        }
        else if (level === 2) {
            console.log('Level 2:Solve the Riddle');
            console.log('You enter a room with a riddle written on the wall');
            console.log('I speake without a mouth and hear without ears.I have no body, but I come alive with wind.What am I?');
            const answer = GetInput('What is your answer?');
            if (answer.toLowerCase().includes('echo')) {
                console.log('Congratulations! You have solved the riddle and completed Level:2');
                level++;
            }
            else {
                console.log('That is not the correct answer .Try again!');
            }
        }
        else if (level === 3) {
            console.log('Level 3:Escape the Maze');
            console.log('You find yourself in a maze with multiple paths.');
            console.log('You need to find the exit to complete this level.');
            const action = GetInput('Which path do you want to choose?(Left/Right):');
            if (action.toLowerCase().includes('right')) {
                console.log('Congratulations! You choose the correct path and completed Level 3.');
                level++;
            }
            else {
                console.log('The path leads to a dead end.Try again!');
            }
        }
    }
    console.log("Congratulations! You have complete all the levels and won the game");
    console.log('Thank you for playing');
}
StartGame();
