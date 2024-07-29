a = [42, 64, 24, 42, 57, 45, 87];

function display() {
    document.getElementById('print').innerHTML = a;
}
display();

const includesA = () => {
    document.getElementById('print2').innerHTML = "";
    const element = a.includes(parseInt(document.getElementById('input').value))
    document.getElementById('print2').innerHTML = element == false ? parseInt(document.getElementById('input').value) + " not Included" : parseInt(document.getElementById('input').value) + " included";
    display();
}

const findA = () => {
    document.getElementById('print2').innerHTML = "";
    const element = a.find(e => { e >= parseInt(document.getElementById('input').value) })
    document.getElementById('print2').innerHTML = element == undefined ? "Not found" : "First Element greater than " + document.getElementById('input').value + " is " + element
    display();
}

const someA = () => {
    document.getElementById('print2').innerHTML = "";
    const element = a.some(e => e > parseInt(document.getElementById('input').value))
    document.getElementById('print2').innerHTML = element == false ? "No elements Greater" : "Yes, at least one element is Greater"
    display();
}

const everyA = () => {
    document.getElementById('print2').innerHTML = "";
    const element = a.every(e => e > parseInt(document.getElementById('input').value))
    document.getElementById('print2').innerHTML = element == false ? "at least one element is smaller" : "Yes, all elements are Greater"
    display();
}

const filterA = () => {
    document.getElementById('print2').innerHTML = "";
    const element = a.filter(e => e > parseInt(document.getElementById('input').value))
    document.getElementById('print2').innerHTML = element.length > 0 ? "Elements greater than " + document.getElementById('input').value + " is " + element : "No greate Element found"
    display();
}

const foreEachA = () => {
    document.getElementById('print2').innerHTML = "All elements multiply by " + parseFloat(document.getElementById('input').value) + "  ";
    a.forEach((e, i) => { a[i] = e * parseFloat(document.getElementById('input').value) })
    document.getElementById('print').innerHTML = a.join('<br>');
    document.getElementById('print3').innerHTML = "<br><br>forEach() perform operation on original array do not create or return new array";

}

const reduceA = () => {
    document.getElementById('print2').innerHTML = "Sum of array is " + a.reduce((accumulator, currval) => accumulator + currval)
    display();
}

const mapA = () => {
    document.getElementById('print2').innerHTML = a.map(e => e / parseFloat(document.getElementById('input').value)).join('<br>');
    display();
    document.getElementById('print3').innerHTML = "<br><br>map() perform operation on original array and create or return a new array";
}