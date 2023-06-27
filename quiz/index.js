import readlineSync from "readline-sync";
function GetInput(question) {
    return readlineSync.question(question + ' ');
}
function StartGame() {
    console.log('Welcome to the Quiz Game!');
    console.log('-------------------------');
    const questions = [
        {
            question: 'What is the capital of France?',
            options: ['Paris', 'London', 'Berlin'],
            corretAnswerIndex: 0,
        },
        {
            question: 'What is the largest plant in our solar system?',
            options: ['Jupiter', 'Satrun', "Neptune"],
            corretAnswerIndex: 0
        },
        {
            question: 'What is the symbol for chemical element Oxygen?',
            options: ['H', 'O', 'C'],
            corretAnswerIndex: 0,
        }
    ];
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        console.log(`Question ${i + 1}: ${questions[i].question}`);
        console.log('Options:');
        for (let j = 0; j < questions[i].options.length; j++) {
            console.log(`${j + 1}. ${questions[i].options[j]}`);
        }
        const userAnswerIndex = parseInt(GetInput('Enter the number of your answer:'));
        if (userAnswerIndex === questions[i].corretAnswerIndex + 1) {
            console.log('Correct Answer!');
            score++;
        }
        else {
            console.log("Wrong Answer.");
        }
        console.log("------------------------------------------------");
    }
    console.log(`Quiz completed.Your score is ${score}/${questions.length}`);
    console.log('Thank you for playing.Goodbuy!');
}
StartGame();
