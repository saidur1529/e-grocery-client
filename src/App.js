import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddProduct from "./Components/AddProduct/AddProduct";
import AllOrder from "./Components/AllOrder/AllOrder";
import Checkout from "./Components/Checkout/Checkout";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import MyOrders from "./Components/MyOrders/MyOrders";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home'>
            <Home />
          </Route> 
          <Route exact path='/'>
          <Home />
          </Route> 
          <Route path='/login'>
            <Login />
          </Route> 
          <PrivateRoute path='/checkout/:id'>
            <Checkout />
          </PrivateRoute> 
          {/* <PrivateRoute path='/admin'>
            <Admin />
          </PrivateRoute>  */}
          <PrivateRoute path='/allOrder'>
            <AllOrder />
          </PrivateRoute> 
          <PrivateRoute path='/addProduct'>
            <AddProduct/>
          </PrivateRoute> 
          <PrivateRoute path='/myOrders'>
            <MyOrders />
          </PrivateRoute> 
          <Route path='/*'>
            <NotFound />
          </Route> 
        </Switch>

      </Router>
    </div>
  );
}

export default App;
