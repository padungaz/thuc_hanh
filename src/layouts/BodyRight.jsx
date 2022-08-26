import React from "react";
import TodoItem from "../components/TodoItem";

const BodyRight = ({ listTodo, deleteTodo }) => {
  const renderItems = () => {
    return listTodo.map((todo, index) => {
      return <TodoItem key={index} todo={todo} deleteTodo={deleteTodo} />;
    });
  };

  return (
    <div className="body__right">
      {renderItems()}
    </div>
  );
};

export default BodyRight;
