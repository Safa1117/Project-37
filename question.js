class Question {

    constructor() {
      this.input1 = createInput("Name");
    }
  
  
    display(){
     this.title.html("My Quiz Game");
     this.title.position(350, 0);

     this.question.html("Question:-What is my birds name?");
     this.question.position(150, 80);
     this.option1.html("1: Andrew ");
     this.option1.position(150,100);
     this.option2.html("1: Olive ");
     this.option2.position(150,120);

     this.input1.position(150, 120);
      };
  
    }
  
  