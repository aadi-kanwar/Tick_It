import logo from "./logo.svg";

import Header from "./components/Header";
import ToDoItem from "./components/ToDoItem";
import Button from "./components/Button";

import CounterComponent from "./components/CounterComponent";

import "./style.css";

const App = () => {
  return (
    <div className = "todo-container">
      <CounterComponent />
      <Header title="Tick-It App" />
      <ToDoItem text="Eat" />
      <ToDoItem completed= {true} text="Code" />
      <ToDoItem text="Play" />
      <ToDoItem text="Study" />
      <ToDoItem text="Sleep Again" />
      <Button />
    </div>
  );
};

export default App;
