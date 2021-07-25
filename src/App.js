import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [filterOption, setFilterOption] = useState("completed");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    handleFilteredList();
  }, [todoList, filterOption]);

  const handleFilteredList = () => {
    switch (filterOption) {
      case "completed":
        let newList1 = todoList.filter((item) => item.completed === true);

        setFilteredList(newList1);
        break;
      case "uncompleted":
        let newList = todoList.filter((item) => item.completed === false);

        setFilteredList(newList);
        break;
      default:
        setFilteredList(todoList);
        break;
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Abd Todo List </h1>
      </header>

      <Form
        todoList={todoList}
        setTodoList={setTodoList}
        inputText={inputText}
        setInputText={setInputText}
        setFilterOption={setFilterOption}
        filterOption={filterOption}
      />
      <TodoList setTodoList={setTodoList} todoList={filteredList} />
    </div>
  );
}

export default App;
