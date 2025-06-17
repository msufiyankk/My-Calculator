console.log("Helo");
const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = '';
}
function backDisplay(){
    display.value = display.value.slice(0, -1);
}
function displaySum(){
    try{
        display.value = eval(display.value)
    }
    catch{
        display.value = "Synthax Error"
    }
}