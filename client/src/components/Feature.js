import React, { Component } from 'react';
import requireAuth from './requireAuth';

class Feature extends Component {
  render() {
    return <div>Cool features :)</div>;
  }
}

export default requireAuth(Feature);
