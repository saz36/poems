function displayPoem(response){
    console.log("poem start");
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay:1,
        cursor:"",
      });
    }

function generatePoem(event){
event.preventDefault();

let inputInstructions= document.querySelector("#input-user");
let apiKey = `ccedafe30c0o08ea49bb7fb493t06576`;
let prompt =`user instructions: Generate a poem about ${inputInstructions.value}`;
let context = "be kind and polite give maximum 5 lines and seperate with <br />";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class = "blink"> Generating poem about ${inputInstructions.value}</div>`;
console.log("poem start");
console.log(`prompt: ${prompt}`)
console.log(`prompt: ${context}`)
axios.get(apiUrl).then(displayPoem);
}

let poemElememtForm =document.querySelector("#poem-generator");
poemElememtForm.addEventListener("submit", generatePoem);
