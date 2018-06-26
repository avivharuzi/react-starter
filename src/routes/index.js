import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './../pages/Home/Home';
import ErrorPage from './../pages/ErrorPage/ErrorPage';

const routes = () => {
    return (
        <main>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route component={ErrorPage} />
            </Switch>
        </main>
    );
};

export default routes;
