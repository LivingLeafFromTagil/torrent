import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createContext } from 'react';
import UserStore from './client/store/userstore';
import GameStore from './client/store/gamestore';


const context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <context.Provider value={{
    user: new UserStore(),
    game: new GameStore()
  }}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </context.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
