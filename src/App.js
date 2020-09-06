import React from 'react';
import './App.css';
import Header from "./Header"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./Home"

function App() {
  return (
    <Router>

      <Switch>
        <Route path="/checkout">
          <Header />
          <h1>Checkout</h1>
        </Route>
        <Route path="/Login">
          <Header />
          <h1>Login</h1>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
      {/* <div className="App">
        <p>Hiiiiii</p>
        <h2>Hello World</h2>
      </div> */}
    </Router>
  );
}

export default App;
