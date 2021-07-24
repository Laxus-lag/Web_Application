import React from 'react'; 
import Todo from "./Todo"; 

function List({todo, setInput, filterTodos,textInput,Input}){
	console.log(todo);
	
	return (
	
	<div className="todo-container">
      <ul className="todo-list">
		  {filterTodos.map(todos => (
			  
			  <Todo text ={todos.text} key={todos.id} todo ={todo} setInput ={setInput} todos ={todos} textInput ={textInput} Input={Input} />
		  ))}
	  </ul>
	  
    </div>);
}

export default List;