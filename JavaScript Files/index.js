// Creating references for Html elements in JavaScript
var angle1 = document.querySelector("#angle1");
var angle2 = document.querySelector("#angle2");
var angle3 = document.querySelector("#angle3");
var button = document.querySelector("#submit-btn");
var output = document.querySelector("#output");

// Logic of the program

// function debugCode(){
//     console.log("Angle 1 = " + angle1.value);
//     console.log("Amgle 2 = " + angle2.value);
//     console.log("angle 3 = " + angle3.value);
//     console.log("total Sum = " + Number(angle1.value) + Number(angle2.value) + Number(angle3.value));
// }

function calculate(){
    var totalSum = Number(angle1.value) + Number(angle2.value) + Number(angle3.value);
    // console.log("total sum = " + totalSum);
    if (totalSum === 180){
        output.innerHTML = "Is a triangle";
    } 
    else{
        output.innerHTML = "Not a triangle";
    }
}




// Adding Event Listener
button.addEventListener("click", calculate);
