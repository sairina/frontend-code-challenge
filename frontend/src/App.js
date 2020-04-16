import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Admin from './Admin.js';
import Home from './Home.js';
import Register from './Register.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Register />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
