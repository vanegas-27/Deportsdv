const menuHamburguesa = document.querySelector('#menuHome')
const menuPrincipal = document.querySelector('.menu_mobile')

menuHamburguesa.addEventListener('click', () => {
  if (!menuPrincipal.classList.contains('inactive')) {
    menuPrincipal.classList.toggle('inactive')
    return
  }
  menuPrincipal.classList.toggle('inactive')
})

