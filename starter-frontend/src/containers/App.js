import React, { Component } from "react";
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";
import List from '../components/List';
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      
      <List />
    </Router>
  </Provider>
);

export default App;
