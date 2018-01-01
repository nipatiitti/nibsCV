import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

const styles = {
  paper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center'
  },
};

function NewPaper({children, classes}) {
  return (
    <Paper className={classes.paper}>
      {children}
    </Paper>
  );
}

NewPaper.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewPaper);
