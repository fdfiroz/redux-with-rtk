'use client'

import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import TaskDetailsModal from './TaskDetailsModal';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { updateStatus, userTasks } from '@/lib/features/todos/tasksSlice';
interface ItemProp {
  id: number;
  status: string;
  title: string;
  description: string;
  date: string;
  assignedTo: string;
  priority: string;

}
const MyTasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { tasks, userSpecificTasks } = useAppSelector((state) => state.tasksSlice);
  const { name } = useAppSelector((state) => state.userSlice);
  const [taskId, setTaskId] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userTasks(name));
  }, [dispatch, name, tasks]);

  const handleDetails = (id:number) => {
    setTaskId(id);
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <TaskDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} id={taskId} />

      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
      {userSpecificTasks?.map((item) => (
          <div
            key={item.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-3">
              <button
                onClick={() => handleDetails(item.id)}
                className="grid place-content-center"
                title="Details"
              >
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={() =>
                  dispatch(updateStatus({ id: item.id, status: 'completed' }))
                }
                className="grid place-content-center"
                title="Done"
              >
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
