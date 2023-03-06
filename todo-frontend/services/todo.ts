import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Todo = {
    id?: number,
    title:string,
    description:string,
    category:string,
    completed:boolean
}
// Define a service using a base URL and expected endpoints
export const getAllTodo = createApi({
  reducerPath: 'allTodo',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  tagTypes:["fetchTodo"],
  endpoints: (builder) => ({
    getAllTodos: builder.query<any, string>({
      query: () => `todo`,
      providesTags:["fetchTodo"]
    }),
    getTodoById: builder.mutation({
        query:({id})=> ({
            url: `todo/${id}`,
            method:'GET',    
        })
    }),
    deleteTodo: builder.mutation({
        query:({id})=> ({
            url: `todo/${id}`,
            method:'DELETE',    
        }),
        invalidatesTags:["fetchTodo"]
    }),
    createTodo: builder.mutation({
        query:(data: any)=> ({
            url: `todo`,
            method:'PUT',  
            body:data  
        }),
        invalidatesTags:["fetchTodo"]
    }),
    updateTodo: builder.mutation({
        query:(data: any)=> ({
            url: `todo/`,
            method:'PATCH',  
            body:data  
        }),
        invalidatesTags:["fetchTodo"]
    }),
    markComplete: builder.mutation({
        query:(data: any)=> ({
            url: `todo/mark-complete`,
            method:'PATCH',  
            body:data  
        }),
        invalidatesTags:["fetchTodo"]
    })
  }),
  
})


  


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllTodosQuery, useGetTodoByIdMutation, useCreateTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation, useMarkCompleteMutation } = getAllTodo

