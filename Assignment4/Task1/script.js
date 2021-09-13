const element = document.querySelector("h1")
const initial = element.innerText

element.addEventListener("mouseover", ()=>{
  element.style.color = "green"
  element.innerText = "Hello to a beautiful world"
  


})
element.addEventListener("mouseout", ()=>{
 
     element.style.color = ""
     element.innerText = initial
    
})


