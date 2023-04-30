import React, { useState } from 'react';
import StartQuiz from './StartQuiz';
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [user, setLoginUser] = useState({})
  console.log(user);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <StartQuiz setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
