import { useState } from 'react'
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Task Manager</h1>
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
  );
};
export default App
