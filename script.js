let num1 = "";
let num2 = "";
let displays = document.getElementById('display');
let operator = "";
let answerDisplayed = false;



function add(num1, num2){
    return num1 + num2;
}
function sub(num1, num2){
    return num1 - num2;
}
function multi(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    if(num2 = 0){
        nah();
    }else{
        return num1/num2;
    }
}
function modulo(num1, num2){
    if(num2 = 0){
        nah();
    }else{
        return num1 % num2;
    }
}
function operation(num1, num2, operator){
    switch(operator) {
        case "+":
            return add(getNum(num1),getNum(num2));
        case "-":
            return sub(getNum(num1),getNum(num2));
        case "*":
            return multi(getNum(num1),getNum(num2));
        case "/":
            return divide(getNum(num1),getNum(num2));
        case "%":
            return modulo(getNum(num1),getNum(num2));    
    }
}
function numBtnClicked(button){
    if(lengthCheck(displays)){
        if (operator == ""){
            if (answerDisplayed){
                num1 = button.textContent;
                display(num1)
                answerDisplayed = false;
            }else{
                num1 += button.textContent;
                display(num1);
            }
        }else {
            num2 += button.textContent;
            display(num2);
        }
    }else if(operator != ""){
        num2 += button.textContent;
        display(num2);
    }
}
function dotClicked(){
    if(lengthCheck(displays)){
        if(answerDisplayed){
            num1 = "0."
            display(num1);
            answerDisplayed = false;
        } else {
            if(operator == ""){
                if(!num1.includes(".")){
                    num1 += ".";
                    display(num1);
                }
            }else {
                if(!num2.includes(".")){
                    num2 += ".";
                    display(num2);
                }
            }
        }
    }
}
function equalsClicked(){
    if(operator != "" && num1 != "" && num2 != ""){
        let answer = operation(num1, num2, operator)
        console.log(answer);
        console.log(answer.toString().length);
        if(answer.toString().length >= 9){
            if(answer > 1e100){
                return nah();
            }
            if (Math.abs(answer) > 1e10) {
                answer = answer.toExponential(2);
            }else{
                let rounded = Math.floor(answer);
                let decimal = 8 - rounded.toString().length;
                answer = answer.toFixed(decimal);
            }
            
        }
        num1 = answer.toString();
        display(num1);
        num2 = "";
        operator = "";
        answerDisplayed = true;
    }
}

function lengthCheck(leng){
    return leng.textContent.length < 9
}
function switchOp(op){
    if (op.textContent == operator && (num1 != "" && num2 != "")){
        let answer = operation(num1, num2, operation);
        if(answer.toString().length >= 9){
            if(answer > 1e100){
                return nah();
            }
            if (Math.abs(answer) > 1e10) {
                answer = answer.toExponential(2);
            }else{
                answer.toFixed(6);
            }
            
        }
        num1 = answer.toString();
        display(num1);
        answerDisplayed = true;

    } else if(op.textContent != operator){
        operator = op.textContent;
    }
}
function getNum(str){
    if (str.includes(".")){
        return parseFloat(str);
    } else{
        return parseInt(str);
    }
    
}
function cleario(){
    num1 = "";
    num2 = "";
    operator = "";
    display("0");
}
function display(content){
    displays.textContent = content;
}
function changeSign(){
    if(displays.textContent.length < 9){
        if(operator == ""){
            if(num1.includes("-")){
                num1 = num1.replace("-","");
                console.log(num1);
                display(num1);
            }else{
                if(num1 != ""){
                    num1 = "-" + num1;
                    display(num1);
                }
            }
        }else{
            if(num2 == ""){
                num2 = "-" + num1;
                display(num2);
            }else{
                if(num2.includes("-")){
                    num2 = num2.replace("-","");
                    display(num1);
                }else{
                    num2 = "-" + num2;
                    display(num1);
                }
            }
        }
    }
}
function nah(){
    display("NaN");
    answerDisplayed = true;
    num1 = "";
    num2 = "";
    operator = "";
}