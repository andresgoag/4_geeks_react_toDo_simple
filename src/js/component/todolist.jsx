import React from "react";

export const ToDoList = () => {
	const [newTask, setNewTask] = React.useState("");
	const [listOfTasks, setListOfTasks] = React.useState([]);

	const newTaskKeyDownHandler = e => {
		if (e.key === "Enter") {
			if (newTask === "") {
				alert("Please enter a task");
			} else {
				addToList();
			}
		}
	};

	const addToList = () => {
		setListOfTasks([...listOfTasks, newTask]);
		setNewTask("");
	};

	const deleteTask = index => {
		const newArray = listOfTasks.filter((item, i) => {
			return i !== index;
		});

		setListOfTasks(newArray);
	};

	return (
		<div className="main-container">
			<div>
				<h1>Tasks to do</h1>
			</div>
			<input
				placeholder="Add new task"
				className="new-task-input"
				type="text"
				value={newTask}
				onChange={e => setNewTask(e.target.value)}
				onKeyDown={newTaskKeyDownHandler}
			/>
			{listOfTasks.length == 0 ? (
				<p className="info">No tasks, add a task</p>
			) : null}

			{listOfTasks.map((item, index) => {
				return (
					<div className="todo" key={index}>
						<p className="todo_content">{item}</p>
						<p
							className="todo_delete"
							onClick={() => {
								deleteTask(index);
							}}>
							<i className="fas fa-times"></i>
						</p>
					</div>
				);
			})}

			{listOfTasks.length > 0 ? (
				<p className="info">{`${listOfTasks.length} item${
					listOfTasks.length > 1 ? "s" : ""
				} left`}</p>
			) : null}
		</div>
	);
};
