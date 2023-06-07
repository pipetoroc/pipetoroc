// Active menu button
const menu = document.getElementById('menu')
menu.addEventListener('click', toggleActiveMenu)

const anchors = document.getElementsByClassName('list__item')
console.log(anchors)
for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('click', toggleActiveMenu)
}

function toggleActiveMenu () {
  const listMenu = document.getElementById('list-menu')
  const modal = document.getElementById('modal')
  listMenu.classList.toggle('inactive')
  listMenu.classList.toggle('active')
  modal.classList.toggle('inactive')

  const list = document.getElementsByClassName('menu__item')
  for (let i = 0; i < list.length; i++) {
    list[i].classList.toggle('itemOpen' + [i + 1])
  }
}

// scroll-menu
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.main__nav-bar')
  const main = document.querySelector('.main')
  const navbarHeight = navbar.offsetHeight
  const mainTop = main.offsetTop
  const scrollTop = window.scrollY
  const logo = document.querySelector('.nav-bar__logo')

  if (scrollTop > mainTop - navbarHeight - 30) {
    navbar.classList.add('fixed-top')
    logo.style.width = '60px'
  } else {
    navbar.classList.remove('fixed-top')
    logo.style.width = '0px'
  }
})
