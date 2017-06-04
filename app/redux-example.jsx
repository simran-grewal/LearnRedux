var redux = require('redux');

console.log('Starting redux example');

// Name Reducer and action generator
//----------------------------------
var  nameReducer = (state = 'Anonymous', action) => {
      switch(action.type) {
        case 'CHANGE_NAME':
              return action.name;
        default: return state;
      };
};

var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
}

// Hobby Reducer and action generator
//-------------------------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
    switch(action.type) {
      case 'ADD_HOBBY':
            return [
              ...state,
                {
                  id: nextHobbyId++,
                  hobby: action.hobby
                }
            ];
      case 'REMOVE_HOBBY':
              return state.filter((hobby) => hobby.id !== action.id);
        default: return state;
    }
}

// add hobby action generator
var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
}

// remove movie action generator
var removeHobby = (id) => {
    return {
      type: 'REMOVE_HOBBY',
      id
    }
}
// Movie Reducer and action generator
//----------------------------------
  var nextMovieId = 1;
  var moviesReducer = (state = [], action) => {
      switch(action.type) {
        case 'ADD_MOVIE':
              return [
                ...state,
                {
                  id: nextMovieId++,
                  title: action.title,
                  genre: action.genre
                }
              ];
        case 'REMOVE_MOVIE':
              return state.filter((movie) => movie.id !== action.id);
        default: return state;
      }
  }

// add  movie action generator
  var addMovie = (title, genre) => {
      return {
        type: 'ADD_MOVIE',
        title,
        genre
      }
  }
// remove movie action generator
  var removeMovie = (id) => {
      return {
        type: 'REMOVE_MOVIE',
        id
      }
  }
var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

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

store.dispatch(changeName('simran'));

store.dispatch(addHobby('playing piano'));

store.dispatch(addHobby('playing keyboard'));

store.dispatch(removeHobby(2));
store.dispatch(changeName('Grewal'));

store.dispatch(addMovie('Hero', 'Action'));
store.dispatch(addMovie('Love', 'Romantic'));

store.dispatch(removeMovie(1));
