const TodosView = ({ todos, getAllTodos }) => {
  return todos?.length ? (
    <>
      {todos.map((todo, index) => {
        return <li key={index}>{todo?.title}</li>;
      })}
      <button onClick={getAllTodos}>Click</button>
    </>
  ) : (
    "Loading"
  );
};

export default TodosView;
