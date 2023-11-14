import React from 'react';
import ReactDOM from 'react-dom/client';

// Step 1: import Provider, applyMiddleware, combineReducers, createStore
import { Provider } from 'react-redux';
// End Step 1

import App from './components/App/App';
import './index.css';
import reduxStore from './store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Step 3: Wrap your App in a provider. */}
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
