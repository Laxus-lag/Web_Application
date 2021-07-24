import React from 'react';
import Lists from "./Lists";
function Form(props){
	
	function displayText(text){
		props.Input(text.target.value); 
	}
	
	function submitText(event){
		
		event.preventDefault();
		if(props.textInput !=""){
		props.setInput([
			...(props.todo)
			,{text :props.textInput,completed :false,id:Math.random()}
			]);
		props.Input("");
		}
	}
	function InputStatus(event){
		props.setStatus(event.target.value);
	}

	function ClearAll(){
	 props.setInput([])	
	}
	return (
    <div className="wrapper">
      <header>
        <h1>
          <strong>Todo List</strong>
        </h1>
      </header>
      <form>
        <input
          type="text"
          required
          placeholder="Enter Detail"
          className="todo-input"
          value={props.textInput}
          onChange={displayText}
        />
        <button className="todo-button" type="submit" onClick={submitText}>
          <i className="fas fa-plus-circle"></i>
        </button>
        <div className="select">
          <select onChange={InputStatus} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      <Lists
        todo={props.todo}
        setInput={props.setInput}
        filterTodos={props.filterTodos}
        setFilterTodos={props.setFilterTodos}
        textInput={props.textInput}
        Input={props.Input}
      />
      <div className="ClearAll">
        <button
          className="clear-btn"
          type="submit"
          value="clear"
          name="Clear All"
		  onClick={ClearAll}
        >
          <i className="fas fa-trash" value="clear" name="Clear All"></i>Clear
          All
        </button>
      </div>
    </div>
  );
}

export default Form;