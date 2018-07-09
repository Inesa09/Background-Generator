var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("back");
var text = document.querySelector("h3");

function setGradient(){
    body.style.background = "linear-gradient(to right, " 
    + color1.value + ", " +  color2.value + ")";
    text.textContent = body.style.background +";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

var button = document.querySelector("button");
function addRandomColor(color1){
    color1.value = '#'+ Math.floor(Math.random()*16777215).toString(16);
};
button.addEventListener("click", function(){
    addRandomColor(color1);
    addRandomColor(color2);
    setGradient();
});