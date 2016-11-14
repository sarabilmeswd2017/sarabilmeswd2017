document.getElementById("myButton").onclick = changeColor;
var currentColor ="burlywood";

function changeColor(){

    if (currentColor =="burlywood"){
        document.body.style.color ="green";
        currentColor = "green";
    } else {
        document.body.style.color ="burlywood";
        currentColor ="burlywood"
    }

    return currentColor;
}
