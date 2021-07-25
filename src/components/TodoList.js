import React from "react";
import Todo from "./Todo";
function TodoList({ todoList, setTodoList }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todoList.map((todo) => (
          <Todo
            setTodoList={setTodoList}
            text={todo.value}
            key={todo.id}
            todo={todo}
            todoList={todoList}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
