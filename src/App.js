import React from "react";
import Home from "./pages/Home/Home";
import SearchPage from "./pages/SearchPage/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={SearchPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
