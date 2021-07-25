import React from "react";
import { uniqueId } from "lodash";

function Form({
  inputText,
  setInputText,
  todoList,
  setTodoList,
  setFilterOption,
  filterOption,
}) {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };
  const setTodoListHandler = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      {
        id: uniqueId(),
        value: inputText,
        completed: false,
      },
    ]);

    setInputText("");
  };

  const statusHanlder = (e) => {
    setFilterOption(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        type="text"
        onChange={inputHandler}
        className="todo-input"
      />
      <button
        className="todo-button"
        type="submit"
        onClick={setTodoListHandler}
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          value={filterOption}
          onChange={statusHanlder}
          name="todos"
          className="filter-todo"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
