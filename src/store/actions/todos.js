import { ADD_TODO, GET_TODOS } from "../constants/todos";

export const addTodo = () => {
  return {
    type: ADD_TODO,
    data: {},
  };
};

export const getTodo = {
  type: GET_TODOS,
};
