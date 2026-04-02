//elements
const noducks = document.querySelectorAll(".noduckelement");
const duckimg = document.getElementById("duck");
const piglet = document.getElementById("piglet");
const button1 = document.getElementById("mybutton")
const yestexts = document.querySelectorAll("#yesducktext, #yesducktext2");
const notext = document.getElementById("noducktext");
const flatduck=
document.getElementById("flatduck");
const backbutton=
document.getElementById("backbutton");
const duckegg = document.getElementById("duckegg");
const eggbutton = document.getElementById("eggbutton");
const eggcounter = document.querySelector(".countercontainer");
const countdisplay = document.getElementById("countdisplay");
const noducktext2 = document.getElementById("noducktext2");

// Functions
function hide(noducks){
  noducks.forEach(el => el.classList.add("hidden"));
}
function show(noducks) {
  noducks.forEach(el => el.classList.remove("hidden"));
}

//function for backbuttons
function resetpage(){
  document.body.classList.remove("red-bg");
  document.body.classList.remove("rainbow-bg");
  notext.classList.add("hidden");
  yestexts.forEach(el => el.classList.add("hidden"));
  show(noducks);
  duck.classList.remove("hidden");
  flatduck.classList.add("hidden");
  backbutton.classList.add("hidden");
  duckegg.classList.add("hidden");
  eggbutton.classList.add("hidden");
  noducktext2.classList.add("hidden");
}

//Counter functions
let count = 0;

function updateCount() {
  countdisplay.innerHTML = count;
}

function increaseCount() {
  count++;
  updateCount();
}

function resetCount() {
  count = 0;
  updateCount();
}

function showcounter(){
  eggcounter.style.display = "block";
}

// No Duck
function noduckclick(){
  document.body.classList.add("red-bg")
  notext.classList.remove("hidden");
  duck.classList.add("hidden");  
  flatduck.classList.remove("hidden")
  backbutton.classList.remove("hidden");
  hide(noducks);                                                     
}

// Duck click
function duckclick(){
  document.body.classList.add("rainbow-bg")
  duckegg.classList.remove("hidden");
  noducks.forEach(el => el.classList.add("hidden"));
  yestexts.forEach(el => el.classList.remove("hidden"));
  duck.classList.add("hidden");
  eggbutton.classList.remove("hidden");
}

// Event Listens
duck.addEventListener("click", duckclick);

eggbutton.addEventListener("click", () => {
  resetpage();
  increaseCount();
  showcounter();
});

[piglet, button1].forEach (el=>{
  el.addEventListener("click", () => {
   noduckclick();
   if (count > 0) {
    noducktext2.classList.remove("hidden");
 } else {
    noducktext2.classList.add("hidden");
  }
   resetCount();
  });
});

backbutton.addEventListener("click", () => {
  resetpage();
});