import readlineSync from "readline-sync" ;

class Person{
  private personality:string;

constructor(){
  this.personality = "Mystery";
    }

    public askQuestion(answer:number):void{
if(answer == 1){
  this.personality = 'Extrovert'
}else if(answer == 2){
  this.personality = "Introvert"
}else{
  this.personality = "You are still a mystery"
      }
   }
   public getPersonality():string {
    return this.personality
   }
}

function main():void{
  try{
    const readLineSync = require('readline-sync')
    const input:string = readlineSync.question(
      "Type 1 if you like to talk to others and type 2 if you'd rather keep to yourself:"
    );
    const myPerson = new Person();
    myPerson.askQuestion(parseInt(input));
    console.log("You are :" + myPerson.getPersonality());
    const name:string = readlineSync.question("What is your name:");
    const myStudent = new Student();
    myStudent.setName(name);
    console.log(
      "Your name is: "+myStudent.getName() + "and your personality type is"
       + myStudent.getPersonality() ); 
  }catch{
console.log("Please enter an integar value")
  }
} 

class Student extends Person{
  private name:string;

  constructor(){
    super();
    this.name = "";
  }
  public setName(name:string):void{
    this.name = name;
  }
  public getName():string{
return this.name;
  }
}

main();