import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div>
      <p>{task.title}</p>
      {/* Другие детали задачи */}
    </div>
  );
};

export default TaskItem;
