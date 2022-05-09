import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<App />)


