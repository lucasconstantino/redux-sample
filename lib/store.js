
import reducer from './reducer';

export default function Store() {
  let store = {};

  let state = reducer(undefined, {
    type: 'INITIAL_STATE'
  });

  store.dispatch = function (action) {
    state = reducer(state, action);
  };

  store.getState = function () {
    return state;
  };

  return store;
}
