//Intro to functions 
// Example of functions we have used so far.
console.log();
Math.round();
Math.floor();
Math.ceil();
Math.random();
var currenttime = Date.now();
console.log(currenttime);
//Syntax structure of a function definintion. 
//Simmilar to CSS rulesets
//Selector{ 
// property:Value;
//}
//A function that belongs to a class ("library") is called a "method". 
//A vriable that belongs to a class ("library")is called a property.
function nameoffunction() {
console.log("Hello");
console.log("Hello");
console.log("Hello");
}
nameoffunction();
nameoffunction();

function datatypeprinter() {
console.log(102903);
console.log("Hello World" );
console.log(false);
}
function meaningsofthreemeowsforacatfunction(){
console.log(greeting);
console.log(demands);
console.log(angry);
console.log(true);
}

   //Arguments and parameters
    //"Hello" is the argument
    console.log("hello/n")
    function takedatain(text) {
    console.log(text);
    }
    function takedatain(text1,text2){
    console.log(text1);
    console.log(text2);  
  }
    
    
    takedatain("How are you doing?","Mike");
    takedatain("Goodbye!", 100);
    

    //This function simply adds these two numbers.
    function adder (number1, number2){ 
       var sum = number1 +number2;
        console.log( "The sum of"+number1+"and"+number2+"is"+sum);
    }
       
    adder(4000,19);
