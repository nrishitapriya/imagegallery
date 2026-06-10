const images = document.querySelectorAll(".gallery img");

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

images.forEach((img,index)=>{

img.addEventListener("click",()=>{

current=index;

showImage();

lightbox.style.display="flex";

});

});

function showImage(){
lightboxImg.src=images[current].src;
}

closeBtn.addEventListener("click",()=>{

lightbox.style.display="none";

});

nextBtn.addEventListener("click",()=>{

current=(current+1)%images.length;

showImage();

});

prevBtn.addEventListener("click",()=>{

current=(current-1+images.length)%images.length;

showImage();

});

function filterImages(category){

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

if(category==="all"){
card.style.display="block";
}
else if(card.classList.contains(category)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

}