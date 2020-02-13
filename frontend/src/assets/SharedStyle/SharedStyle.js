import styled from 'styled-components';

const Form = styled.div`
  background-color:#fff;
  padding: 8px;
  margin-bottom: 16px;
  text-align: center;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
`
const FormHeader = styled.div`
  font-size: 2em;
  font-weight: bold;
  color: #ff8c43;
`
const FormBody = styled.div`
  width: 60%;
  margin: 0 auto;
  overflow: auto;

  && label {
    display: block;
    text-align: left;
    font-weight: bold;
    padding-bottom: 4px;
    color: #665e57;
  }

  && input {
    width: 100%;
    border: 1px solid #f0e9e9; 
    padding: 8px;
    margin-bottom: 16px;
  }
`
const Button = styled.input`
  float: right;
  background-color: #a23e48;
  border: 1px solid #821822;
  padding: 4px 8px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 8px;
`

export { Form, FormHeader, FormBody, Button };