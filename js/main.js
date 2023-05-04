// Burger Items
const iconMenu = document.querySelector('.menu-icon')
const menuBody = document.querySelector('.menu-body')

// Scroll To Buttons 
const homeBtn = document.querySelectorAll('.home-button')
const aboutUsBtn = document.querySelectorAll('.about-us-button')
const teamBtn = document.querySelectorAll('.team-button')
const vacBtn = document.querySelectorAll('.vac-button')
const benefitsBtn = document.querySelectorAll('.benefits-button')

// Scroll To Blocks
const homeBlock = document.querySelector('.header')
const aboutUsBlock = document.querySelector('.about-us-block')
const teamBlock = document.querySelector('.team-block')
const vacBlock = document.querySelector('.resume-block')
const benefitsBlock = document.querySelector('.benefits-block')

// Popup

const popup = document.querySelector('.popup-wrapper')
const popupBody = document.querySelector('.popup-body')

// Slider button 
const sliderButtons = document.querySelectorAll('.team-slide-button')

// Register button 

const registerButtons = document.querySelectorAll('.register-button')

// Popup handler

if (registerButtons) {
    registerButtons.forEach(e => {
        e.addEventListener('click', () => {
            popup.classList.toggle('show-popup')
        })
    })
}

document.addEventListener('click', (e) => {
    if(e.target === popup) {
        popup.classList.toggle('show-popup')
    }
})

// Scroll To Handler
function scrollingToBlock(btn, block) {
    btn.forEach(e => {
        e.addEventListener('click', () => {
            block.scrollIntoView({ block: "start", behavior: "smooth" })
            document.body.classList.remove('lock')
            iconMenu.classList.remove('activem')
            menuBody.classList.remove('activem')
        })
    })
}
// ScrollTo listeners

scrollingToBlock(homeBtn, homeBlock)
scrollingToBlock(aboutUsBtn, aboutUsBlock)
scrollingToBlock(teamBtn, teamBlock)
scrollingToBlock(vacBtn, vacBlock)
scrollingToBlock(benefitsBtn, benefitsBlock)

// Slider tiles logic
if(sliderButtons) {
    sliderButtons.forEach(e => {
        e.addEventListener('click', ()=> {
            e.nextElementSibling.classList.toggle('hide-slide-bottom')
            e.classList.toggle('team-slide-button-rotate')
        })
    })
}

// Burger logic toggler 
if (iconMenu) {
    iconMenu.addEventListener('click', (e) => {
        document.body.classList.toggle('lock')
        iconMenu.classList.toggle('activem')
        menuBody.classList.toggle('activem')
    })
}