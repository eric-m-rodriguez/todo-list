/**
 * TodoList component
 * 
 * Displays either a message when there are no todos or a list of non-completed todos.
 * 
 * Props:
 * - todos: Array of todo objects with {id, title isCompleted} properties
 * - onCompleteTodo: Function to mark a todo as completed, takes todo id as an argument
 * 
 * Behavior: 
 * - Filters out completed todos
 * - Shows a message if there are no todos
 * - Renders todoList components for each active todo
 */

import TodoListItem from './TodoListItem.jsx';

  function TodoList({todos, onCompleteTodo}) { 
    // filter out completed todos

    // Filter todo list to show only non-completed todos
    const filteredTodoList = todos.filter(todo => !todo.isCompleted);

  return (
    // Conditional rendering: if no todos, displays message; otherwise displays list of todos
    filteredTodoList.length === 0
    ? <p>Add todo above to get started</p> // Empty state message
    : <ul>
        {filteredTodoList.map(todo => ( // map through the todos array to create a list of todos
          <TodoListItem
          key={todo.id} 
          todo={todo} 
          onCompleteTodo={onCompleteTodo}
          /> 
        ))}
    </ul>
  );
}

export default TodoList;
