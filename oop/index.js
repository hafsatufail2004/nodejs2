class Person {
    personality;
    constructor() {
        this.personality = "Mystery";
    }
    askQuestion(answer) {
        if (answer == 1) {
            this.personality = 'Extrovert';
        }
        else if (answer == 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "You are still a mystery";
        }
    }
    getPersonality() {
        return this.personality;
    }
}
function main() {
    try {
        const readlineSync = require('readline-sync');
        const input = readlineSync.question("Type 1 if you like to talk to others and type 2 if you'd rather keep to yourself:");
        const myPerson = new Person();
        myPerson.askQuestion(parseInt(input));
        console.log("You are :" + myPerson.getPersonality());
        const name = readlineSync.question("What is your name:");
        const myStudent = new Student();
        myStudent.setName(name);
        console.log("Your name is: " + myStudent.getName() + "and your personality type is"
            + myStudent.getPersonality());
    }
    catch {
        console.log("Please enter an integar value");
    }
}
class Student extends Person {
    name;
    constructor() {
        super();
        this.name = "";
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
main();
export {};
