import React, { useState, useEffect } from "react";
import { ToDoForm } from "../components/ToDoForm";
import { TodoList } from "../components/TodoList";
import { ITodo } from "../interfaces";

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const completeHandler = (id: number) => {
    const toDoIdx: number = todos.findIndex((todo) => {
      return todo.id === id;
    });
    const toDo: ITodo = todos.find((todo) => {
      return todo.id === id;
    })!;

    const newTodo: ITodo = {
      ...toDo,
      completed: !toDo.completed,
    };

    const newTodos: ITodo[] = [
      ...todos.slice(0, toDoIdx),
      newTodo,
      ...todos.slice(toDoIdx + 1),
    ];
    setTodos(newTodos);
  };

  const deleteHandler = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <ToDoForm onAdd={addHandler} />

      <TodoList
        todos={todos}
        onComplete={completeHandler}
        onDelete={deleteHandler}
      />
    </>
  );
};
