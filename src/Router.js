import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Liga from './components/liga/Liga';
import Calendario from './components/calendario/Calendario';

const Router = () => {
    return (
     <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Liga} />
            <Route path='/Liga' component={Liga} />
            <Route path='/Calendario' component={Calendario} />
        </Switch>
    </BrowserRouter>   
    )
}

export default Router;