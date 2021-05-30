import React from 'react';

function Todo(props){
	
	function doneTodo(){
		props.setInput(props.todo.map((item) => {
			if(item.id === props.todos.id){
				return{...item, completed :!item.completed};
			}
			return item;
		}))
	}

	function deleteTodo(){
		props.setInput(props.todo.filter((del => del.id !== props.todos.id)));
	}

	function resetTodo(){
		
		props.setInput(props.todo.map((item) => {
			if(item.id === props.todos.id){

				if(props.textInput =="")
					alert("Please enter Modification in input Bar");
				else{
				var item_Id = item.id;
				item.text =props.textInput;
				return{...item,completed :false , id :item_Id};
				}
			}
			
			return item;
		}));
		props.Input("");
	}

	return (
		<div className="todo">
			<li className={`todo-item ${props.todos.completed ?"completed" :""}` }>{props.text}</li>
			<button className={"complete-btn"} onClick={doneTodo}>
				<i className="fas fa-check"></i>
			</button>
			<button className="trash-btn" onClick={deleteTodo}>
				<i className="fas fa-trash"></i>
			</button>
			<button className="modify-btn" onClick={resetTodo}>
				<i className="fa fa-bars"></i>
			</button>
		</div>
	);
}
export default Todo;