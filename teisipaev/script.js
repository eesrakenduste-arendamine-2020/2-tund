window.onload = function(){
    start();

}
let someText = "siia vahele tekst";
let button;
let first;
let second;
let elements = ['first', 'second', 'third', 'fourth'];
let text;
function start(){
    button = document.querySelector("#changeColorButton");
    first = document.querySelector("#first");
    second = document.querySelector("#second");
    window.addEventListener('keypress', changeColor);
    button.addEventListener('click', changeColor);
    console.log(elements.length);
    console.log(elements[0]);
    console.log(elements.sort());
    printArray();
}

function changeColor(){
    const r = Math.round(Math.random()*255);
    const g = Math.round(Math.random()*255);
    const b = Math.round(Math.random()*255);

    first.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    second.style.backgroundColor = 'rgb('+r+','+g+','+b+')';

}

function printArray(){
    text = '<ul>'

    for(let i = 0; i < elements.length; i++){
        text +='<li>'+ elements[i] +'</li>';
    }

    text +='</ul>'
    console.log(text);
    second.innerHTML = text;
}