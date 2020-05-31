import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { IframeMessageProxy } from 'iframe-message-proxy';
import * as serviceWorker from './serviceWorker';

// Start to listen messages from parent application
IframeMessageProxy.listen();
IframeMessageProxy.config({
    prefix: 'fragmentEvent:',
});
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
