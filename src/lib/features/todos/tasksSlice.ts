import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  status: 'pending' | 'running' | 'completed'| 'archive'; // Adjusted status types
  title: string;
  description: string;
  date: string;
  assignedTo: string;
  priority: 'low' | 'medium' | 'high'; // Adjusted priority types
}

interface TasksState {
  tasks: Task[];
  userSpecificTasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
  userSpecificTasks: [],
};

const tasksSlice = createSlice({
  name: 'tasksSlice',
  initialState,
  reducers: {
    addTask: (state, { payload }: PayloadAction<Omit<Task, 'id' | 'status'>>) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: 'pending', ...payload });
      } else {
        const lastElement = state.tasks[state.tasks.length - 1];
        state.tasks.push({
          id: lastElement.id + 1,
          status: 'pending',
          ...payload,
        });
      }
    },    
    
    removeTask: (state, { payload }: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload);
    },
    updateStatus: (state, { payload }: PayloadAction<{ id: number; status: 'pending' | 'running' | 'completed'| 'archive' }>) => {
      const taskToUpdate = state.tasks.find((item) => item.id === payload.id);
      if (taskToUpdate) {
        taskToUpdate.status = payload.status;
      }
    },
    userTasks: (state, { payload }: PayloadAction<string>) => {
      state.userSpecificTasks = state.tasks.filter(
        (item) =>
          item.assignedTo === payload &&
          (item.status === 'pending' || item.status === 'running')
      );
    },
  },
});

export const { addTask, updateStatus, removeTask, userTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
