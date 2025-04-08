import { useRef } from 'react'; 


function TodoForm({ onAddTodo} ) {/*function that creates a form for adding new todos to the todo list; onAddTodo is a prop passed from App.jsx for handleAddTodo function */

    const todoTitleInput = useRef(null); //useRef hook creates a reference to the input field (title) in the form; allows us to access the input field directly without using state

    function handleAddTodo(event){  //function that handles adding new todo to todo list
        event.preventDefault() //prevents the form from reloading the page when submitted 
        
        const title=event.target.title.value; //variable that stores the value of the input field (title) when form is submitted
        
        onAddTodo(title); //holds the value of the input field (title) and passes it to the onAddTodo function (passed from App.jsx) when form is submitted
        
        event.target.title.value=''; //resets the title input field to empty after submitting the form

        todoTitleInput.current.focus(); //focuses on the input field (title) after submitting the form without having to click on input form again to maintain focus
        }

        return (
            <form onSubmit={handleAddTodo}> {/* call handleTodo function when form is submitted */}
                <label htmlFor="todoTitle">Todo</label>
                <input id="todoTitle" name="title" type="text" ref={todoTitleInput} />
                <button type ="submit">Add Todo</button>
            </form>
        );
    }


export default TodoForm;