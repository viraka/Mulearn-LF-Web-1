
var btn = document.querySelector('#btn');
var in1 = document.querySelector('#num1');
var in2 = document.querySelector('#num2');
var ans = document.getElementById('num3');

function checknum(event){
    isNaN(event.key) ? event.preventDefault() : '';
}

btn.addEventListener('click', () =>{
    ans.value = (parseInt(in1.value) + parseInt(in2.value)).toString();
});