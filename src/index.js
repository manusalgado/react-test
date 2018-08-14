import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Main Styles
import './index.scss';

// Components
import Header from './components/header/Header';
import Router from './Router';

const Root = () => {
    return(
        <div>
            <Header/>
            <div>
                <Router />
            </div>
        </div>
    )
}
render(<Root />, document.getElementById('root'));
registerServiceWorker();