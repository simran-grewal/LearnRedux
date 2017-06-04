
// It is Pure Function
// It is reducer
// if there is no state then it is Anonymous
  //
  // var oldReducer = (state = stateDefault, action) => {
  //
  //     switch(action.type) {
  //       case 'CHANGE_NAME':
  //           return {
  //             ...state,
  //             name: action.name
  //           };
  //       case 'ADD_HOBBY':
  //             return {
  //               ...state,
  //               hobbies: [
  //                 ...state.hobbies,
  //                 {
  //                   id: nextHobbyId++,
  //                   hobby: action.hobby
  //                 }
  //               ]
  //             };
  //
  //       case 'ADD_MOVIE':
  //             return {
  //               ...state,
  //               movies: [
  //                 ...state.movies,
  //                 {
  //                   id: nextMovieId++,
  //                   title: action.title,
  //                   genre: action.genere
  //                 }
  //               ]
  //             }
  //       case 'REMOVE_HOBBY' :
  //             return {
  //               ...state,
  //               hobbies:
  //               state.hobbies.filter((hobby) => {
  //                 return hobby.id !== action.id;
  //               })
  //             }
  //       case 'REMOVE_MOVIE' :
  //             return {
  //               ...state,
  //               movies: state.movies.filter(movie => movie.id !== action.id)
  //
  //             }
  //
  //       default: return state;
  //     }
  //
  // };
