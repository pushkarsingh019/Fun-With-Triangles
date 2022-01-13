var base = document.querySelector(".base");
var height = document.querySelector(".height");
var button = document.querySelector(".btn");
var output = document.querySelector(".output");

// Functions
function calculate(base, height){
    return (0.5*(base*height))
}


function eventHandler(){
    var area = calculate(base.value, height.value)
    output.innerHTML = "The area of the triangle is " + area + " cm² "

}





// Adding event Listeners
button.addEventListener("click", eventHandler);