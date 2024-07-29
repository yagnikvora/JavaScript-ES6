a = [35, 57, 23, 97, 45, 98];

function display() {
    document.getElementById('print').innerHTML = a;
}
display();
function pushA() {
    a.push(document.getElementById('input').value);
    display();
}
function popA() {
    a.pop();
    display();
}
function unshiftA() {
    a.unshift(document.getElementById('input').value);
    display();
}
function shiftA() {
    a.shift();
    display();
}

function sortA() {
    a.sort();
    display();
}

function reverseA() {
    a.reverse();
    display();
}

function sliceA() {
    a = a.slice(document.getElementById('start').value, document.getElementById('end').value);
    display();
}

function joinA() {
    document.getElementById('print').innerHTML = a.join(document.getElementById('joinElement').value);
}