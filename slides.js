let  ImgsSlides = [
    {src: './assets/ligue para.png'},
    {src: './assets/Cardapio.png'},
    {src: './assets/Promocional.png'}
]
let Slides = document.querySelector(".IMG-Slide")
function changeImage(){
    Slides.src= ImgsSlides[Math.floor(Math.random()*ImgsSlides.length)].src;
}
setInterval(changeImage,3000)