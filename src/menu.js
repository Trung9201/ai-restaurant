export default function Menu() {

    const content = document.getElementById('content')

    const div = document.createElement('div')
    const divContainer = document.createElement('div')
    const h1 = document.createElement('h1')
    const divCard = document.createElement('div')
    const img = document.createElement('img')
    const h3Name = document.createElement('h3')
    const pPrice = document.createElement('p')

    const divCard2 = document.createElement('div')
    const img2 = document.createElement('img')
    const h3Name2 = document.createElement('h3')
    const pPrice2 = document.createElement('p')

    const divCard3 = document.createElement('div')
    const img3 = document.createElement('img')
    const h3Name3 = document.createElement('h3')
    const pPrice3 = document.createElement('p')

    div.classList.add('menu')
    divContainer.classList.add('menu-container')
    divCard.classList.add('card')
    divCard2.classList.add('card')
    divCard3.classList.add('card')

    content.appendChild(div)
    div.appendChild(h1)
    div.appendChild(divContainer)
    divContainer.appendChild(divCard)
    divContainer.appendChild(divCard2)
    divContainer.appendChild(divCard3)
    divCard.appendChild(img)
    divCard.appendChild(h3Name)
    divCard.appendChild(pPrice)

    divCard2.appendChild(img2)
    divCard2.appendChild(h3Name2)
    divCard2.appendChild(pPrice2)

    divCard3.appendChild(img3)
    divCard3.appendChild(h3Name3)
    divCard3.appendChild(pPrice3)

    h1.textContent = 'MENU'
    img.src = '/restaurant-page/src/images/menu3.jpg'
    h3Name.textContent = 'Pizza Cake'
    pPrice.textContent = '19$'
    img2.src = '/restaurant-page/src/images/menu2.jpg'
    h3Name2.textContent = 'Pizza Cake'
    pPrice2.textContent = '9$'
    img3.src = '/restaurant-page/src/images/menu1.jpg'
    h3Name3.textContent = 'Pizza Cake'
    pPrice3.textContent = '16$'
}