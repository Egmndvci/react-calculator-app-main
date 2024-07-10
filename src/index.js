import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="app-container">
      <App />
    </div>
    <footer className="footer">
      <p>By Egemen DEVECİ</p>
    </footer>
  </React.StrictMode>
);
