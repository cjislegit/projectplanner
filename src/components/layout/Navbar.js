import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignedinLinks from './SignedinLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = props => {
  const { auth } = props;
  const links = auth.uid ? <SignedinLinks /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Project Planner
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);
