let input = document.querySelectorAll('type')

let weight = document.querySelector('#w')
let height = document.querySelector('#h')

let btn = document.querySelector('#calc')
let btn2 = document.querySelector('#clear')

let answer = document.querySelector('#answer')
let result = document.querySelector('#result')

function calc() {
    answer.value = (weight.value / (height.value**2)).toFixed(2)
    if (answer.value < 18.5 ) {
        result.innerText = 'Underweight'
    } else if (answer.value == 18.5 || answer.value <= 24.9) {
        result.innerText = 'Normal weight'

    } else if (answer.value == 25 || answer.value <= 29.9){
        result.innerText = 'Overweight'
    } else{
        result.innerText = 'Obese'
    }
}

function clear() {
    answer.value = " "
    weight.value = " "
    height.value = " "
    result.innerText = " "

}

btn.addEventListener('click', calc)

btn2.addEventListener('click',clear)



