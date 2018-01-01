import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NewPaper from './paper';
import Typography from 'material-ui/Typography';

import Hover from './hover';

class Item extends Component {

  constructor(props) {
    super(props);

    let useCustomStyles = false;
    let tC = 0;
    let tR = 0;

    if (props.rn && !isNaN(props.rn[0]) && !isNaN(props.rn[1])) {
      tC = props.rn[0];
      tR = props.rn[1];
      useCustomStyles = true;
    }

    this.state = {
      useCustomStyles,
      style: {
        gridColumnEnd: "span " + tC,
        gridRowEnd: "span " + tR
      },
      open: false,
    }

  }

  render() {

    const hover = this.props.hoverChild ?
      <Hover open={this.state.open}>
        {this.props.hoverChild}
      </Hover> : <div/>
    ;

    return (
      <div
       style = {this.state.useCustomStyles ? this.state.style : {}}
       {...this.props.options}
       onMouseOver={() => this.setState({
         open: true,
       })}
       onMouseOut={() => this.setState({
         open: false,
       })}
      >
        <NewPaper>
          <Typography type="headline" component="h3">
            {this.props.title}
          </Typography>
          {this.props.children}
        </NewPaper>
        {hover}
      </div>
    );
  }
}

Item.propTypes = {
  rn: PropTypes.arrayOf(PropTypes.number),
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
  hoverChild: PropTypes.element,
}

export default Item;
