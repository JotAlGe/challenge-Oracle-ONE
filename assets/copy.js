

const but = document.getElementById('copy')
const text = document.getElementById('text_content')

but.addEventListener('click', () => {
    navigator.clipboard.writeText(text.textContent)
})