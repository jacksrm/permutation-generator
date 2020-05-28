import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Introduction from './pages/Introduction';
import Permutation from './pages/Permutation';

export default function Routes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Introduction} />
        <Route exact path="/permutation" component={Permutation} />
      </Switch>
    </BrowserRouter>
  );
}