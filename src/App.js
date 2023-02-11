import './App.scss';
import BodyLeft from './layouts/BodyLeft/index.jsx'
import BodyRight from './layouts/BodyRight';
import { useEffect, useState } from 'react';
import moment from 'moment';
import Test from './layouts/Test';
import Test1 from './layouts/Test1';


function App() {
  const [listTodo, setListTodo] = useState([])

  const addTodo = (valueItem) => {
    const newTodo = [...listTodo, valueItem];
    setListTodo(newTodo);
  };


  const deleteTodo = (indexItem) => {
    // const arrTodo = listTodo;
    const arrTodo = [...listTodo];
    arrTodo.splice(indexItem, 1);
    setListTodo(arrTodo);
    localStorage.setItem("todos", JSON.stringify(arrTodo));
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    const newTodos = todos.map((todo, index) => {
      const isChecked = moment(todo.status).isSame(moment(), 'day');
      if (isChecked) {
        alert("ban có 1 lời nhắc: " + " " + todo.content)
        return { ...todo, background: '#ff6b6b' }
      }
      return todo
    })
    setListTodo(newTodos);
  }, [])

  return (
    <div className="App">
      <h3>Nhắc nhở ngày quan trọng</h3>
      <div className="body">
        <BodyLeft addTodo={addTodo} listTodo={listTodo} />
        <BodyRight listTodo={listTodo} deleteTodo={deleteTodo} />
        <Test listTodo={listTodo} deleteTodo={deleteTodo} />
        <Test1 listTodo={listTodo} deleteTodo={deleteTodo} />
      </div>

    </div>
  );
}

export default App;
