export default function About() {

    const content = document.getElementById('content')

    const div = document.createElement('div')
    const h1Title = document.createElement('h1')
    const divAbout = document.createElement('div')
    const img = document.createElement('img')
    const p = document.createElement('p')
    const lineText = document.createElement('div')
    
    content.appendChild(div)
    div.appendChild(h1Title)
    div.appendChild(divAbout)
    divAbout.appendChild(img)
    divAbout.appendChild(p)
    div.appendChild(lineText)

    div.classList.add('about')
    divAbout.classList.add('about-container')
    lineText.classList.add('line-text')

    h1Title.textContent = 'ABOUT US'
    img.src = '/restaurant-page/src/images/about.jpg'
    p.textContent = 'Pizza cake is a Canadian multiple-layer pizza baked in a pot or cake pan. First invented by Boston Pizza, recipes were posted online as early as April 2014, though they did not become viral until the Pillsbury Company posted an example in September 2014. Reviews have been mixed, with praise aimed at its taste and criticism leveled at its complexity and unhealthiness.'

    lineText.textContent = 'Welcome! Choose between various pizzas and meals.'
}