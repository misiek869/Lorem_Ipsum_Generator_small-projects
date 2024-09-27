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
		<section className='section-center'>
			<h4>Lorem Ipsum</h4>
			<form className='lorem-form' action='' onSubmit={handleSubmit}>
				<label className='form-label' htmlFor='number'>
					Number of paragraphs
				</label>
				<input
					className='form-input'
					type='number'
					name='number'
					id='number'
					value={count}
					min={1}
					max={8}
					step={1}
					onChange={handleChange}
				/>
				<button className='btn' type='submit'>
					generate
				</button>
			</form>
			<article className='lorem-text'>
				{text.map(item => {
					const id = nanoid()
					return <p key={id}>{item}</p>
				})}
			</article>
		</section>
	)
}

export default App
