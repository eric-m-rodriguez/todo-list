/**
 * TodoForm Component
 * 
 * Creates a form for users to input and submit new todos.
 * Implements validation to prevent empty todos.
 * 
 * Props: 
 * - onAddTodo: Function to handle adding a new todo, passed from App.jsx
 */

import { useState, useEffect, useRef } from 'react'; 


function TodoForm({ onAddTodo} ) {/* function that creates a form for adding new todos to the todo list; onAddTodo is a prop passed from App.jsx for handleAddTodo function */

    // State to track current input value and control the input field
    const [workingTodo, setWorkingTodo] = useState(''); // creates variable workingTodo with initial value of an empty string; setWorkingTodo function is used to update value of workingTodo

    // Reference to maintain focus on the input field after submitting the form
    const todoTitleInput = useRef(null); // creates a reference to input field (title) in the form that focuses on the input field after submitting the form

    // Effect focus on the input field when the component mounts or when workingTodo is reset after submitting the form
    useEffect(() => {
        todoTitleInput.current.focus(); 
    }, [workingTodo]); 

    // Handles form submission for adding new todos; prevents empty todos from being added
    function handleAddTodo(event){  // function that handles adding new todo to todo list
        event.preventDefault() // prevents the form from reloading the page when submitted 
        
        if (workingTodo.trim()) { // checks if working Todo is not empty or contains whitespace
            onAddTodo(workingTodo); // calls the onAddTodo function passed from App.jsx and passes workingTodo as an argument to it
            setWorkingTodo(''); // resets the workingTodo state to an empty string after adding a new todo
        }
    }

    return (
            <form onSubmit={handleAddTodo}> {/* call handleTodo function when form is submitted */}
                <label htmlFor="todoTitle">Todo</label>
                <input 
                    id="todoTitle" 
                    name="title" 
                    type="text" 
                    ref={todoTitleInput} 
                    value={workingTodo} //sets the value of the input field to the workingTodo state
                    onChange={(event) => setWorkingTodo(event.target.value)} //updates workingTodo state with the value of the input field as the user types
                    />
                <button 
                type="submit"
                disabled={workingTodo=== ''} // disables the button if workingTodo is empty
                > 
                    Add Todo
                </button>
            </form>
        );
    }


export default TodoForm;