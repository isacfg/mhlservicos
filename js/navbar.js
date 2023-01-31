
const header = document.querySelector('.header')
const logo = document.querySelector('#logo-nav')
const hamMenu = document.querySelector('.ham-btn')

window.onscroll = function () {
  let top = window.scrollY

  if (top >= 100) {
    header.classList.add('header-scrolled')
    header.classList.add('shadow-xl')
    logo.src = './assets/logo-light.png'
    hamMenu.classList.add('ham-btn-scrolled')
  } else {
    header.classList.remove('header-scrolled')
    header.classList.remove('shadow-xl')
    logo.src = './assets/logo-dark.svg'
    hamMenu.classList.remove('ham-btn-scrolled')
  }
}
hamMenu.addEventListener('click', () => {

  let top2 = window.scrollY

  if (top2 < 100) {
    header.classList.toggle('menu-open-bg')
    header.classList.toggle('header-scrolled')
    hamMenu.classList.toggle('ham-btn-scrolled')

    if (header.classList.contains('header-scrolled')) {
      logo.src = './assets/logo-light.png'
    } else {
      logo.src = './assets/logo-dark.svg'
    }
  }

})