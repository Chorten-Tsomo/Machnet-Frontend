const radiobutton = document.querySelectorAll(".radiobutton")
const radio = document.querySelectorAll(".radio")

const removeRemaining = (index) =>{
    for (let x=0; x<3; x++){
        if(x !== index){

            radiobutton[x].style.display = "none"

        }
    }
}

for (let x=0; x<3; x++){
    radio[x].addEventListener("click", () =>{
        removeRemaining(x)
    })
}