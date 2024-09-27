import { useState } from 'react'
import data from './data'
import { nanoid } from 'nanoid'

function App() {
	const [count, setCount] = useState<number>(1)
	const [text, setText] = useState<string[]>([])

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
			<article>
				{text.map(item => {
					const id = nanoid()
					return <p key={id}>{item}</p>
				})}
			</article>
		</main>
	)
}

export default App
