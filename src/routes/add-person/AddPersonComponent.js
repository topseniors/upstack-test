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
import AddPerson from '../../components/AddPerson/AddPerson';

class AddPersonComponent extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <div>
          <h1>{this.props.title}</h1>
          <AddPerson />
        </div>
      </div>
    );
  }
}

export default AddPersonComponent;
