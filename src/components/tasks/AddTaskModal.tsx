import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '@/lib/hooks';
import { addTask } from '@/lib/features/todos/tasksSlice';
import Modal from '../ui/Modal';


interface TaskFormData {
    id: number;
    status: 'pending' | 'running' | 'completed' | 'archive'; // Adjusted status types
    title: string;
    description: string;
    date: string;
    assignedTo: string;
    priority: 'low' | 'medium' | 'high';
}

interface AddTaskModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm<TaskFormData>();
  const dispatch = useAppDispatch();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit: SubmitHandler<TaskFormData> = (data) => {
    dispatch(addTask(data));
    onCancel();
  };

  return (
    <>
   
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Task">
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            Title
          </label>
          <input
            className="w-full rounded-md"
            type="text"
            id="title"
            {...register('title')}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="description" className="mb-2">
            Description
          </label>
          <textarea
            className="w-full rounded-md"
            id="description"
            {...register('description')}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="date" className="mb-2">
            Deadline
          </label>
          <input
            className="w-full rounded-md"
            type="date"
            id="date"
            {...register('date')}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="assignedTo" className="mb-2">
            Assign to
          </label>
          <select
            className="w-full rounded-md"
            id="assignedTo"
            {...register('assignedTo')}
          >
            {/* Options */}
            <option disabled>Select one</option>
            <option value="Firoz Ahammad">Firoz Ahammad</option>
            <option value="Shariar Rohoman">Shariar Rohoman</option>
            <option value="Nahid Hasan">Nahid Hasan</option>
            <option value="Asiqur Rahaman">Asiqur Rahaman</option>

          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="priority" className="mb-2">
            Priority
          </label>
          <select
            className="w-full rounded-md"
            id="priority"
            {...register('priority')}
          >
            <option disabled>Select one</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="flex gap-3 justify-end">
          <button
            onClick={() => onCancel()}
            type="button"
            className="btn btn-danger "
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary ">
            submit
          </button>
        </div>
      </form>
      
    </Modal>
    </>
  );
};

export default AddTaskModal;
