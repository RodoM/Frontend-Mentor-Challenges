const bill = document.getElementById("bill");
const tipCustom = document.getElementById("tip-custom");
const tipButtons = document.querySelectorAll(".tips")
const people = document.getElementById("people");
const results = document.querySelectorAll(".amount");
const resetButton = document.querySelector(".reset");
const errorMsg = document.querySelector("small");

bill.addEventListener("input", setBillAmount);
tipCustom.addEventListener("input", setTipAmount);
tipButtons.forEach(button => {
    button.addEventListener("click", handleClick);
})
people.addEventListener("input", setPeopleNumber);
resetButton.addEventListener("click", reset);

let billValue = 0.0;
let tipValue = 0.15;
let peopleValue = 1;

function setBillAmount() {
    if(bill.value.includes(",")) {
        bill.value = bill.value.replace(",", ".");
    }
    billValue = parseFloat(bill.value);
    calculateTip();
    // console.log(bill.value)
}

function setTipAmount() {
    tipValue = parseFloat(tipCustom.value / 100);

    tipButtons.forEach(button => {
        button.classList.remove("tip-active");
    })
    if(tipCustom.value !== "") {
        calculateTip();
    }
    // console.log(tipValue);
}

function handleClick() {
    tipButtons.forEach(button => {
        button.classList.remove("tip-active");

        if(event.target.innerHTML == button.innerHTML) {
            button.classList.add("tip-active");
            tipValue = parseFloat(button.innerHTML) / 100;
        }
    })

    tipCustom.value = "";
    calculateTip();
    // console.log(tipValue);
}

function setPeopleNumber() {
    peopleValue = parseFloat(people.value);

    if (peopleValue <= 0) {
        errorMsg.classList.add("error-msg");
        setTimeout
    } else {
        errorMsg.classList.remove("error-msg");
    }

    calculateTip();
    // console.log(peopleValue);
}

function calculateTip() {
    if (peopleValue >= 1) {
        let tipAmount = billValue * tipValue / peopleValue;
        let totalAmount = billValue * (tipValue + 1) / peopleValue;
        results[0].innerHTML = "$" + tipAmount.toFixed(2);
        results[1].innerHTML = "$" + totalAmount.toFixed(2);
    }
}

function reset() {
    bill.value = 0;
    setBillAmount();

    tipButtons[2].click();

    people.value = 1;
    setPeopleNumber();
}