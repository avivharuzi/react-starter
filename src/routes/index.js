import React from 'react';
import { Route } from 'react-router-dom';

import Home from './../pages/Home/Home';

const routes = () => {
    return (
        <main>
            <Route path="/" exact component={Home} />
        </main>
    );
};

export default routes;
