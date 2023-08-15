import { useState } from 'react'

const API_URL = 'https://api.adviceslip.com/advice'

const initialState = {
    id: 117,
    advice: `It is easy to sit up and take notice, what's difficult is getting up and taking action.`,
}

const useApp = () => {
    const [slip, setSlip] = useState(initialState)

    const getAdvice = async () => {
        setSlip({ id: 0, advice: 'Loading...' })

        try {
            const res = await fetch(API_URL)
            const data = await res.json()

            const { slip } = data

            setSlip(slip)
        } catch (error) {
            const advice =
                error instanceof Error
                    ? `Type Error:  ${error.message}`
                    : 'An error occurred'

            const slip = {
                id: 404,
                advice,
            }

            setSlip(slip)
            alert('An error occurred')
        }
    }

    return {
        slip,
        getAdvice,
    }
}

export default useApp
