const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')
const container = document.querySelector('.images')
let counter = 0
prevBtn.addEventListener('click', prevSlide)
nextBtn.addEventListener('click', nextSlide)
function nextSlide(){
    counter++
    container.style.backgroundImage = `url(/Users/kyzen/Library/Mobile Documents/com~apple~CloudDocs/Basic Java Projects/Slider/Bcg-$){counter}.jpeg`
}