import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/layout/Header';
import AddContact from './component/contacts/AddContact';
import Contacts from './component/contacts/Contacts';
import NotFound from './component/pages/NotFound';
import { Provider } from './context';
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <Router>
          <Header />
          <div className="wrapper">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contancts" component={Contacts} />
              <Route exact path="/add" component={AddContact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
