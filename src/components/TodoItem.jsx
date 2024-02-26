import { useDispatch } from 'react-redux';
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
} from '../redux/actions';
import { MdDeleteOutline } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";
import { MdRemoveDone } from "react-icons/md";




const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">
          {index + 1}.
        </span>
        <span className={`mr-4 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.text}
        </span>
      </div>
      <div className='space-x-3 ml-8'>
        <button
          className="bg-red-400 text-white p-2 px-3 rounded me-2 mt-2"
          onClick={() => dispatch(removeTodo(index))}
        >
            <MdDeleteOutline />
        </button>
        {!todo.completed && (
          <button
            className=" bg-green-500  text-white p-2 px-3 rounded me-2 mt-2"
            onClick={() => dispatch(markCompleted(index))}
          >
          <MdDoneAll />
          </button>
        )}
        {todo.completed && (
          <button
            className=" bg-yellow-500  text-white p-2 px-3 rounded me-2 mt-2"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <MdRemoveDone />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
