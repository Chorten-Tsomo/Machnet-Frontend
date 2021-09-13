const length = document.querySelector(".length")
const breadth = document.querySelector(".breadth")
const btn = document.querySelector(".btn")


btn.addEventListener("click", areaGot) 
function areaGot(){
let area = length.value * breadth.value
btn.replaceWith("The area is:" +area)

    
    
}

