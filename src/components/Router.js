/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <Router>
        <Switch>
          {isLoggedIn ? (
            <p>
              <Router excat path="/">
                <Home />
              </Router>
            </p>
          ) : (
            <Router excat path="/">
              <Auth />
            </Router>
          )}
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
