import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AdminRoute = ({ component: Component, manager, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      manager.isADMIN === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/manager" />
      )
    }
  />
);

AdminRoute.propTypes = {
  manager: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  manager: state.manager
});

export default connect(mapStateToProps)(AdminRoute);
