import React, { Component } from 'react';
import Contact from '../Contact/Contact';
import { Consumer } from '../../../context';

class Contacts extends Component {

  render() {
    return (
      <Consumer>
        {value => {
          // const { contacts } = value;
          return (
            value.contacts.map(contact => (
              <Contact
                key={contact.id}
                contact={contact}
              />
            ))
          )
        }}
      </Consumer>
    )
  }
}

export default Contacts;

