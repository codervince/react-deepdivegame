import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


//render components here
ReactDOM.render(
    // React.createElement(BookList, {books:books}),
    <App />
    ,
    document.getElementById("react")
);


//what is this for?
registerServiceWorker();
