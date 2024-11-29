


let display = document.getElementById("result")

const addToScreen = (value)=>{
    display.innerHTML = display.innerHTML + value
}

const clearScreen = ()=>{
    display.innerHTML = " "
}


const calculate = ()=>{
    display.innerHTML = eval(display.innerHTML)
}