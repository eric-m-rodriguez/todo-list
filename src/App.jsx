import './App.css';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import {useState} from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);  //establishes state for the todo list, initially empty array


  //function that updates the todoList state with a new todo
  //we will pass this function to the TodoForm component as a prop
  const handleAddTodo = (newTodo) => { 
    setTodoList([...todoList, { id: Date.now(), title: newTodo }]); //adds new todo to todoList state; adds unique id to each todo using Daten.now()
  };

  return (
   <div>
    <h1>My Todos</h1>

{/*passes the handleAddTodo function to the TodoForm component as the prop onAddTodo; function available as onAddTodo*/}
    <TodoForm onAddTodo={handleAddTodo} /> 
    <TodoList todos={todoList} /> 
   </div>
  );
}

export default App;


