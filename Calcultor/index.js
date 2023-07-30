const decimal = document.getElementById('decimal');
const signChange = document.getElementById('plus-minus-sign');
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const plus = document.getElementById('add');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const modulus = document.getElementById('modulus');
const equalsTo = document.getElementById('equalsTo');
const allClear = document.getElementById('clear-sign');

const inputWindow = document.getElementById('input');

var formula="";
allClear.addEventListener('click',()=>{
    inputWindow.value="";
    formula="";

})
one.addEventListener('click',()=>{
    
    formula+="1";
    inputWindow.value=`${formula}`;
    

})
two.addEventListener('click',()=>{
    formula+="2";
    inputWindow.value=`${formula}`;

})
three.addEventListener('click',()=>{
    formula+="3";
    inputWindow.value=`${formula}`;

})
four.addEventListener('click',()=>{
    formula+="4";
    inputWindow.value=`${formula}`;

})
five.addEventListener('click',()=>{
    formula+="5";
    inputWindow.value=`${formula}`;

})
six.addEventListener('click',()=>{
    formula+="6";
    inputWindow.value=`${formula}`;

})
seven.addEventListener('click',()=>{
    formula+="7";
    inputWindow.value=`${formula}`;

})
eight.addEventListener('click',()=>{
    formula+="8";
    inputWindow.value=`${formula}`;

})
nine.addEventListener('click',()=>{
    formula+="9";
    inputWindow.value=`${formula}`;

})
zero.addEventListener('click',()=>{
    formula+="0";
    inputWindow.value=`${formula}`;

})
decimal.addEventListener('click',()=>{
    formula+=".";
    inputWindow.value=`${formula}`;

})
plus.addEventListener('click',()=>{
    formula+="+";
    inputWindow.value=`${formula}`;

})
minus.addEventListener('click',()=>{
    formula+="-";
    inputWindow.value=`${formula}`;

})
multiply.addEventListener('click',()=>{
    formula+="x";
    inputWindow.value=`${formula}`;

})
divide.addEventListener('click',()=>{
    
    formula+="÷";
    inputWindow.value=`${formula}`;

})
modulus.addEventListener('click',()=>{
    formula+="%";
    inputWindow.value=`${formula}`;

})
signChange.addEventListener('click',()=>{
    formula=formula.slice(0,-1);
    inputWindow.value=`${formula}`;

})
equalsTo.addEventListener('click',()=>{
    if(formula.includes("x")){
        formula=formula.replace("x","*");
    }
    if(formula.includes("÷")){
        formula=formula.replace("÷","/");
    }
    let op = eval(formula);
    formula="";
    inputWindow.value=`${op}`;

})



// window.console.log(inputWindow.);