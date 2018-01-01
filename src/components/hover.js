import React from 'react';
import PropTypes from 'prop-types';

function Hover({ children, open }) {

  return (
    <div className={open ? "hover show" : "hover hide"}>
      {children}
    </div>
  )

}

Hover.propTypes = {
  children: PropTypes.element,
  open: PropTypes.bool.isRequired,
}

export default Hover;
