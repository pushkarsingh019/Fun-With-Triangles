var a = document.querySelector("#a");
var b = document.querySelector("#b");
var button = document.querySelector("#btn");
var output = document.querySelector("#output");

// Functions

function calculate(angleA, angleB){
    var squareA = angleA * angleA;
    var squareB = angleB * angleB;
    var sum = squareA + squareB;
    var output = Math.sqrt(sum);

    return output;
}

function eventHandler(){
    var angleA = a.value;
    var angleB = b.value;
    var length = calculate(angleA,angleB);
    output.innerHTML = "The length of the Hypotenuse is " + length;
}




// Adding event listerners
button.addEventListener("click", eventHandler)