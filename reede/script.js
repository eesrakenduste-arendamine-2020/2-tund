window.onload = function(){
    start();
}

let button;
let first;
let second;
let third;
let fourth;
let r;
let g;
let b;
let massiiv = ['esimene', 'teine', 'kolmas', 'neljas'];

function start(){
    button = document.querySelector('#changeColor');
    first = document.querySelector('#first');
    second = document.querySelector('#second');
    third = document.querySelector('#third');
    fourth = document.querySelector('#fourth');

    button.addEventListener('click', changeColor);
    window.addEventListener('keypress', changeColor);
    fourth.addEventListener('mousemove', changeColor);

}

function changeColor(){
    console.log('klikkisin nupul');
    generateColor()
    first.style.backgroundColor = 'rgb('+ r +','+ g +',' + b + ')';
    generateColor()
    second.style.backgroundColor = 'rgb('+ r +','+ g +',' + b + ')';
    generateColor()
    third.style.backgroundColor = 'rgb('+ r +','+ g +',' + b + ')';
    generateColor()
    fourth.style.backgroundColor = 'rgb('+ r +','+ g +',' + b + ')';
    first.style.height = "200px"

    printArray();
}


function printArray(){
    let text = '<ul>';
    for(let i = 0; i < massiiv.length; i++){
        text += '<li>' + massiiv[i] + '</li>';
        //text += massiiv[i];
        //text += '</li>';
    }
    text += '</ul>';
    second.innerHTML = text;
}

function generateColor(){
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
}