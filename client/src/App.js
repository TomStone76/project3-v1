import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jobs from "./pages/Jobs";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Listings from "../src/components/Listings"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Jobs} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/jobs/:id" component={Detail} />
          <Route exact path="/listings" component={Listings} />
          <Route component={NoMatch} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
