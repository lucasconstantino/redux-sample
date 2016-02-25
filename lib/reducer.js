// export default
let initialState = {
  todos: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: state.todos.slice().concat(action.title)
      };

    case 'REMOVE_TODO':
      return {
        todos: state.todos.filter(title => title !== action.title)
      };
  }

  return state;
}
