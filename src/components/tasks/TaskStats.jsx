import { CheckCircle, Clock, AlertTriangle } from 'lucide-react';
import Card from '../ui/Card';

const TaskStats = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const urgentTasks = tasks.filter(task => 
    task.priority === 'high' && !task.completed
  ).length;

  const stats = [
    {
      label: 'Total Tasks',
      value: totalTasks,
      icon: Clock,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
    },
    {
      label: 'Completed',
      value: completedTasks,
      icon: CheckCircle,
      color: 'text-green-500',
      bgColor: 'bg-green-100 dark:bg-green-900/20',
    },
    {
      label: 'Pending',
      value: pendingTasks,
      icon: AlertTriangle,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/20',
    },
    {
      label: 'Urgent',
      value: urgentTasks,
      icon: AlertTriangle,
      color: 'text-red-500',
      bgColor: 'bg-red-100 dark:bg-red-900/20',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="flex items-center p-4">
          <div className={`${stat.bgColor} p-3 rounded-lg mr-4`}>
            <stat.icon className={`w-6 h-6 ${stat.color}`} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {stat.label}
            </p>
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              {stat.value}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TaskStats; 