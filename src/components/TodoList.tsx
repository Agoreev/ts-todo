import React from "react";
import { ITodo } from "../interfaces";

interface TodoListProps {
  todos: ITodo[];
  onComplete(id: number): void;
  onDelete(id: number): void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onComplete,
  onDelete,
}) => {
  if (todos.length === 0) {
    return <p className="center">There is nothing to do</p>;
  }

  const removeHandler = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    onDelete(id);
  };

  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }
        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onComplete(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={(e) => removeHandler(e, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
