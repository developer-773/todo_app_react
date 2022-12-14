
export default function FunctionTodos({deleteTodo, handleCheck, editTodo, handleFormInput, todos, value, setInputValue}) {
    localStorage.setItem("todos", JSON.stringify(todos))
	return (
		<div className="w-50 me-5 mt-5">
            <h2>Function Todo</h2>
			<form className="d-flex" onSubmit={handleFormInput}>
				<input
					className="form-control"
					value={value}
					type="text"
					onChange={setInputValue}
				/>
				<button className="btn btn-success" type="submit">
					SUBMIT
				</button>
			</form>
			<ul className="list-unstyled form-check p-0">
				{todos.map((todo, i) => (
					<li key={i}  className="p-2 my-3 bg-white ps-2 rounded">
						<div className="ms-5 d-flex justify-content-between align-items-center">
							<label className={todo.isComplete ? "form-check-label  text-decoration-line-through" : ""} htmlFor="flexCheckDefault">
								<input
									id="flexCheckDefault"
									className="form-check-input"
									name="isComplete"
									defaultChecked={todo.isComplete}
									type="checkbox"
                                    onChange={() => handleCheck(todo.id)}
								/>
								<p className="d-inline m-0">{todo.text}</p>
							</label>
							<div>
								<button
									className="btn btn-info"
									onClick={() => editTodo(todo.id, todo.text)}
								>
									EDIT
								</button>
								<button
									className="btn btn-danger ms-3"
									onClick={() => deleteTodo(todo.id)}
								>
									DELETE
								</button>
							</div>
						</div>
					</li>
				))}
			</ul>
           
		</div>
	);
}
