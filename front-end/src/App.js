import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages';
import CustomerOrder from './pages/CustomerOrder';
import Register from './pages/Register';

function App() {
  return (
    <main>
      <Switch>
        <Route
          exact
          path="/"
          render={ (props) => <Redirect to="/login" { ...props } /> }
        />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route path="/customer/orders" component={ CustomerOrder } />
      </Switch>
    </main>
  );
}

export default App;
