const menu = document.querySelector('#mobile-menu')
const navLogo = document.querySelector('#navbar__logo')
const menu_links = document.querySelector('.navbar__menu')

const toggleMobileMenu = () => {
  menu.classList.toggle('is-active')
  menu_links.classList.toggle('active')
}

menu.addEventListener('click', toggleMobileMenu)

const highlightDesktopMenu = () => {
  if(window.innerWidth <= 960){
    return
  }
  highlightCurrentMenuSection()
}

window.addEventListener('scroll', highlightDesktopMenu)
window.addEventListener('click', highlightDesktopMenu)

highlightCurrentMenuSection = () => {
  const elem = document.querySelector('.highlight')
  const homeMenu = document.querySelector('#home-page')
  const aboutMenu = document.querySelector('#about-page')
  const productsMenu = document.querySelector('#products-page')
  let currentSection = scrollPositionSection()
  
  if(currentSection == 'home'){
      homeMenu.classList.add('highlight')
      aboutMenu.classList.remove('highlight')        
  } else if (currentSection == 'about'){
      aboutMenu.classList.add('highlight')
      homeMenu.classList.remove('highlight')
      productsMenu.classList.remove('highlight')
  } else if (currentSection == 'products'){
      productsMenu.classList.add('highlight')
      aboutMenu.classList.remove('highlight')
  } else {
    elem.classList.remove('highlight')
  }
}

scrollPositionSection = () => {
  let scrollPosition = window.scrollY

  if(scrollPosition < 680) {
    return 'home'
  } else if(scrollPosition >= 680 && scrollPosition < 1500){
    return 'about'
  } else if(scrollPosition >= 1500 && scrollPosition < 2345){
    return 'products'
  } else {
    'not-in-menu'
  }
}