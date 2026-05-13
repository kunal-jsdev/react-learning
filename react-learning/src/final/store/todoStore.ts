import {create} from "zustand";
import type { Todo } from "../api/todos";


interface TodoStore {
  todos : Todo[]
  setTodos : (todos : Todo[]) => void
  addTodo : (todo : Todo) => void
  markCompleted : (id : number) => void
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos : [],
  setTodos : (todos) => set({todos}),
  addTodo : (todo) => set((state) => ({todos : [...state.todos , todo]})),
  markCompleted : (id) => set((state) => ({todos : state.todos.map(todo => todo.id === id ? {...todo, completed: true} : todo)}))
}))

