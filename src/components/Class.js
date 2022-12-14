import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class ClassTodos extends React.Component {
	state = {
        inputt: "",
		todos: JSON.parse(localStorage.getItem("Classtodos")) || [
			{ id: 1, text: "Tailwind CSS", isChecked: false },
			{ id: 2, text: "Materialize CSS", isChecked: false },
			{ id: 3, text: "Javascript", isChecked: false },
        ],

	};

    

	handleFormSubmit = (evt) => {
		evt.preventDefault();
		const newTodo = {
			id: this.state.todos.length + 1,
			text: this.state.inputt,
			isChecked: false,
		};

		this.setState({ todos: [newTodo, ...this.state.todos] });
		this.setState({ inputt: ""});
		toast.success("Class Task was created successfully! 👌");
        console.log(this.state.todos);
	};

    checkedItem (id) {
        const unchecked = this.state.todos.find(item => item.id === id);
        unchecked.isChecked = !unchecked.isChecked
        this.setState([...this.state.todos])
    }


	editItem (id, todoTextt) {
        let editedValue = prompt("",todoTextt);
        const findedText = this.state.todos.find(item => item.id === id);
        findedText.text = editedValue;
        this.setState([...this.state.todos])
		toast.warning("Class Task was edited successfully!");

	};

	deleteItem(id) {
		this.setState(({ todos }) => {
			const index = todos.findIndex((item) => item.id === id);
			const newArr = [...todos.slice(0, index), ...todos.slice(index + 1)];
			return {
				todos: newArr,
			};

		});
		toast.error("Class Task has been deleted!");

	}

	inputValue = (evt) => {
		this.setState({ inputt: evt.target.value });
	};


	render() {
    localStorage.setItem("Classtodos", JSON.stringify([...this.state.todos]))

		return (
			<div className="mt-5 w-50">
				<h2>Class Todo</h2>
				<form className="d-flex" onSubmit={this.handleFormSubmit}>
					<input
						className="form-control"
						value={this.state.inputt}
						type="text"
						onChange={this.inputValue}
					/>
					<button className="btn btn-success" type="submit">
						SUBMIT
					</button>
				</form>
				<ul className="list-unstyled form-check p-0">
					{this.state.todos.map((item) => (
						<li key={item.id} className="p-2 my-3 bg-white ps-2 rounded">
							<div className="ms-5 d-flex justify-content-between align-items-center">
								<label className={item.isChecked ? "form-check-label  text-decoration-line-through" : ""} htmlFor="flexCheckDefault">
									<input
										id="flexCheckDefault"
										className="form-check-input"
										name="isChecked"
										type="checkbox"
										checked={this.state.isChecked}
										onChange={() => this.checkedItem(item.id)}
									/>
									<p className="d-inline">{item.text}</p>
								</label>
								<div>
									<button className="btn btn-info" onClick={() => this.editItem(item.id, item.text)}>
										EDIT
									</button>
									<button
										onClick={() => this.deleteItem(item.id)}
										className="btn btn-danger ms-3"
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
}
