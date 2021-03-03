import {calculate} from "./calculate.js";

function actie(el) {
    const uitkomst = calculate(parseFloat(document.getElementById('a').value),
        parseFloat(document.getElementById('b').value), el.value);
    document.getElementById('result').innerHTML = uitkomst;
}

const el = document.getElementById('operator');
el.addEventListener('change', function (){
    actie(this);
});