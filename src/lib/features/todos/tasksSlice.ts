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
  tasks: [
    {
      id: 1,
      status: 'pending',
      title: 'Remove Button',
      description:
        'We need a remove button in our task card. Make the button red and use Heroicon for tashbin icon.',
      date: '2023-08-28',
      assignedTo: 'Mir Hussain',
      priority: 'high',
    },
  ],
  userSpecificTasks: [],
};

const tasksSlice = createSlice({
  name: 'tasksSlice',
  initialState,
  reducers: {
    addTask: (state, { payload }: PayloadAction<Task>) => {
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
    updateStatus: (state, { payload }: PayloadAction<{ id: number; status: 'pending' | 'running' | 'completed' }>) => {
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
