import { queryOptions } from "@tanstack/react-query";
import { fetchTodos } from "../api/todos";
const todoQueryOptions = () => 
  queryOptions({
    queryKey: ['todos'],
    queryFn: () => fetchTodos(),
    staleTime : 30_000,
  })


export default todoQueryOptions;