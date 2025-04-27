/**
 * TodoListItem Component
 * 
 * Displays an individual todo item with a checkbox to mark it as completed.
 * 
 * Props: 
 * - todo: Object containing {id, title, isCompleted} properties
 * - onCompleteTodo: Function to mark a todo as completed, passed from TodoList.jsx
 */

function TodoListItem({ todo, onCompleteTodo }) {

    return (
        <li>
            <form> 
                <input
                    type="checkbox"
                    checked={todo.isCompleted} //check if todo is completed
                    onChange={() => onCompleteTodo(todo.id)} // calls the onCompleteTodo function passed from TodoList.jsx and passes the id of the todo as an argument
                />
                {todo.title} {/* displays the title of the todo */}
            </form>
        </li>
    );
}

export default TodoListItem;