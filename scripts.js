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

// Functions
function hide(noducks){
  noducks.forEach(el => el.classList.add("hidden"));
}
function show(noducks) {
  noducks.forEach(el => el.classList.remove("hidden"));
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
  document.body.classList.toggle("rainbow-bg")
  duck.classList.toggle("big");
  noducks.forEach(el => el.classList.toggle("hidden"));
  yestexts.forEach(el => el.classList.toggle("hidden"));
}

// Back button
function resetpage(){
  document.body.classList.remove("red-bg");
  notext.classList.add("hidden");
  show(noducks);
  duck.classList.remove("hidden");
  flatduck.classList.add("hidden");
  backbutton.classList.add("hidden");
}
// Event Listens
duck.addEventListener("click", duckclick);

[piglet, button1].forEach (el=>{
  el.addEventListener("click",noduckclick);
});

backbutton.addEventListener("click",resetpage);
