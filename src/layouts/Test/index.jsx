import React from "react";
import TodoItem from "../../components/TodoItem";
import './style.scss';

const Test = ({ listTodo, deleteTodo }) => {
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

export default Test;
