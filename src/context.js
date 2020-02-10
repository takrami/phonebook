import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact =>
          contact.id !== action.payload
        )
      }
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
      // case 'UPDATE_CONTACT':
      //   return {
      //     ...state,
      //     contacts: state.contacts.map(contact =>
      //     contact.id === action.payload.id
      //     ? (contact = action.payload)
      //     : contact
      //     )
      //   }
    default: 
      return state;
  }
}

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Ati',
        phone: '644546565',
        email: 'ati@gmail.com'
      },
      {
        id: 2,
        name: 'Atfsi',
        phone: '644546565',
        email: 'sdfd@gmail.com'
      },
      {
        id: 3,
        name: 'Ataasdsi',
        phone: '644546565',
        email: 'dgfds@gmail.com'
      },
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  };

  render() {
    return (
      <Context.Provider value={this.state} >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;