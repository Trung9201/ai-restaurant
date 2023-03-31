export default function Banner() {
    const content = document.getElementById('content')

    const div = document.createElement('div')
    const h1 = document.createElement('h1')
    const p = document.createElement('p')

    content.appendChild(div)
    div.appendChild(h1)
    div.appendChild(p)

    div.classList.add('banner')

    h1.textContent = 'PIZZA'
    p.textContent = 'Fast Food & Restaurant'
}