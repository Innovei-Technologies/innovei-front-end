import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about.js";
import GovernmentServices from "./components/pages/governmentServices";
import BusinessServices from "./components/pages/businessServices";
import ContactUs from "./components/pages/contactUs";
import PageNotFound from "./components/pages/pageNotFound";

import Navbar from "./components/navbar";
//eslint-disable-next-line
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="mt-16 relative pb-16">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/business-services">
            <BusinessServices />
          </Route>
          <Route path="/government-services">
            <GovernmentServices />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/404">
            <PageNotFound />
          </Route>
          <Redirect from="*" to="/404" />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
