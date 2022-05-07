import React, { useState } from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (todo) => {
    setTodos((oldTodos) => [...oldTodos, { ...todo, id: uuidv4() }]);
  };

  const handleremoveTodo = (id) => {
    setTodos((oldTodos) => oldTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleremoveTodo} />
    </div>
  );
};

export default Home;
