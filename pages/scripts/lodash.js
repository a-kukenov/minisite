const lodash = require('lodash');

const array = document.querySelector('.array');
const action = document.querySelector('select');
const resultField = document.querySelector('.result');
const resultBut = document.querySelector('.resultBut');
let resultArr;

resultBut.addEventListener('click', () => {
    if(array.value != ''){
        resultArr = array.value.split('').filter((elem) => {
            return elem != ' '
        })
        switch(action.value){
            case 'sumBy':
                resultField.innerText = lodash.sum(array);
                break;
            case 'head':
                // resultField.innerText = +firstNum.value + +secondNum.value;
                break;
            case 'uniqBy':
                // resultField.innerText = +firstNum.value + +secondNum.value;
                break;
            case 'isEmpty':
                // resultField.innerText = +firstNum.value + +secondNum.value;
                break;    
        } 
    }
    else{
        resultField.innerText = 'err'
    }
})


