const firstNum = document.querySelector('.firstNum');
const secondNum = document.querySelector('.secondNum');
const action = document.querySelector('select');
const resultField = document.querySelector('.result');
const resultBut = document.querySelector('.resultBut');

resultBut.addEventListener('click', () => {
    if(firstNum.value != '' && secondNum.value != ''){
        switch(action.value){
            case '+':
                resultField.innerText = +firstNum.value + +secondNum.value;
                break;
            case '-':
                resultField.innerText = +firstNum.value - +secondNum.value;
                break;
            case '*':
                resultField.innerText = +firstNum.value * +secondNum.value;
                break;
            case '/':
                resultField.innerText = +firstNum.value / +secondNum.value;
                break;
        } 
    }
    else{
        resultField.innerText = 'err'
    }
})


