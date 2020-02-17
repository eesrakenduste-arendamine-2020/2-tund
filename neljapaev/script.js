window.onload = function(){
    start();
}

let first;
let second;
let third;
let fourth;
let button;
let r;
let g;
let b;


function start(){
   /* first = document.querySelector('#first');
    second = document.querySelector('#second'); //document.getElementById('second');
    third = document.querySelector('#third');
    fourth = document.querySelector('#fourth');
    button = document.querySelector('#changeColor');
    button.addEventListener('click', changeColor);
    second.addEventListener('mouseover', changeColor);
    window.addEventListener('keypress', changeColor);
*/
}

function generateColor(){
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
}

function changeColor(){
    generateColor();
    first.style.backgroundColor = 'rgb('+ r +','+ g + ',' + b +')';
    generateColor();
    second.style.backgroundColor = 'rgb('+ r +','+ g + ',' + b +')';
    generateColor();
    third.style.backgroundColor = 'rgb('+ r +','+ g + ',' + b +')';
    generateColor();
    fourth.style.backgroundColor = 'rgb('+ r +','+ g + ',' + b +')';
}