import TodoListItem from './TodoListItem.jsx';

function TodoList({todos}) { //function that creates a list of todos; todos is a prop passed from app.jsx

  return (
    <ul>
      {todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
    </ul>
  );
}

export default TodoList;
