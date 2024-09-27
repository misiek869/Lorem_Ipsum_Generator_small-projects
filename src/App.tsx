import { useState } from 'react'
import data from './data'

function App() {
	const [count, setCount] = useState<number>(1)
	const [text, setText] = useState<string[]>(data)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCount(Number(e.target.value))
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const newArray = data.slice(0, count)
		setText(newArray)
	}

	return (
		<main>
			<form action='' onSubmit={handleSubmit}>
				<label htmlFor='number'>Select Number</label>
				<input
					type='number'
					name='number'
					id='number'
					value={count}
					min={1}
					max={8}
					step={1}
					onChange={handleChange}
				/>
			</form>
			<p>{text}</p>
		</main>
	)
}

export default App
