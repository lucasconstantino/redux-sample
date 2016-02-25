
import Store from './lib/store';

let store = Store();

console.log(store.getState());

store.dispatch({
  type: 'ADD_TODO',
  title: 'Fazer um tutorial sobre Redux',
});

console.log(store.getState());

store.dispatch({
  type: 'ADD_TODO',
  title: 'Fazer um tutorial sobre React'
});

console.log(store.getState());

store.dispatch({
  type: 'REMOVE_TODO',
  title: 'Fazer um tutorial sobre Redux'
});

console.log(store.getState());
