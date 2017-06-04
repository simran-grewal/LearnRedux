var redux = require('redux');
var axios = require('axios');
console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();


// Subscribe  to changes-- To check the changes---
// get fired when there is some changes in state
store.subscribe(() => {
    var state = store.getState();
    console.log('New state', store.getState());
    if(state.map.isFetching) {
      document.getElementById('app').innerHTML = 'Loading......'
    }  else if(state.map.url) {
      document.getElementById('app').innerHTML = '<a target = "_blank" href = "'+ state.map.url +'">View Your Location</a>'
    }

});

var currentState = store.getState();
console.log('Current State', currentState);



store.dispatch(actions.fetchLocation());
store.dispatch(actions.changeName('simran'));

store.dispatch(actions.addHobby('playing piano'));

store.dispatch(actions.addHobby('playing keyboard'));

store.dispatch(actions.removeHobby(2));
store.dispatch(actions.changeName('Grewal'));

store.dispatch(actions.addMovie('Hero', 'Action'));
store.dispatch(actions.addMovie('Love', 'Romantic'));

store.dispatch(actions.removeMovie(1));
