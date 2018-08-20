import React from 'react';
import { Switch, Route } from 'react-router-dom';
import newHome from './newHome';
import Quiz from './Quiz';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={newHome} />
      {/* <Route path="/quiz" component={Quiz} /> */}
    </Switch>
  </main>
);

export default Main;
