const inputNew = document.querySelector("#font-size-control");
    const text = document.querySelector("#text");


inputNew.addEventListener("input",
 function (){
    text.style.fontSize = inputNew.value + `px`;
    
});
  

