import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Create a reducer (a variable) to store a counter
// which we can then share across components
//     name    value = initial value        action
const count = (state = 0, action) => {
    console.log('Action', action);
  
    if (action.type === 'INCREASE') {
      return state + 1; //! NOT state += 1. We want to return a new thing not modify the state.
    } else if (action.type === 'DECREASE') {
      return state - 1;
    } else if (action.type === 'RESET') {
      return 0;
    } // count is equal to whatever we return
  
    // return state means the reducer is unchanged.
    return state;
  }
  
  const listName = (state = 'test', action) => {
    if (action.type === 'SET_LIST_NAME') {
      return action.payload;
    }
  
    //! Reducers must always return state by default
    return state;
  }
  
  // Reducer
  const bookList = (state = [], action) => {
    // TODO - set book list with data from server
    if(action.type === 'ADD_BOOK'){
      // Use Spread Operator "..." to
      // combine the existing state (Array)
      // with the new book (action.payload)
      return [...state, action.payload]; // functions similar to .push()
    }
    return state;
  }
  
  //Step 2: create your store
  const reduxStore = createStore(
    combineReducers({
      // This is the only part of this block of code
      // that you will need to change. 
      bookList,
      // All reducers must be added to create store before they can be used
      count,
      listName
  
    }),
    applyMiddleware(logger)
  );

  export default reduxStore;