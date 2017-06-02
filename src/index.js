import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(
    // React.createElement(BookList, {books:books}),
    <App />
    ,
    document.getElementById("react")
);

registerServiceWorker();
