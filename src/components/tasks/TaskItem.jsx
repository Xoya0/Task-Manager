import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Edit2, Trash2, AlertTriangle, Clock } from 'lucide-react';
import { updateTask, deleteTask } from '../../services/tasks';
import toast from 'react-hot-toast';
import Card from '../ui/Card';

const priorityColors = {
  low: 'text-green-500',
  medium: 'text-yellow-500',
  high: 'text-red-500',
};

const TaskItem = ({ task, onTaskUpdated, onTaskDeleted }) => {
  const [loading, setLoading] = useState(false);

  const handleToggleComplete = async () => {
    try {
      const updatedTask = await updateTask(task.id, { 
        completed: !task.completed 
      });
      onTaskUpdated(updatedTask);
      toast.success(updatedTask.completed ? 'Task completed!' : 'Task marked as pending');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setLoading(true);
      try {
        await deleteTask(task.id);
        onTaskDeleted(task.id);
        toast.success('Task deleted successfully');
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Card className={`p-4 flex flex-col justify-between ${task.completed ? 'bg-gray-100 dark:bg-gray-800' : ''}`}>
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <button
              onClick={handleToggleComplete}
              className={`mr-3 ${task.completed ? 'text-green-500' : 'text-gray-400 hover:text-gray-600'}`}
            >
              {task.completed ? <CheckCircle className="w-6 h-6" /> : <span className="w-6 h-6 border rounded-full border-gray-300" />}
            </button>
            <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : 'text-gray-900 dark:text-white'}`}>
              {task.title}
            </h3>
          </div>
          <div className="flex space-x-2">
            <span className={`text-sm font-medium ${priorityColors[task.priority]}`}>
              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </span>
            <button onClick={() => {}} className="text-gray-400 hover:text-gray-600">
              <Edit2 className="w-5 h-5" />
            </button>
            <button onClick={handleDelete} disabled={loading} className="text-red-500 hover:text-red-600">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </div>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{task.description}</p>
        {task.dueDate && (
          <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
            <Clock className="w-4 h-4 mr-1" />
            <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export default TaskItem;

