import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { Users } from "./components/Users";
import "./styles.css";

export default function App() {
  return (
  <BrowserRouter>
  <Switch>
    <Layout>
    <Route exact path="/" component={Home} />
    <Route exact path="/users/:id" component={About}/>
<Route exact path="/users" component={Users} /> 
    </Layout>
    </Switch>
  </BrowserRouter>
  );
}
