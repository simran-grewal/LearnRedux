var redux = require('redux');
console.log('Redux-todo-example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
}
var reducer = (state = stateDefault, action) => {

    switch (action.type) {
      case 'CHANGE_SEARCH_TEXT':
            return{
              ...state,
              searchText: action.searchText
            };
      default: return state;
    }
};
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension? window.devToolsExtension(): f => f
));

store.subscribe(() => {
  var state = store.getState();
  document.getElementById('app').innerHTML = state.searchText;
})
store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'my todo'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'your todo'
});
