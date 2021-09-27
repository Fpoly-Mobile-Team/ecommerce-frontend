import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LocalBrand from "./pages/LocalBrand";
import ForeignBrand from "./pages/ForeignBrand";
import SignUpSeller from "./pages/SignUpSeller";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/product-detail">
          <ProductDetail />
        </Route>
        <Route path="/sign-up-seller">
          <SignUpSeller />
        </Route>
        <Route path="/local-brand">
          <LocalBrand />
        </Route>
        <Route path="/foreign-brand">
          <ForeignBrand />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
