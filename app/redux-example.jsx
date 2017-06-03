var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;
// It is Pure Function
// It is reducer
// if there is no state then it is Anonymous
var reducer = (state = stateDefault, action) => {

    switch(action.type) {
      case 'CHANGE_NAME':
          return {
            ...state,
            name: action.name
          };
      case 'ADD_HOBBY':
            return {
              ...state,
              hobbies: [
                ...state.hobbies,
                {
                  id: nextHobbyId++,
                  hobby: action.hobby
                }
              ]
            };

      case 'ADD_MOVIE':
            return {
              ...state,
              movies: [
                ...state.movies,
                {
                  id: nextMovieId++,
                  title: action.title,
                  genre: action.genere
                }
              ]
            }
      case 'REMOVE_HOBBY' :
            return {
              ...state,
              hobbies:
              state.hobbies.filter((hobby) => {
                return hobby.id !== action.id;
              })
            }
      case 'REMOVE_MOVIE' :
            return {
              ...state,
              movies: state.movies.filter(movie => movie.id !== action.id)

            }

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

    console.log('New state', store.getState());
})

var currentState = store.getState();
console.log('Current State', currentState);

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Simran'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'playing piano'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'playing Keyboard'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Grewal'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Hero',
  genre: 'Action'
});
store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Love',
  genre: 'Romantic'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});
