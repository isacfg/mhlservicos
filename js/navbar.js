
const header = document.querySelector('.header')
const logo = document.querySelector('#logo-nav')

window.onscroll = function () {
  let top = window.scrollY

  if (top >= 100) {
    header.classList.add('header-scrolled')
    header.classList.add('shadow-xl')
    logo.src = './assets/logo-light.png'
  } else {
    header.classList.remove('header-scrolled')
    header.classList.remove('shadow-xl')
    logo.src = './assets/logo-dark.svg'
  }
}