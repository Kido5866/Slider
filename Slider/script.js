const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')
const container = document.querySelector('.images')
let counter = 0
prevBtn.addEventListener('click', prevSlide)
nextBtn.addEventListener('click', nextSlide)
function nextSlide(){
    if(counter === 4){
        counter = -1;
    }
    counter++
    container.style.backgroundImage = `url(./BCG-{counter}.jpeg)`
}
function prevSlide(){
    if(counter === 0){
        counter = 5;
    }
    counter++
    container.style.backgroundImage = `url(./BCG-{counter}.jpeg)`
}