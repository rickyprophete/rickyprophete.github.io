const num = new URLSearchParams(window.location.search);
const ccNum = Array.from(String(num.get('cc-num')), Number);
let result = document.getElementById("result");
console.log(ccNum);

function validateCred(arr) {
    let N = arr.length;
    let temp = 0;
    let parity = N % 2;
    let checkDigit = arr[N - 1];
    let sum = 0;
    sum += checkDigit;
    for (let i = N - 2; i >= 0; i--) {
        temp = arr[i];
        if (i % 2 == parity) {
            temp *= 2;
            if (temp > 9) {
                temp -= 9;
            }
        }
        sum += temp;
    }
    return sum % 10 == 0;
}
let isValid = validateCred(ccNum) ? "Valid" : "Invalid";
let statement = `<p>Results: ${ccNum} is ${isValid} <a href="index.html">Start Over!</a></p>`;
result.innerHTML = statement;