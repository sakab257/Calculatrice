const calcInput = document.getElementById("calcInput");

function clearAll(){
    calcInput.value = "";
}

function appendToInput(input){
    calcInput.value += input;
}

function calculate(){
    try{
        calcInput.value = Math.round(eval(calcInput.value).toFixed(5)*1e10)/1e10;
    } catch(e){
        calcInput.value = "Erreur, cliquez sur C";
    }
}

function changeSign(){
    if(calcInput.value !== ""){
        calcInput.value = calcInput.value * -1;
    }
}

function percentage(){
    if(calcInput.value !== ""){
        calcInput.value = calcInput.value / 100;
    }
}