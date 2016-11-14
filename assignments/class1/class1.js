document.getElementById("myButton").onclick = changeFont;
var currentFont ="monospace";

function changeFont(){

    if (currentFont =="monospace"){
        document.body.style.fontFamily ="serif";
        currentFont = "serif";
    } else {
        document.body.style.fontFamily ="monospace";
        currentFont ="monospace"
    }

    return currentFont;
}

