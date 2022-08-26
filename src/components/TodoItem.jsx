const TodoItem = (props) => {
  const { todo, deleteTodo } = props;

  return (
    <div className="todo-item" style={{ backgroundColor: todo.background }}>
      <div className="todoitem__parents">
        <div className="todo-item__status">
          <b>Ngày: {todo.status}</b>
        </div>
        <div className="todo-item__content">
          <i>{todo.content}</i>
        </div>
      </div>
      <button className="todo-item__btn" onClick={() => deleteTodo(todo.id)}>
        X
      </button>
    </div>
  );
};

export default TodoItem;
