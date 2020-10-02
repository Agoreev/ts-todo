import React, { useState } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

export const ToDoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressEnter = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        value={title}
        onChange={changeHandler}
        type="text"
        id="title"
        placeholder="Enter todo"
        onKeyPress={keyPressEnter}
      />
      <label htmlFor="title" className="active">
        Enter todo
      </label>
    </div>
  );
};
