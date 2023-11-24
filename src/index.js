import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const myFirstElement = <h1>Hello React!</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
