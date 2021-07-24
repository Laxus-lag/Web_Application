import React,{useState,useEffect} from "react";
import './App.css';
import Form from "./modules/Form";
import Lists from "./modules/Lists";
function App() {

  useEffect(()=>{
    getLocal();
  },[]);
  const [textInput, Input] =useState("");
  const [todo,setInput] =useState([]);
  const [status,setStatus] =useState("all");
  const [filterTodos, setFilterTodos] =useState([]);

  function filterCheck(){
    switch (status){
      case "completed":
        setFilterTodos(todo.filter((todos) =>todos.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todo.filter((todos) =>todos.completed === false));
        break;
      default:
        setFilterTodos(todo);
        break;
    }
  }
  useEffect( () => {
  filterCheck();
  saveTodo();
  },[todo, status]);

  function saveTodo(){
      localStorage.setItem('todo',JSON.stringify(todo));
  }

  function getLocal(){
    if(localStorage.getItem('todo') ===null)
      localStorage.setItem('todo' ,JSON.stringify([]));
    else{
      var todoLocal =JSON.parse(localStorage.getItem('todo'));
      setInput(todoLocal);
    }
  }

  return (
    <div className="App">
      <Form
        status={status}
        setStatus={setStatus}
        textInput={textInput}
        Input={Input}
        todo={todo}
        setInput={setInput}
        filterTodos={filterTodos}
        setFilterTodos={setFilterTodos}
      />
      
    </div>
  );
}

export default App;
  