import React, { createContext, useContext } from "react";

export const Todocontext = createContext({
  todos: [{ id: 1, todo: "todo msg", completed: false }],
  addtodo: (todo) => {},
  updatedTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleCompleteTodo: (id) => {},
});

export const useTodo = () => {
  return useContext(Todocontext);
};

export const TodoProvider = Todocontext.Provider;
