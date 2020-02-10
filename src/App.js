import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import AddContact from './components/contacts/AddContact/AddContact';
import EditContact from './components/contacts/EditContact/EditContact';
import Contacts from './components/contacts/Contacts/Contacts';
import NotFound from './components/pages/NotFound/NotFound';
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
              <Route exact path="/edit/:id" component={EditContact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
