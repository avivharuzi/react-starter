import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './../pages/Home/Home';

const routes = () => {
    return (
        <main>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </main>
    );
};

export default routes;
