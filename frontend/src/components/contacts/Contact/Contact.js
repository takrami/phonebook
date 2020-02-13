import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropType from 'prop-types';
import { Consumer } from '../../../context';
import axios from 'axios';

const Card = styled.div`
  display: flex;
  background-color: #fff;
  padding: 8px;
  margin-bottom: 16px;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
  && ul {
    flex: 9;
  }
`
class Contact extends Component {
  onDeleteClick = async (id, dispatch) => {
    if(window.confirm('Are you sure?')) {
      console.log(2)
      await axios
        .delete
        (`http://localhost:3000/contacts/${id}`);
      dispatch({type: 'DELETE_CONTACT', payload: id})
    } else {
      console.log(3)
    }
  };
 
  render() {
    const { id, name, phone, email } = this.props.contact;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <Card className="card">
              <ul>
                <li><h4>{name}</h4></li>
                <li>Phone: {phone}</li>
                <li>Email: {email}</li>
              </ul>
              <Link to={`/edit/${id}`}>
                <i
                  className="fas fa-pencil-alt"
                  style={{ cursor: 'pointer', float: 'right', textAlign: 'right', color: 'black', marginRight: '1rem'}}
                />
              </Link>
              <i
                className="fas fa-times"
                style={{ cursor: 'pointer', float: 'right', textAlign: 'right', color: '#ff3c38'}}
                onClick={this.onDeleteClick.bind(this, id, dispatch)}
              />
            </Card>
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
