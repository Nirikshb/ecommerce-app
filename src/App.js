// Build a Navigation Bar
// After successful login take user to productlist page automatically
// Create logout functionality
// Create Routes
// Create Shared Layout  : Private Routes and Restricted Routes  DONE

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

//adding paths i would like to my app to go to.
//home, cart, list, login, products
const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route exact path="/" element={<Navigate to={PATHS.PRODUCT_LIST} />} />

        <Route path="/" element={<PrivateRoutes />}>
          <Route path={PATHS.PRODUCT_LIST} element={<ProductList />} />
          <Route path={PATHS.PRODUCT_DETAIL} element={<ProductDetail />} />
          <Route path={PATHS.CART} element={<Cart />} />
        </Route>

        <Route path="/" element={<RestrictedRoutes />}>
          <Route path={PATHS.LOGIN} element={<Login />} />
        </Route>

        <Route path="*" element={<Navigate to={PATHS.PRODUCT_LIST} />} />
      </Routes>
    </div>
  );
};

export default App;
