export const addTodo = text => ({
  type: 'ADD_TODO',
  payload: { text },
});
export const removeTodo = text => ({
  type: 'REMOVE_TODO',
  payload: { text },
});
