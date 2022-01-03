const toggle = document.getElementById("toggle");
const body = document.querySelector("body");
const topTitle = document.getElementsByClassName("top-title");
const bottomTitle = document.getElementsByClassName("bottom-title");
const p = document.querySelector("p");
const hr = document.querySelector("hr");
const label = document.querySelector("label");
const box = document.getElementsByClassName("box");
const smallBox = document.getElementsByClassName("small-box");
const name = document.getElementsByClassName("name");
const number = document.getElementsByClassName("number");
const h2 = document.querySelector("h2");



toggle.onclick = function() {
    toggle.classList.toggle("active");
    body.classList.toggle("active");
    p.classList.toggle("active");
    hr.classList.toggle("active");
    label.classList.toggle("active");
    h2.classList.toggle("active");
    
    for(let i = 0; i < topTitle.length; i++) {
        topTitle[i].classList.toggle("active");
    }

    for(let i = 0; i < bottomTitle.length; i++) {
        bottomTitle[i].classList.toggle("active");
    }

    for(let i = 0; i < box.length; i++) {
        box[i].classList.toggle("active");
    }

    for(let i = 0; i < smallBox.length; i++) {
        smallBox[i].classList.toggle("active");
    }

    for(let i = 0; i < name.length; i++) {
        name[i].classList.toggle("active");
    }

    for(let i = 0; i < number.length; i++) {
        number[i].classList.toggle("active");
    }
}
