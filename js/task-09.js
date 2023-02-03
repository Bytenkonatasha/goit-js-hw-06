const color = document.querySelector(`.change-color`);
const colorText = document.querySelector(`.color`);
color.addEventListener(`click`, getRandomHexColor);
function getRandomHexColor() {
  colorText.textContent = document.body.style.backgroundColor;
  return (document.body.style.background = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`);
}
