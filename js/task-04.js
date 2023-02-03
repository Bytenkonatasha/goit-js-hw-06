const decrtBtn = document.querySelector("[data-action='decrement']");
const incrtBtn = document.querySelector("[data-action='increment']");
const valueNum = document.querySelector("#value");
let counterValue = 0;
decrtBtn.addEventListener("click", handleClickDecrBtn);
incrtBtn.addEventListener("click", handleClickIncrBtn);
function handleClickDecrBtn() {
    counterValue -= 1;
    return addMarkup(counterValue);
}
function handleClickIncrBtn() {
    counterValue += 1;
    return addMarkup(counterValue);
}
function addMarkup(value) {
    return valueNum.innerHTML = `${value}`;
}