import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function requireAuth(ChildComponent) {
  class ComposedComponent extends Component {
    // component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // component just got updated (received props)
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      auth: state.auth.authenticated,
    };
  }

  return connect(mapStateToProps)(ComposedComponent);
}
