let  memoryNewNumber = false;
const display = document.querySelector('.calc .display');
document.querySelectorAll('.calc .digits button, .calc .opers button')
    .forEach( button => button.addEventListener('click', digitOperPressed));

function digitOperPressed(event) {
    const btnText = event.target.innerText;
    display.value += btnText;
}

document.querySelector('.calc .eq ')
    .addEventListener('click', eqPressed);


function eqPressed() {
    let calculate = eval(display.value);
    display.value = calculate === Infinity ? dontZero('Dont divide by 0') : calculate;
}

document.querySelector('.reset')
    .addEventListener('click', resetPressed);

function resetPressed() {
    document.querySelector('.display').value = " ";
}

function dontZero(message) {
    return message;
}
document.querySelector('.backspace')
    .addEventListener('click',backspaceFnc);

function backspaceFnc() {
    const backSpace = display.value;
    display.value = backSpace.slice(0,-1);
}

