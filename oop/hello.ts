import inquirer from "inquirer"
class Person {
  private personality: string;
  
    constructor() {
      this.personality = "Mystery";
    }
  
    public askQuestion(answer: number): void {
      if (answer === 1) {
        this.personality = "Extrovert";
      } else if (answer === 2) {
        this.personality = "Introvert";
      } else {
        this.personality = "You are still a mystery";
      }
    }
  
    public getPersonality(): string {
      return this.personality;
   }
  }
  
  class Student extends Person {
    private _name: string;
  
    constructor() {
      super();
      this._name = "";
    }
  
    public get name(): string {
      return this._name;
    }
  
    public set name(value: string) {
      this._name = value;
    }
  }
  
  function main(): void {
    try {
      const input: string = prompt(
        "Type 1 if you like to talk to others and type 2 if you'd rather keep to yourself"
      ) || "";
  
      const myPerson: Person = new Person();
      myPerson.askQuestion(parseInt(input));
      console.log("You are: " + myPerson.getPersonality());
  
      const name: string = prompt("What is your name:") || "";
      const myStudent: Student = new Student();
      myStudent.name = name;
      console.log(
        "Your name is " +
          myStudent.name +
          " and your personality type is: " +
          myStudent.getPersonality()
      );
    } catch {
      console.log("Please enter an integer value");
    }
  }
  
  main();
  