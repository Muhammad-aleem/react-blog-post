import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Create from "./component/Create";
import Home from "./component/Home";
import PostDetail from "./component/PostDetail";
import NotFound from "./component/NotFound";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
 
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="main_div">
            <div className="blog__content">
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/Create" component={Create}/>
                  <Route exact path="/posts/:id" component={PostDetail}/>
                  <Route exact path="*" component={NotFound}/>
                </Switch>
            </div>
          </div>
      </div>
    </Router>
  );
}

export default App;
