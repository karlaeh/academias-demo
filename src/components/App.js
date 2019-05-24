import React, { Component } from 'react';
import SimpleNavBar from './SimpleNavBar';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {Switch} from 'react-router';
import Text from './Text';
import Form from './Form';
import User from './User';
import Home from './Home';
import '../styles/app.css'

class App extends Component {
  
  state = {
    text: {}
  }

  handleText = (text) => {
    this.setState({
      text: text
    })
  }

  render (){
    return (
      <div className="App">
        <Router>
          <SimpleNavBar/>
          <div className="main-container">
            <Switch>
              <div>
                <Route exact path="/" component={Home}/>
                <Route path="/text" render={(props)=> <Text text={this.state.text} {...props}/>}/>
                <Route path="/form" render={(props) => <Form handleText={this.handleText} {...props}/>}/>
                <Route path="/user" component={User}/>
              </div>
            </Switch>
          </div>
        </Router>
      </div>
    )
  };
}

export default App;
