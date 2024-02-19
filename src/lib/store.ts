import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './features/todos/tasksSlice'
import userSlice from './features/user/userSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      tasksSlice: tasksSlice,
      userSlice: userSlice,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']