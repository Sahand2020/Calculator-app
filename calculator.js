const result = document.getElementById("result");
const number = document.querySelectorAll(".number");

function calculate() {
    result.value = eval(result.value.replaceAll("x", "*"));
    if (
        result.value === "undefined" ||
        result.value === "NaN" ||
        result.value === "Infinity"
    ) {
        result.value = "";
    }
}

function clickHandler() {
    if (this.id == "") {
        let operator = this.innerText;

        if (
            "/+x-%.".indexOf(result.value.charAt(result.value.length - 1)) !==
                -1 &&
            "/+x-%.".indexOf(operator) !== -1
        ) {
            result.value =
                result.value.substr(0, result.value.length - 1) + operator;
        } else {
            result.value += operator;
            if (result.value.length == 19) {
                result.value = operator;
            }
        }
    } else {
        if (this.id == "clear-all") {
            result.value = "";
        } else if (this.id == "backspace") {
            result.value = result.value.substr(0, result.value.length - 1);
        } else {
            calculate();
        }
    }
}

number.forEach((item) => {
    item.addEventListener("click", clickHandler);
});
