const button = document.querySelector('button')
const h2 = document.querySelector('h2')
const span = document.querySelector('span')
const apiUrl = 'https://api.adviceslip.com/advice'
async function getAdvice() {
    const response = await fetch(apiUrl)
    const data = await response.json()
    h2.textContent = data.slip.advice
    span.textContent = data.slip.id
    console.log(data.slip.advice, data)
}
getAdvice()
button.onclick = getAdvice