import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="5e339f24-ce9f-4781-ab90-a9c2e073b466" language="en-US" >
    <Provider>
        <App />
    </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);