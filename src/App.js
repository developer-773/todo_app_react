import { useState } from "react";
import Todos from "./components/Todos";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [value, setValue] = useState("");

	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem("todos")) || [
			{
				id: 1,
				text: "HTML",
				isComplete: false,
			},
			{
				id: 2,
				text: "CSS/SCSS",
				isComplete: false,
			},
			{
				id: 3,
				text: "Bootstrap",
				isComplete: false,
			},
		]
	);

	const handleFormInput = (evt) => {
		evt.preventDefault();
		const newTodo = {
			id: todos.length + 1,
			text: value,
			isComplete: false,
		};
		if (newTodo.text !== "") {
			setTodos([newTodo, ...todos]);
		}
		setValue("");
		toast.success("Function Task was created successfully! 👌");
	};

	const handleCheck = (id) => {
		const uncheckedTodo = todos.find((item) => item.id === id);
		console.log(uncheckedTodo);
		uncheckedTodo.isComplete = !uncheckedTodo.isComplete;
		setTodos([...todos]);
	};

	function FnAll() {
		return todos.length;
	}

	const editTodo = (a, todoText) => {
		let p = prompt("", todoText);
		const findedTodo = todos.find((item) => item.id === a);
		findedTodo.text = p;
		setTodos([...todos]);
		toast.warning("Task was edited successfully!");
	};

	const deleteTodo = (id) => {
		const finded = todos.findIndex((item) => item.id === id);
		setTodos([...todos.slice(0, finded), ...todos.slice(finded + 1)]);
		toast.error("Task has been deleted!");
	};

	const setInputValue = (evt) => {
		setValue(evt.target.value);
	};

	return (
		<div className=" container mt-5">
			<Todos
				handleFormInput={handleFormInput}
				handleCheck={handleCheck}
				editTodo={editTodo}
				deleteTodo={deleteTodo}
				todos={todos}
				value={value}
				setInputValue={setInputValue}
				FnAll={FnAll}
			/>
		</div>
	);
}

export default App;
