function adder(num1,num2){
    return num1+num2;
}
console.log( adder( 100, "Tony") );
/*1) 100 and Tony get sent to the adder function. 2) Adder function runs, and places 100 and Tony, into num1 and num2. 
3) Before we can call num1 and num2  for it's values, and then add/ concatinate, them together.
40 The return keyword says that  we will  return this single  value back to wherever  the function was called.  The adder function has returned the  "100Tony" as a single string and is replaced by that value. 
6) Because this value is inside of the console .log arguments area, it will be sent off to the console.log function.*/


function taxcalculator(itemprice){
var tax = itempricce * .085;
var taxedfixedtotwodecimalplaces=tax.toFixed(2);
return taxedfixedpricetotwodecimalplaces;
}
//parseint
var laptopprice = 999.95;
var laptoptax = taxcalculator(laptopprice);
console.log("price of item: $"+ laptopprice+ ".tax on item:" + laptoptax)+"."
/*Create A function called mathifier
This function will take two numbers 
with these  two numbers, you will add them , then add the sum to the first number, and then multiply that by the second number.
the function will return the result.*/


function mathifier (fixednum1,fixednum2) {
var sum = num 1 +num2;
var newsum = sum +num1;
var product = newsum*num2;
return product;
}
console.log(mathifier(2,4));



/*This function will be called mathresults
This function takes only 2 #.
This function will console log each of the following:
The sum of these two #
The difference of these two Numbers
the product of these 2 numbers
the dividend of these 2 numbers 
the leftovers of these 2 numbers. (modulo)
Bonus: Each console log willl  tell me what that number is about. */

function mathresults (num2, num3){
//Sum
var sum =num1+num2
console.log(sum);
//Difference
console.log(num1-num2)
console.log(num1*num2);
var product =num1 *num2;
console.log(product);
console.log(num1/num2);
var remainder =num1% num2;
console.log(remainder);
mathresults(600, 399);