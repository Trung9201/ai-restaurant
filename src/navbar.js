export default function NavBar() {

    const content = document.getElementById('content')

    const div = document.createElement('div')
    const divLogo = document.createElement('div')
    const ul = document.createElement('ul')
    const liHome = document.createElement('li')
    const liAbout = document.createElement('li')
    const liMenu = document.createElement('li')

    div.classList.add('navbar')
    divLogo.classList.add('navbar-logo')
    ul.classList.add('navbar-menu')
    liHome.classList.add('navbar-item')
    liAbout.classList.add('navbar-item')
    liMenu.classList.add('navbar-item')

    content.appendChild(div)
    div.appendChild(divLogo)
    div.appendChild(ul)
    ul.appendChild(liHome)
    ul.appendChild(liAbout)
    ul.appendChild(liMenu)

    divLogo.textContent = 'PIZZA'
    liHome.textContent = 'Home'
    liAbout.textContent = 'About'
    liMenu.textContent = 'Menu'
}