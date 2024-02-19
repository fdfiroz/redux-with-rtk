import { useSelector } from 'react-redux';
import Modal from '../ui/Modal';
import { RootState } from '@/lib/store';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  id: number;
}

const TaskDetailsModal = ({ isOpen, setIsOpen, id }:Props) => {
  const { tasks } = useSelector((state: RootState) => state.tasksSlice);

  const task = tasks.find((item) => item.id === id);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title || 'Task Not Found'}>
      {task?.description || 'Task description not found.'}
    </Modal>
  );
};

export default TaskDetailsModal;
