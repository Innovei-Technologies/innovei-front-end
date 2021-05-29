import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/about";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/about">
              <h1 class="font-sans">About</h1>
            </Link>
          </li>
          <li></li>
          <li></li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
