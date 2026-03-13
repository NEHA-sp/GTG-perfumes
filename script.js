// ===============================
// SUBSCRIPTION TOGGLE
// ===============================

document.addEventListener("DOMContentLoaded", function () {

const subscriptionRadios =
document.querySelectorAll('input[name="subscription"]');

const singleBox = document.getElementById("singleBox");
const doubleBox = document.getElementById("doubleBox");

// Default state when page loads
singleBox.style.display = "block";
doubleBox.style.display = "none";

subscriptionRadios.forEach(function(radio){

radio.addEventListener("change", function(){

// SINGLE SUBSCRIPTION SELECTED
if(this.value === "single"){

singleBox.style.display = "block";
doubleBox.style.display = "none";

}

// DOUBLE SUBSCRIPTION SELECTED
if(this.value === "double"){

singleBox.style.display = "none";
doubleBox.style.display = "block";

}

});

});

});
const hamburger=document.querySelector(".hamburger");
const nav=document.querySelector(".nav-menu");

hamburger.onclick=()=>{
nav.classList.toggle("show");
}
function updateCart(){

let fragrance=document.querySelector('input[name="fragrance"]:checked').value;
let type=document.querySelector('input[name="subscription"]:checked').value;

document.getElementById("cartLink").href =
"https://dummycart.com/?fragrance="+fragrance+"&type="+type;

}
const perfumes = [

{
name:"Original",
image:"assets/images/original.png",
desc:"A timeless fragrance crafted for elegance and everyday confidence."
},

{
name:"Bella",
image:"assets/images/Bella.png",
desc:"Bella blends floral freshness with soft romantic notes."
},

{
name:"Daisies",
image:"assets/images/Daisies.png",
desc:"Inspired by blooming daisies, this scent is vibrant and uplifting."
},

{
name:"Arose",
image:"assets/images/Arose.png",
desc:"Arose combines warm rose tones with a luxurious modern finish."
}

];

let index = 0;

const image = document.getElementById("mainPerfume");
const title = document.getElementById("perfumeName");
const description = document.getElementById("perfumeDescription");

function showPerfume(i){

index = i;

image.src = perfumes[index].image;
title.innerText = perfumes[index].name;
description.innerText = perfumes[index].desc;

}

function nextImage(){

index++;

if(index >= perfumes.length){
index = 0;
}

showPerfume(index);

}

function prevImage(){

index--;

if(index < 0){
index = perfumes.length - 1;
}

showPerfume(index);

}

function setImage(i){
showPerfume(i);
}