/* eslint-disable no-shadow */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPerson } from '../../actions/person';
import history from '../../history';

class AddPersonPanel extends React.Component {
  static propTypes = {
    addPerson: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      gender: '',
      ip_address: '',
    };
  }

  onFieldChange(fieldName, fieldValue) {
    this.setState({ [fieldName]: fieldValue });
  }

  onSubmit() {
    const { addPerson } = this.props;
    addPerson({ ...this.state });
    history.push('/');
  }

  onCancel() {
    history.goBack();
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="First Name" onChange={(event) => { this.onFieldChange('first_name', event.target.value); }} />
        <br />
        <input type="text" placeholder="Last Name" onChange={(event) => { this.onFieldChange('last_name', event.target.value); }} />
        <br />
        <input type="text" placeholder="Email" onChange={(event) => { this.onFieldChange('email', event.target.value); }} />
        <br />
        <select onChange={(event) => { this.onFieldChange('gender', event.target.value); }}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <input type="text" placeholder="Ip Address" onChange={(event) => { this.onFieldChange('ip_address', event.target.value); }} />
        <br />
        <button onClick={this.onSubmit}>Submit</button>
        <button onClick={this.onCancel}>Cancel</button>
      </div>
    );
  }
}

const mapDispatch = {
  addPerson,
};

const AddPerson = connect(null, mapDispatch)(AddPersonPanel);
export default AddPerson;
