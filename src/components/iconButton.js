import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

function IconButton ({name, url, title}) {

  return (
    <div>
      <p>{title}</p>
      <Button
        fab
        mini
        color="primary"
        aria-label="git"
        onClick={() => window.open("https://github.com/nipatiitti/" + url)}
      >
        <Icon className={name} />
      </Button>
    </div>
  )

}

IconButton.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default IconButton;
