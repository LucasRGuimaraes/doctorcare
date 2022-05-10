window.addEventListener('scroll', onScroll)
const navButton = document.querySelector('#navButton')
const body = document.querySelector('body')
var menuButtonController = 0 // 0 = menu     1 = menu-expanded

const navButtonIsActive = () => {
  if (menuButtonController === 0) {
    navButton.classList.add('active')
    body.classList.add('menu-expanded')
    menuButtonController = 1
  } else {
    navButton.classList.remove('active')
    body.classList.remove('menu-expanded')
    menuButtonController = 0
  }
}
navButton.addEventListener('click', navButtonIsActive)

const closeMenu = () => {
  body.classList.remove('menu-expanded')
  navButton.classList.remove('active')
  menuButtonController = 0
}

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

const showNavOnScroll = () => {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

const showBackToTopButtonOnScroll = () => {
  if (scrollY > 750) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
          #home,
          #home img,
          #home .stats,
          #services,
          #services header,
          #services .card,
          #about,
          #about header,
          about .content
          `)

const activateMenuAtCurrentSection = section => {
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}
