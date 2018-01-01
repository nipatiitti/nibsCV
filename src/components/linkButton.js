import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = {
  button: {
    textDecoration: 'underline'
  },
};

function LinkButton ({options, local, url, title, classes}) {
  return (
    <div>
      <Button
        {...options}
        aria-label="link"
        onClick={() => {local ? window.location = url : window.open(url)}}
        className={classes.button}
      >
        {title}
      </Button>
    </div>
  )

}

LinkButton.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  local: PropTypes.bool,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LinkButton);
