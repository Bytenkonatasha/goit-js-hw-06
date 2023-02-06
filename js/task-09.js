const colorText = document.querySelector('.color'); 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
  .toString(16)
  .padStart(6, 0)}`
 }
 const btn = document.querySelector(".change-color");

 btn.addEventListener('click', () => {
  colorText.textContent = getRandomHexColor()
  document.body.style.backgroundColor = colorText.textContent; 
 });
