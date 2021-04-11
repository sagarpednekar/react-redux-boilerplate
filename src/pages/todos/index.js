import { useDispatch, useSelector } from "react-redux";
import TodosView from "../../views/todos";
import { getTodo } from '../../store/actions/todos';

const TodosPage = () => {
  const todosState = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const getAllTodos = () => {
    dispatch(getTodo);
  };

  return <TodosView todos={todosState} getAllTodos={getAllTodos} />;
};

export default TodosPage;
