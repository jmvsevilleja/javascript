const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
      // To clone an array but add additional values in the new array, you could write [...myArray, 'new value']
      return [...state, action.todo]
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);