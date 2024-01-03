import { useState } from 'react'
import './App.css'
import { Todo } from './Todo'
import { AppContext } from './context'
import {
	useRequestAddTodo,
	useRequestDeleteTodo,
	useRequestGetTodo,
	useRequestUpdateTodo,
} from './hooks'

function App() {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false)

	const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag)

	const { isLoading, todos } = useRequestGetTodo(refreshTodosFlag)
	const { isCreating, requestAddTodo } = useRequestAddTodo(refreshTodos)
	const { isUpdating, requestUpdateTodo } = useRequestUpdateTodo(refreshTodos)
	const { isDeleting, requestDeleteTodo } = useRequestDeleteTodo(refreshTodos)

	return (
		<AppContext.Provider value={todos}>
			<div className='container mt-4'>
				<h1>Todo List</h1>
				{isLoading ? (
					<div className='loader'></div>
				) : (
					<>
						<ul className='list-group'>
							<Todo />
						</ul>

						<button
							disabled={isCreating}
							className='btn btn-primary m-2'
							onClick={requestAddTodo}
						>
							Добавить задачу
						</button>
						<button
							className='btn btn-primary m-2'
							disabled={isUpdating}
							onClick={requestUpdateTodo}
						>
							Обновить задачу
						</button>
						<button
							className='btn btn-danger m-2'
							disabled={isDeleting}
							onClick={requestDeleteTodo}
						>
							Удалить задачу
						</button>
					</>
				)}
			</div>
		</AppContext.Provider>
	)
}

export default App
