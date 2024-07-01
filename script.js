const buttonEl = document.querySelectorAll ("button");
const inputFieldE1 = document.getElementById("result");

for (let i = 0; i < buttonEl.length; i++){
    buttonEl[i].addEventListener("click", ()=> {
        const buttonvalue = (buttonEl[i].textContent);
        if (buttonvalue === "C"){
            clearResult()
        } else if (buttonvalue === "="){
            calculateResult()
        } else {
            appendValue(buttonvalue);
        }
    });
}

function clearResult (){
    inputFieldE1.value = "";
}

function calculateResult(){
    inputFieldE1.value = eval(inputFieldE1.value);
}

function appendValue(buttonvalue){
    inputFieldE1.value +=  buttonvalue;
    // inputFieldE1.value = inputFieldE1.value + buttonvalue;
}