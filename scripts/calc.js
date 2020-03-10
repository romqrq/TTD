
// function addition(numOne, numTwo){
//     if(typeof(numOne) == 'number' && typeof(numTwo) == 'number') {
//         return numOne + numTwo;
//     } else {
//         alert ("Error!");
//     }
    
// }

//Creating a new calculator object
Calculator = function() {
    this.value = 0;
}

//Creating addition function
Calculator.prototype.add= function(number){
    if (typeof(number) == 'number') {
        //if it is a number, the running total will receive the number as an addition to it
        this.value += number;
    } else {
        alert("Error!");
    }
}