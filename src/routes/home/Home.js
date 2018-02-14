/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import history from '../../history';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    persons: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        email: PropTypes.string,
        gender: PropTypes.string,
        ip_address: PropTypes.string,
      }),
    ).isRequired,
  };

  constructor(props) {
    super(props);

    this.goToAddPerson = this.goToAddPerson.bind(this);
    this.onSearchStringChanged = this.onSearchStringChanged.bind(this);
    this.history = history;

    this.state = {
      searchString: '',
    };
  }

  onSearchStringChanged(event) {
    this.setState({ searchString: event.target.value });
  }

  goToAddPerson() {
    this.history.push('/add-person');
  }

  render() {
    const { persons } = this.props;
    const { searchString } = this.state;
    const result = persons.filter(
      person =>
        person.first_name.toLowerCase().indexOf(searchString.toLowerCase()) >
        -1,
    );

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Upstack Test</h1>
          <div>
            <button onClick={this.goToAddPerson}>Add Person</button>
          </div>
          <br />
          <input type="text" onChange={this.onSearchStringChanged} />
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>First Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {result.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.first_name}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  persons: state.person.persons,
});

export default connect(mapState, null)(withStyles(s)(Home));
