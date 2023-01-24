const variations = document.getElementById("variations");
const variationValueList = document.getElementById("variation-value-list");
const list = document.getElementById("list");
const addValue = document.getElementById("add-value");
const variationValue = document.getElementsByClassName("variation-value");
const removeValue = document.querySelectorAll(".remove-value");

addValue.addEventListener("click" , e =>{
    let li = document.createElement("li")
    let input = document.createElement("input")
    let span = document.createElement("span")
    span.style.marginLeft = "5px"
    span.innerHTML = "&times;"
    span.setAttribute("class", "remove-value")
    li.style.display = "block"
    input.setAttribute("type", "text")
    input.setAttribute("placeholder", "Variation Value")
    input.className = "variation-value"

    list.append(li)
    li.append(input)
    li.append(span)

    const removeValue = document.querySelectorAll(".remove-value");
    for(let i = 0; i < removeValue.length ; i++){
        removeValue[i].addEventListener("click",function(e){
            e.target.parentElement.remove();
        });
    }
})
