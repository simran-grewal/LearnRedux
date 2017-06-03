var redux = require('redux');

console.log('Starting redux example');

// It is Pure Function


// It is reducer
// if there is no state then it is Anonymous
var reducer = (state = {name : 'Anonymous'}, action) => {

    switch(action.type) {
      case 'CHANGE_NAME':
          return {
            ...state,
            name: action.name
          };
      default: return state;
    }

};
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension? window.devToolsExtension(): f => f
));

// Subscribe  to changes-- To check the changes---
// get fired when there is some changes in state

store.subscribe(() => {
    var state = store.getState();

    console.log('Name is', state.name);

    document.getElementById('app').innerHTML = state.name;
})

var currentState = store.getState();
console.log('Current State', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Simran'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Grewal'
});
