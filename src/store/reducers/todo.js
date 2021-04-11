import { GET_TODOS } from "../constants/todos";

const initialState = [
  {
    id: 1,
    title: "Buy groceries",
  },
];

const todosReducer = (state = initialState, action) => {
  switch (action?.type) {
    case GET_TODOS:
      return state.map((todo) => {
        return { ...todo, id: 2, title: "Changed Groceries" };
      });

    default:
      return state;
  }
};

export default todosReducer;
