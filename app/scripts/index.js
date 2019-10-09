import '../styles/main.scss'
const feather = require('feather-icons')

const icons = () => {
  feather.replace()
}

/* if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
} */

document.body.classList = sessionStorage.getItem('theme')

const setStorageTheme = () => {
  sessionStorage.getItem('theme') === 'light'
    ? lightMode() : darkMode()
}

icons()

const sup = document.querySelector('.c-theme')

const lightMode = () => {
  sessionStorage.setItem('theme', 'light')
  document.documentElement.removeAttribute('dark')
  sup.innerHTML = '<i data-feather="sun"></i>'
  icons()
}

const darkMode = () => {
  sessionStorage.setItem('theme', 'dark')
  document.documentElement.setAttribute('dark', 'true')
  sup.innerHTML = '<i data-feather="moon"></i>'
  icons()
}

setStorageTheme()

const changeMode = () => {
  let themeState = document.documentElement.hasAttribute('dark')
  themeState ? lightMode() : darkMode()
}

sup.addEventListener('click', changeMode)

const navButton = document.querySelector('.c-mobile-nav')

const openNav = () => {
  navButton.innerHTML = '<i data-feather="x"></i>'
  icons()
  let newOverlay = document.createElement('div')
  newOverlay.classList = 'c-overlay'
  newOverlay.innerHTML = `
  <ul class="c-mobile-list">
  <li class="c-mobile-list__item c-mobile-list__item--red">
  <a class="c-mobile-list__link" href="/discover.html">1. Discover</a>
  </li>
  <li class="c-mobile-list__item c-mobile-list__item--yellow">
  <a class="c-mobile-list__link" href="/concept.html">2. Concept</a>
  </li>
  <li class="c-mobile-list__item c-mobile-list__item--green">
  <a class="c-mobile-list__link" href="/scope.html">3. Scope</a>
  </li>
  <li class="c-mobile-list__item c-mobile-list__item--blue">
  <a class="c-mobile-list__link" href="/detail.html">4. Detail</a>
  </li>
  <li class="c-mobile-list__item c-mobile-list__item--purple">
  <a class="c-mobile-list__link" href="/build.html">5. Build</a>
  </li>
  </ul>
  `
  document.body.appendChild(newOverlay)
}

const closeNav = () => {
  navButton.innerHTML = '<i data-feather="menu"></i>'
  icons()
  if (document.querySelector('.c-overlay')) {
    document.querySelector('.c-overlay').remove()
  }
}

const toggleMobileNav = () => {
  let navState = document.querySelector('.c-overlay')
  navState ? closeNav() : openNav()
}

navButton.addEventListener('click', toggleMobileNav)

const resizeClose = () => {
  if (window.innerWidth > 768) {
    closeNav()
  }
}

window.onresize = resizeClose
