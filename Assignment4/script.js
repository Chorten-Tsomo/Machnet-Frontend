//adding elements to the page


//const body = document.body
//body.append("Hello world","Bye") 
// you can also append multiple string with the use of append

//if we want to use appendChild we have to use node it will not take string
// appenChild only append  elements like div, tags, anchortags etc.



//creating elements
/*
const body = document.body
const div = document.createElement("div")
div.innerText = "Hello World"

body.append(div)
*/

//Modifying Elemt text
/*
const body = document.body
const div = document.createElement("div")
//div.innerText = "Hello World"
div.textContent = "Hello World 2"

body.append(div)
*/
/*
const div = document.querySelector("div")

console.log(div.textContent) // text content print out both visible and hidden content
// text content shows the elements with all the indentation in html and showing all the visible and invisible element
console.log(div.innerText) //inner text print out the visible content
//where as innter text represent in the form of html page
*/

//Modifying html inside the element
/*
const body = document.body
const div = document.createElement("div")
const strong = document.createElement("strong")
strong.innerText = "Hello World 2"
div.append(strong)

body.append(div)
*/

//Removing Elements
/*
const body = document.body
const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

spanBye.remove()
div.append(spanBye)
*/

//Modifying Elements Attributes
/*
const body = document.body
const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")


//console.log(spanHi.setAttribute("id",  "changedid"))
//spanHi.removeAttribute("id")//It is for removble of attribute

//console.log(spanHi.dataset.test)
//spanHi.dataset.newName = "hi"
*/

//Modiying Element Classes 
/*
const body = document.body
const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

//spanHi.classList.remove("hi1")
spanHi.classList.toggle("hi3",true) //toggle remove it it it exist or add if it doesnot exist
*/

//Modifying Element Style
/*
const body = document.body
const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

spanHi.style.color = "red"
*/







