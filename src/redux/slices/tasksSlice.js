import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    // другие редюсеры для удаления, обновления и т.д.
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
