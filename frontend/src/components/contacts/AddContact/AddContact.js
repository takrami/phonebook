import React, { Component } from 'react';
import { Consumer } from '../../../context';
import TextInputGroup from '../../layout/TextInputGroup/TextInputGroup';
import uuid from 'uuid';
import axios from 'axios';
import { Form, FormBody, FormHeader, Button} from '../../../assets/SharedStyle/SharedStyle';

class AddContact extends Component {
  state = {
    name: '',
    email: '', 
    phone: '',
    errors: {}
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    // console.log(this.state);

    const { name, email, phone } = this.state;

    // Check for errors
    if(name === '') {
      this.setState({errors: {
        name: 'Name is required'
      }});
      return;
    };

    if(email === '') {
      this.setState({errors: {
        email: 'Email is required'
      }});
      return;
    };

    if(phone === '') {
      this.setState({errors: {
        phone: 'Phone is required'
      }}); 
      return;
    };

    const newContact = {
      id: uuid(),
      name,
      email,
      phone 
    };

    const res = await axios
      .post
      ('http://localhost:3000/contacts', newContact)

    dispatch({ type: 'ADD_CONTACT', payload: res.data })

    // Clear state
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  };
  
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors} = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return(

            <Form>
              <FormHeader>
                Add Contact
              </FormHeader>
              <FormBody>
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup 
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />

                  <TextInputGroup 
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />

                  <TextInputGroup 
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  <Button 
                    type="submit"
                    value="Add Contact"
                    className="btn"
                  />

                </form>
              </FormBody>
            </Form>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact;