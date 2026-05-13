export interface Todo  {
  id: number
  todo: string
  completed: boolean
  userId: number
}

interface TodoResponse {
  todos: Todo[]
  total : number
  skip : number
  limit : number
}

const BASE_URL = 'https://dummyjson.com/todos/'

export async function fetchTodos(): Promise<TodoResponse> {
  const res = await fetch(BASE_URL + '?limit=8')
  const data: TodoResponse = await res.json()

  return data;
}
