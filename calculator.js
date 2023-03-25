var button = document.getElementsByClassName("button");
var display = document.getElementById("display-section");
var op1 = 0;
var op2 = null;
var operator = null;
function getResult() {
    var value = this.getAttribute("data-value");
    if (value == "+" || value == '-' || value == '*' || value == '/') {
        op1 = parseFloat(display.innerText);
        operator = value;
    }
    else if(value == "%"){
        let x = parseFloat(display.innerText);
        x = x/100;
        display.innerText = x;
        
    }
    else if(value == "+/-"){
        var x = parseFloat(display.innerText);
        x *= -1;
        display.innerText = x;

    }
    else if (value == "=") {
        op2 = parseFloat(display.innerText);
        console.log(op1, op2);
        if(isNaN(op1)){
            display.innerText = "Error";
        }
        else if(operator == '/' && op2 == "0"){
            display.innerText = "Error";
        }
        else{
            var x = eval(op1 + " " + operator + " " + op2);
            display.innerText = x;
        }
        op1 = op2;
        op2 = null;
        operator = null;
    }
    else if (value == "AC") {
        if(op2 != null){
            op2 = null;
        }
        else{
            op1 = 0;
            op2 = null;
        }
        if(op1 == 0 && op2 == null){
            document.getElementById("temp").innerText = "AC";
        }
        display.innerText = 0;
    }
    else if(value >= 0 && value <= 9){
        if(display.innerText == 0){
            document.getElementById("temp").innerText = "C";
        }
        if(display.innerText == "Error"){
            display.innerText = value;
        }
        else if(!operator && display.innerText == 0){
            display.innerText = value;
        }
        else if(!operator && display.innerText!=0){
            display.innerText += value;
        }
        else if(operator && !op2){
            op2 = value;
            display.innerText = value;
        }
        else if(operator && op2){
            display.innerText += value;
        }
    }
}
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', getResult);
}