import React, { useContext } from 'react'
import { AppContext } from './context'

export const Todo = () => {
	const todos = useContext(AppContext)

	return (
		<ul className='list-group'>
			{todos.map(({ id, title }) => (
				<li key={id} className='list-group-item'>
					{title}
				</li>
			))}
		</ul>
	)
}
