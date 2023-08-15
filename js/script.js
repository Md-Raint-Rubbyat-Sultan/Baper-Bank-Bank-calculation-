function amountCalculator(type, isTrue) {
    // input field
    const inputField = document.getElementById(type + "-input");
    const inputValue = inputTextToNumber(inputField.value);

    // deposit or withdraw field
    const currentAmount = document.getElementById(type + "-amount");
    const currentAmountValue = inputTextToNumber(currentAmount.innerText);

    // balance filed
    const balanceAmount = document.getElementById("balance-amount");
    const balanceAmountValue = inputTextToNumber(balanceAmount.innerText);

    inputField.value = "";

    // validation
    if (isNaN(inputValue) || inputValue < 0) {
        alert("Please input a valid amount. Negative numbers are also invalid");
        return;
    }

    if (isTrue === false) {
        if (inputValue > balanceAmountValue) {
            alert("Your baper bank has not enough money!");
            return;
        }
    }

    // updating deposit or withdraw amount
    const newAmount = (currentAmountValue + inputValue);

    currentAmount.innerText = newAmount.toFixed(2);

    // updating balance amount
    if (isTrue) {
        balanceAmount.innerText = (balanceAmountValue + inputValue).toFixed(2);
    } else {
        balanceAmount.innerText = (balanceAmountValue - inputValue).toFixed(2);
    }
}

function inputTextToNumber(input) {
    const inputTextToNumber = parseFloat(input);
    return inputTextToNumber;
}


document.getElementById("btn-deposit").addEventListener("click", function () {
    amountCalculator("deposit", true);
});

document.getElementById("btn-withdraw").addEventListener("click", function () {
    amountCalculator("withdraw", false);
});