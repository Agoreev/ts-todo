import React, { useState } from "react";
import { NavBar } from "./components/NavBar";
import { ToDoForm } from "./components/ToDoForm";

const App: React.FC = () => {
  const [todos, setTodos] = useState([]);

  const addHandler = (title: string) => {
    console.log("Add new todo", title);
  };

  return (
    <>
      <NavBar />
      <main className="container">
        <ToDoForm onAdd={addHandler} />
      </main>
    </>
  );
};

export default App;
