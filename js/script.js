const headerButton = document.querySelector('#nav-button')
const body = document.querySelector('body')
var menuButtonController = 0 // 0 = menu     1 = menu-expanded

function headerButtonIsActive() {
  if (menuButtonController === 0) {
    headerButton.classList.add('active')
    body.classList.add('menu-expanded')
    menuButtonController = 1
  } else {
    headerButton.classList.remove('active')
    body.classList.remove('menu-expanded')
    menuButtonController = 0
  }
}
headerButton.addEventListener('click', headerButtonIsActive)

const closeMenu = () => {
  body.classList.remove('menu-expanded')
  headerButton.classList.remove('active')
  menuButtonController = 0
}

function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
