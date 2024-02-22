function generatePoem(event){
event.preventDefault();
new Typewriter('#poem', {
    strings: "ha ha",
    autoStart: true,
    delay:1,
    cursor:"",
  });
}
let poemElememtForm =document.querySelector("#poem-generator");
poemElememtForm.addEventListener("submit", generatePoem);