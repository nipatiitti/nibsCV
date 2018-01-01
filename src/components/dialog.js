import React from 'react';
import PropTypes from 'prop-types'

import LinkButton from './linkButton';
import DialogOld from 'material-ui/Dialog';

function Dialog({open, close}) {

  return (
    <DialogOld open={open} onClose={() => close()}>
      <div className="dialog-inner">
        <p>niilo.jaakkola@icloud.com</p>
        <LinkButton url="https://www.linkedin.com/in/nipatiitti/" title="LinkedIn" />
        <LinkButton url="https://github.com/nipatiitti" title="Github" />
      </div>
    </DialogOld>
  );

}

Dialog.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
}

export default Dialog;
