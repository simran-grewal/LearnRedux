var redux = require('redux');

var stateDefault = {
  Name: 'Learn C++',
  Category: 'Book',
  Price: 1200
}
var reducer = (state = stateDefault, action) => {
      switch(action.type) {
        case 'CHANGE_BOOK':
              return{
                ...state,
                Name: action.Name
              };
        default : return state;
      }
}

var store = redux.createStore(reducer);

store.dispatch({
  type: 'CHANGE_BOOK',
  Name: 'Go With JavaScript'
});
console.log(store.getState());
store.dispatch({
  type: 'CHANGE_BOOK',
  Name: 'Go With Java'
});
console.log(store.getState());
