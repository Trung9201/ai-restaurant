export default function Footer() {

    const content = document.getElementById('content')

    const div = document.createElement('div')

    div.classList.add('footer')

    content.appendChild(div)

    div.textContent = 'Powered by TrungHips'
}