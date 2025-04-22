/**
 * Todo Application
 * 
 * Main component that manages the todo list state and renders the TodoForm and TodoList components.
 */

import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import {useState} from 'react';

// State to store the List of todos with {id, title, isCompleted} structure
function App() {
  const [todoList, setTodoList] = useState([]);  // establishes state for the todo list, initially empty array


  // function that updates the todoList state with a new todo
  // we will pass this function to the TodoForm component as a prop
  const handleAddTodo = (newTodo) => { 
    setTodoList([...todoList, { 
      id: Date.now(), // adds new todo to todoList state; adds unique id to each todo using Date.now()
      title: newTodo,
      isCompleted: false // adds isCompleted property to each todo; initially set to false 
    }]); 
  };

  
// new helper function to mark todo as completed
const completeTodo = (id) => { 
  // map through the todoList to create a new array
  const updatedTodos = todoList.map((todo) => {
    // check if the current todo's id matches the id passed to the function 
    if (todo.id === id) {
      return {...todo, isCompleted: true}; // if it matches, return a new todo object with the isCompleted property set to true
  }
  // if it doesn't match, return the original todo object
  return todo;
});

  setTodoList(updatedTodos); // update the todoList state with the new arrays of todos
};

  return (
   <div>
    <h1>My Todos</h1>

{/* todoForm handles user input for creating new todos */}
    <TodoForm onAddTodo={handleAddTodo} /> 
{/* TodoList displays filtered todos and handles completion */}
    <TodoList todos={todoList} onCompleteTodo={completeTodo} /> 
   </div>
  );
  }


export default App;