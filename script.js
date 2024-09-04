const button = document.querySelector('button')
const h2 = document.querySelector('h2')
const span = document.querySelector('span')
const apiUrl = 'https://api.adviceslip.com/advice'
async function getAdvice() {
    h2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g><rect width="2" height="5" x="11" y="1" fill="currentColor" opacity="0.14"/><rect width="2" height="5" x="11" y="1" fill="currentColor" opacity="0.29" transform="rotate(30 12 12)"/><rect width="2" height="5" x="11" y="1" fill="hsl(150, 100%, 66%)" opacity="0.43" transform="rotate(60 12 12)"/><rect width="2" height="5" x="11" y="1" fill="hsl(150, 100%, 66%)" opacity="0.57" transform="rotate(90 12 12)"/><rect width="2" height="5" x="11" y="1" fill="hsl(150, 100%, 66%)" opacity="0.71" transform="rotate(120 12 12)"/><rect width="2" height="5" x="11" y="1" fill="hsl(150, 100%, 66%)" opacity="0.86" transform="rotate(150 12 12)"/><rect width="2" height="5" x="11" y="1" fill="hsl(150, 100%, 66%)" transform="rotate(180 12 12)"/><animateTransform attributeName="transform" calcMode="discrete" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"/></g></svg>'
    const response = await fetch(apiUrl)
    const data = await response.json()
    h2.textContent = `"${data.slip.advice}"`
    span.textContent = data.slip.id
}

button.onclick = getAdvice