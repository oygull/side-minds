
let modal = document.querySelector(".assessment-modal");
let triggers = document.querySelectorAll(".trigger");
let closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

for (let i = 0, len = triggers.length; i < len; i++) {
  triggers[i].addEventListener("click", toggleModal);
}
if (closeButton){
  closeButton.addEventListener("click", toggleModal);
}
window.addEventListener("click", windowOnClick);

//  modal 2

let modal2 = document.querySelector(".assessment-two");
let triggers2 = document.querySelectorAll(".trigger2");
let closeButton2 = document.querySelector(".close-button2");

function toggleModal2() {
  modal2.classList.toggle("show-modalTwo");
}

function windowOnClick2(event) {
  if (event.target === modal2) {
    toggleModal2();
  }
}

for (let i = 0, len = triggers2.length; i < len; i++) {
  triggers2[i].addEventListener("click", toggleModal2);
}
if (closeButton2){
  closeButton2.addEventListener("click", toggleModal2);
}
window.addEventListener("click", windowOnClick2);


// modal 3


let modal3 = document.querySelector(".services-modal");
let triggers3 = document.querySelectorAll(".trigger3");
let closeButton3 = document.querySelector(".close-button3");

function toggleModal3() {
  modal3.classList.toggle("show-modalThree");
}

function windowOnClick3(event) {
  if (event.target === modal3) {
    toggleModal3();
  }
}

for (let i = 0, len = triggers3.length; i < len; i++) {
  triggers3[i].addEventListener("click", toggleModal3);
}
if (closeButton3){
  closeButton3.addEventListener("click", toggleModal3);
}
window.addEventListener("click", windowOnClick3);



// modal 4


let modal4 = document.querySelector(".services-modal4");
let triggers4 = document.querySelectorAll(".trigger4");
let closeButton4 = document.querySelector(".close-button4");

function toggleModal4() {
  modal4.classList.toggle("show-modalFour");
}

function windowOnClick4(event) {
  if (event.target === modal4) {
    toggleModal4();
  }
}

for (let i = 0, len = triggers4.length; i < len; i++) {
  triggers4[i].addEventListener("click", toggleModal4);
}
if (closeButton4){
  closeButton4.addEventListener("click", toggleModal4);
}
window.addEventListener("click", windowOnClick4);



// modal 5


let modal5 = document.querySelector(".services-modal5");
let triggers5 = document.querySelectorAll(".trigger5");
let closeButton5 = document.querySelector(".close-button5");

function toggleModal5() {
  modal5.classList.toggle("show-modalFive");
}

function windowOnClick5(event) {
  if (event.target === modal5) {
    toggleModal5();
  }
}

for (let i = 0, len = triggers5.length; i < len; i++) {
  triggers5[i].addEventListener("click", toggleModal5);
}
if (closeButton5){
  closeButton5.addEventListener("click", toggleModal5);
}
window.addEventListener("click", windowOnClick5);



// modal 6


let modal6 = document.querySelector(".services-modal6");
let triggers6 = document.querySelectorAll(".trigger6");
let closeButton6 = document.querySelector(".close-button6");

function toggleModal6() {
  modal6.classList.toggle("show-modalSix");
}

function windowOnClick6(event) {
  if (event.target === modal6) {
    toggleModal6();
  }
}

for (let i = 0, len = triggers6.length; i < len; i++) {
  triggers6[i].addEventListener("click", toggleModal6);
}
if (closeButton6){
  closeButton6.addEventListener("click", toggleModal6);
}
window.addEventListener("click", windowOnClick6);

