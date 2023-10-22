const calculator = document.querySelectorAll('button');
const number = document.querySelector('.calcNumber');

let calculation = [];
let accumalativecalculation; 

function calculate(button) {
     const value = button.textContent
    if (value === "C") {
        calculation = [];
        number.textContent = ".";
    } else if (value === "=") {
       console.log(accumalativecalculation);
        number.textcontent = eval(accumalativecalculation);
    }  else {
        calculation.push(value);
        accumalativecalculation= calculation.join ('');
        number.textContent = accumalativecalculation;
    }
}

calculator.forEach(button => button.addEventListener('click', () => calculate(button)));


  function getInputValue() {
      var inputVal = document.getElementById("myInput"). value;
    alert(inputVal) ;
     }