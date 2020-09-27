import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Homepage from './Components/Homepage/Homepage';

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/SignIn' />
          </Route>
          <Route path='/SignUp' component={SignUp} />
          <Route path='/SignIn' component={SignIn} />
          <Route path='/Homepage' component={Homepage} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
