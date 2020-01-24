console.log('this is a digital counter')
//variables
const digit = document.querySelector('.digit')
const add = document.querySelector('.add')
let number = 0;

function counter(number) {
  if(number === 0) {
    digit.className = "digit zero"
  } else if(number === 1) {
    digit.className = "digit one"
  } else if(number === 2) {
    digit.className = "digit two"
  } else if(number === 3) {
    digit.className = "digit three"
  } else if(number === 4) {
    digit.className = "digit four"
  } else if(number === 5) {
    digit.className = "digit five"
  } else if(number === 6) {
    digit.className = "digit six"
  } else if(number === 7) {
    digit.className = "digit seven"
  } else if(number === 8) {
    digit.className = "digit eight"
  } else if(number === 9) {
    digit.className = "digit nine"
  }
}

//event listeners
document.addEventListener('DOMcontentloaded', counter(number))
add.addEventListener('click', (e) => {
  number++
  counter(number)
})
