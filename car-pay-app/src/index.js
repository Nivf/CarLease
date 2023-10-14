import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { store } from './Redux/store'
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);