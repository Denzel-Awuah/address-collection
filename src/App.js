import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


import Resedential from "./components/Resedential";
import Employment from "./components/Employment";
import PropertyAddress from "./components/Property";
import Home from "./components/Home";
import { useDispatch } from "react-redux";
import { addressActions } from "./store";
import Summary from "./components/Summary";

export default function App() {


  const dispatch = useDispatch();


  const resetReduxData = () => {
    dispatch(addressActions.reset());
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/resedential">Resedential</Link>
            </li>
            <li>
              <Link to="/property">Property</Link>
            </li>
            <li>
              <Link to="/employment">Employment</Link>
            </li> */}
          </ul>
        </nav>

        <button onClick={resetReduxData}>Reset Data</button>
        <hr />

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/resedential" component={Resedential}>

          </Route>
          <Route path="/property" component={PropertyAddress}>

          </Route>
          <Route path="/employment" component={Employment}>

          </Route>
          <Route path="/summary" component={Summary}>

          </Route>
          <Route path="/" component={Home} >

          </Route>
        </Switch>

      </div>
    </Router>

  );
}


