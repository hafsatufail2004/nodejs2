class Person {
    personality;
    constructor() {
        this.personality = "Mystery";
    }
    askQuestion(answer) {
        if (answer === 1) {
            this.personality = "Extrovert";
        }
        else if (answer === 2) {
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
class Student extends Person {
    _name;
    constructor() {
        super();
        this._name = "";
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
function main() {
    try {
        const input = prompt("Type 1 if you like to talk to others and type 2 if you'd rather keep to yourself") || "";
        const myPerson = new Person();
        myPerson.askQuestion(parseInt(input));
        console.log("You are: " + myPerson.getPersonality());
        const name = prompt("What is your name:") || "";
        const myStudent = new Student();
        myStudent.name = name;
        console.log("Your name is " +
            myStudent.name +
            " and your personality type is: " +
            myStudent.getPersonality());
    }
    catch {
        console.log("Please enter an integer value");
    }
}
main();
export {};
