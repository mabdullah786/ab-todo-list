import React from "react";

export default function Todo({ text, setTodoList, todoList, todo }) {
  const deleteTodoHandler = (e) => {
    setTodoList(todoList.filter((item) => item.id !== todo.id));
  };

  const onCompleteHanlder = () => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className={`todo`}>
      <li className={`todo-item ${todo.completed ? "completed" : ""} `}>
        {text}
      </li>
      
      <button onClick={onCompleteHanlder} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteTodoHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
