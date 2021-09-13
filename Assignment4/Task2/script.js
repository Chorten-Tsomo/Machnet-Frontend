const table = document.querySelector("table")
const input = document.querySelector("input")
const btn = document.querySelector("button")

btn.addEventListener("click", () =>{
    value = input.value;

    const tr = document.createElement("tr")
    table.append(tr)
    const th = document.createElement("th")
    tr.append(th)
    th.innerText = value;

})