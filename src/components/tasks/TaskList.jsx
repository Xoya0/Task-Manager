import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { getTasks } from '../../services/tasks';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const loadTasks = async () => {
    try {
      const { tasks: newTasks } = await getTasks(user.uid);
      setTasks(newTasks);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, [user.uid]);

  return (
    <div>
      {/* Task List Logic Here */}
      {loading ? (
        <p>Loading tasks...</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
