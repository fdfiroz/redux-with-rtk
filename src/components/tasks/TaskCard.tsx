'use client'
import { removeTask, updateStatus } from '@/lib/features/todos/tasksSlice';
import { useAppDispatch } from '@/lib/hooks';
import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
interface TaskProp {
  id: number;
  status: string;
  title: string;
  description: string;
  date: string;
  assignedTo: string;
  priority: string;

}
const TaskCard = ({ task }: { task: TaskProp }) => {
  const dispatch = useAppDispatch();

  let updatedStatus: 'pending' | 'running' | 'completed' | 'archive';

  if (task.status === 'pending') {
    updatedStatus = 'running';
  } else if (task.status === 'running') {
    updatedStatus = 'completed';
  } else {
    updatedStatus = 'archive';
  }

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${
          task.priority === 'high' ? 'text-red-500' : ''
        } ${task.priority === 'medium' ? 'text-yellow-500' : ''} ${
          task.priority === 'low' ? 'text-green-500' : ''
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">
          <button onClick={() => dispatch(removeTask(task.id))} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={() =>
              dispatch(updateStatus({ id: task.id, status: updatedStatus as 'pending' | 'running' | 'completed'| 'archive'}))
            }
            title="In progress"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
