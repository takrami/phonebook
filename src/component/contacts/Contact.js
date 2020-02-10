import React, { Component } from 'react';
import PropType from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {
  state = {

  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios
        .delete
        (`http://localhost:3000/contacts/${id}`);
      dispatch({type:  'DELETE_CONTACT', payload: id})
    }
    catch(e) {
      dispatch({type:  'DELETE_CONTACT', payload: id})
    }
  };
 
  render() {
    const { id, name, phone, email } = this.props.contact;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card">
              <ul>
                <li><h4>{name}</h4></li>
                <li>Phone: {phone}</li>
                <li>Email: {email}</li>
              </ul>
              <i
                className="fas fa-times"
                style={{ cursor: 'pointer', float: 'right', textAlign: 'right', color: 'red'}}
                onClick={this.onDeleteClick.bind(this, id, dispatch)}
              />
            </div>
          )
        }}
      </Consumer>
    );
  }
}

Contact.propType = {
  contact: PropType.object.isRequired,
}

export default Contact;
