// Burger Items
const iconMenu = document.querySelector('.menu-icon')
const menuBody = document.querySelector('.menu-body')

// Header Scrolling Position
let scrollOff = window.pageYOffset
let fixedHeader = document.querySelector('.header-menu')

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
const closeCross = document.querySelector('.popup-close-cross')
const popup = document.querySelector('.popup-wrapper')
const popupBody = document.querySelector('.popup-body')
const form = document.querySelector('.form')
const submitBtn = document.querySelector('.form-submit-button')

// Slider button 
const sliderButtons = document.querySelectorAll('.team-slide-button')

// Register button 
const registerButtons = document.querySelectorAll('.register-button')

// Popup handler

closeCross.addEventListener('click', ()=> {
    popup.classList.toggle('show-popup')
})

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
            block.scrollIntoView({ block: "center", behavior: "smooth" })
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

// Header Scrolling Handler
scrollOff = 0
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        fixedHeader.classList.add('header-menu-fixed')
    } else {
        fixedHeader.classList.remove('header-menu-fixed')
    }
})

// Form handler
// submitBtn.addEventListener('click', () => {
//     submitBtn.preventDefault();
//     form.addEventListener
// })

form.addEventListener('submit', (e) => {
    console.log('submitted')
    // e.preventDefault();
})