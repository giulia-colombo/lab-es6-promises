// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

let mashedPotatoesEl = document.querySelector("#mashedPotatoes");
let steakEl = document.querySelector("#steak");
let brusselsSproutsEl = document.querySelector("#brusselsSprouts");
let broccoliEl = document.querySelector("#broccoli");

// Out of sync
/*   getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error)); */



// Iteration 1 - make mashed potatoes using callbacks

getInstruction("mashedPotatoes", 0, (step0) =>{ 
  mashedPotatoesEl.innerHTML += `<li>${step0}</li>`,  
  getInstruction("mashedPotatoes", 1, (step1) => {
    mashedPotatoesEl.innerHTML += `<li>${step1}</li>`,
    getInstruction("mashedPotatoes", 2, (step2) => {
      mashedPotatoesEl.innerHTML += `<li>${step2}</li>`,
      getInstruction("mashedPotatoes", 3, (step3) => {
        mashedPotatoesEl.innerHTML += `<li>${step3}</li>`,
        getInstruction("mashedPotatoes", 4, (step4) => {
          mashedPotatoesEl.innerHTML += `<li>${step4}</li>`
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

// function foodIsReady(DOMElement, recipe) {
//   DOMElement.innerHTML += `<li>${recipe} is ready!</li>`
// }

// Iteration 2 - using promises
obtainInstruction("steak", 0)
  .then((step1) => steakEl.innerHTML += `<li>${step1}</li>`
  
  .then((step2) => steakEl.innerHTML += `<li>${step2}</li>`)
  .then(() => steakEl.innerHTML += "<li>Stake is ready!</li>")
  .catch((error) => console.log(error));

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...