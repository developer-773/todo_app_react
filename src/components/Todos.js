import ClassTodos from "./Class";
import FunctionTodos from "./Function";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function Todos(props) {
	const { ...all } = props;
	return (
		<>
			<h1 className="text-center mt-5">Todo List</h1>
			<div className="d-flex justify-content-between mt-5">
				<FunctionTodos {...all} />
				<ClassTodos />
                <ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={true}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			</div>
		</>
	);
}
