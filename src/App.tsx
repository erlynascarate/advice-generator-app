import './scss/App.scss'
import useApp from './hooks/useApp'

function App() {
    const { slip, getAdvice } = useApp()
    const { id, advice } = slip

    return (
        <main className="advice">
            <h1 className="advice-number">
                Advice #<span className="advice-number__number">{id}</span>
            </h1>

            <q className="advice__text">{advice}</q>

            <svg
                className="advice__divider"
                width="295"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g fill="none" fillRule="evenodd">
                    <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
                    <g transform="translate(138)" fill="#CEE3E9">
                        <rect width="6" height="16" rx="3" />
                        <rect x="14" width="6" height="16" rx="3" />
                    </g>
                </g>
            </svg>
            <svg
                className="advice__divider--desktop"
                width="444"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g fill="none" fillRule="evenodd">
                    <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
                    <g transform="translate(212)" fill="#CEE3E9">
                        <rect width="6" height="16" rx="3" />
                        <rect x="14" width="6" height="16" rx="3" />
                    </g>
                </g>
            </svg>

            <button
                onClick={getAdvice}
                className="advice__btn"
                title="Generate new advice"
            >
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                        fill="#202733"
                    />
                </svg>
            </button>
        </main>
    )
}

export default App
