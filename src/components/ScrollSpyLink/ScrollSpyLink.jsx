import React from 'react';
import { Link } from 'react-scroll';

const ScrollSpyLink = ({ to, children }) => {
  return (
    <Link
      activeClass="active"
      to={to}
      spy={true}
      smooth={true}
      offset={-90}
      duration={100}
    >
      {children}
    </Link>
  );
};

export default ScrollSpyLink;