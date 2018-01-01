import React, { Component } from 'react';
import '../styles/App.css';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import { Switch, Route } from 'react-router-dom'

import Main from './main.js';
import Dialog from './dialog.js';
import History from './history.js';

class App extends Component {

  constructor(props) {
	   super(props);

     this.state = {
       open: false,
     }

  }

  render(){
    return (
      <div className="App">
        <Dialog open={this.state.open} close={() => this.setState({open: false})} />

        <AppBar position="absolute" >
          <Toolbar>
            <Typography type="title" onClick={() => window.location = '/'} className="flex link">
              Niilo Jaakkola
            </Typography>
            <Button onClick={() => this.setState({open: true})} color="contrast">contact info</Button>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/history' component={History}/>
        </Switch>
      </div>
    )
  }

}

export default App;
