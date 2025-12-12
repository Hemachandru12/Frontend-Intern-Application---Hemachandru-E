// In src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

// CRITICAL: This line links the CSS processing into the build
import './styles/globals.css'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);