// num1 and num2 are strings.
var num1;     
var num2;
var operator;
var isNum2 = false;
var hasOperator = false;


const numberButtonList = document.querySelectorAll(".numberButton");
numberButtonList.forEach(function(number){
    number.addEventListener("click",function(){
        setNum(this.id);
        // turn the red operator previously clicked to normal
        clearHighlight();
    });
});

const OperatorList = document.querySelectorAll(".operator");
OperatorList.forEach(function(operator){
    operator.addEventListener("click",function(){
        setOperator(this.id);
        clearHighlight();
        // change the clicked button's color to red
        this.className += " active";
    });
});

function clearHighlight(){
    var activeElement = document.getElementsByClassName("active");
    if (activeElement.length > 0){
        Array.from(activeElement).forEach(function(ele){
            ele.className = ele.className.replace(" active","");
        });
    } 
}

function setOperator(e){
    if (e == "C"){
        reset();
        return
    }
    if (hasOperator){
        num1 = operate(operator, num1, num2).toString();
        updateScreen(num1);
        num2 = null;
        operator = null;
        hasOperator = false;
    } 
    if (e != "="){
        operator = e;
        hasOperator = true;
    }
    isNum2 = true;
}

function setNum(num){
    if(isNum2){
        if(num2){
            num2 += num;
        } else {
            num2 = num;
        }
        updateScreen(num2);
    } else {
        if (num1){
            num1 += num;
        } else {
            num1 = num;
        }
        updateScreen(num1);
    }
}

function updateScreen(e){
    document.getElementById("screen").innerHTML = e
}

function reset(){
    num1 = null;
    num2 = null;
    operator = null;
    hasOperator = false;
    isNum2 = false;
    updateScreen("");
}

function operate(oper, number1, number2){
    x = parseInt(number1);
    y = parseInt(number2);
    switch (oper){
        case "+":
            return (x + y);
        case "-":
            return (x - y);
        case "*":
            return (x * y);
        case "/":
            return divide(x, y);
    }   
}

function divide(x, y){
    if (y == 0){
        return "the divisor shouldn't be 0! Click C to continue!";
    } else {
        return x / y;
    }
}