import { createSlice , nanoid } from '@reduxjs/toolkit'

interface todo{
    id : string;
    title : string;
    completed : boolean;
}

export interface todos{
    todos : todo[]
}

const initialState : todos = {
    todos : [{id : "1243" , title:'cycling' , completed:true},
              {id : "1244" , title:'running' , completed:false}
    ]
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers:{
    addTodo : (state , action)=>{
      const todo = {
        id : nanoid(),
        title : action.payload,
        completed : false
      }
      state.todos.push(todo);
    },
    markCompletedTask : (state , action) =>{
      const id = action.payload;
      state.todos.map((todo)=>{
        if(todo.id === id){
          todo.completed = true;
        }
      })
    }
  }
})

export const {addTodo , markCompletedTask} = todoSlice.actions;
export default todoSlice.reducer;
