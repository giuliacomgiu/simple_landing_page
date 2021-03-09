const menu = document.querySelector('#mobile-menu')
const menu_links = document.querySelector('.navbar__menu')

// Display mobile menu

const toggle_mobile_menu = () => {
  menu.classList.toggle('is-active')
  menu_links.classList.toggle('active')
}

menu.addEventListener('click', toggle_mobile_menu)