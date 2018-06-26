import React from 'react';
import { Route, Switch } from 'react-router-dom';

import asyncComponent from './../hoc/asyncComponent';

const Home = asyncComponent(() => import('./../pages/Home/Home'));
const ErrorPage = asyncComponent(() => import('./../pages/ErrorPage/ErrorPage'));

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
