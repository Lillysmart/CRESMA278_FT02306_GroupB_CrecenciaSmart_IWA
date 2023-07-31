//global const
const MAX_NUMBER=15
const MIN_NUMBER= -5
const STEP_AMOUNT= 5;

const number = document.querySelector ('[data-key="number"]')
const subtract =document.querySelector ('[data-key="subtract"]')
const add =document.querySelector ('[data-key="add"]')

//Say this second
const subtractHandler =() => {
    newValue=parseInt(number.value)-STEP_AMOUNT //changing string to a number
    number.value=newValue 

    if (add.disabled ===true ){
        add.disabled=false
    }

    if (newValue <= MIN_NUMBER) {
        subtract.disabled=true
    
}
}
const addHandler =() =>{
    newValue=parseInt(number.value) +STEP_AMOUNT
    number.value= newValue //first code

 if ( subtract.disabled ===true) {
      subtract.disabled=false
 }


    if (newValue >= MAX_NUMBER) {
        add.disabled=true
    }
}

// say this first 
subtract.addEventListener('click',subtractHandler)
add.addEventListener('click',addHandler)
