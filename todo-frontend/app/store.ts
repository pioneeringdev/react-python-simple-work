import { getAllTodo } from './../services/todo';
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
  reducer: {
    [getAllTodo.reducerPath]: getAllTodo.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(getAllTodo.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch