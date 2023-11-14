import BookForm from '../BookForm/BookForm';
import BookList from '../BookList/BookList';
import ListName from '../ListName/ListName.jsx';

// We use useSelector to pull information
// out of our Redux store.
import { useSelector, useDispatch } from 'react-redux';

// We use useDispatch to send information
// to our Redux Store.

import './App.css';

function App() {

  // Connect a local variable to our reducer
  const count = useSelector(store => store.count);
  const dispatch = useDispatch();
  const listName = useSelector(store => store.listName)

  const increaseCount = () => {
    // To send data to Redux using dispatch
    const action = {type: 'INCREASE'};
    // Actions commply have a type which is a string and optionally a payload.
    dispatch(action);
  }

  const decreaseCount = () => {
    const action = {type: 'DECREASE'};
    dispatch(action);
  }

  const resetCount = () => {
    const action = {type: 'RESET'};
    dispatch(action);
  }


  // TODO - GET Book List from server

  return (
    <div className="App">
      <header><h1>{listName}</h1></header>
      <div>Count:{count}</div>
      <div>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={resetCount}>Reset</button>
        <ListName />
      </div>
      <main>
        
        <BookForm />
        <BookList />
      </main>
    </div>
  );
}

export default App;
