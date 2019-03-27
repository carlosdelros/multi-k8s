import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="">
            <Link to="/">Home</Link>
            <div></div>
            <Link to="/otherpage">Other Page</Link>
            <h1>Fib Calculator!</h1>
          </header>
          <div>
            <Route exact path="/" component={Fib}/>
            <Route path="/otherpage" component={OtherPage}/>
          </div>
        </div>
      </Router>
    );
  }
}
 
export default App;
