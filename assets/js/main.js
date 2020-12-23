/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.querySelector(toggleId),
      nav = document.querySelector(navId)
  
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show")
      })
    }
  }
  showMenu('#nav-toggle', '#nav-menu')
  
  /*===== REMOVE MENU =====*/
  const navLink = document.querySelectorAll('.nav__link'),
    navMenu = document.querySelector('#nav-menu')
  
  function linkAction() {
    navMenu.classList.remove('show')
  }
  
  navLink.forEach(n => n.addEventListener('click', linkAction))
  
  
