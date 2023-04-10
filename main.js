const adviceNumber = document.querySelector('.advice-number__number')
const adviceText = document.querySelector('.advice__text')

const API_URL = 'https://api.adviceslip.com/advice'
async function generateAdvice() {
    adviceNumber.innerHTML = 0
    adviceText.innerHTML = 'Loading...'

    try {
        const res = await fetch(API_URL)
        const data = await res.json()

        const { id, advice } = data.slip

        adviceNumber.innerHTML = id
        adviceText.innerHTML = advice
    } catch (error) {
        adviceNumber.innerHTML = 404
        adviceText.innerHTML = `Type Error: ${error.message}`
        alert('An error occurred')
    }
}

generateAdvice()
