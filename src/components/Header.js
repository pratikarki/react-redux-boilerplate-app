import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item"><h4>Stream Garne/Herne App</h4></Link>
      <div className="right menu">
        <Link to="/" className="item"><h4>Go To All Streams</h4></Link>
        <GoogleAuth />
      </div>
    </div>
  )
}

export default Header;