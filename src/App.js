import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/LogIn/SignUp";
import NewPatientForm from "./components/NewPatientForm";
import AddInsuranceForm from "./components/AddInsuranceForm";
import AppointmentForm from "./components/AppointmentSelect";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LogIn />
          </Route>
          <Route exact path="/sign-in">
            <LogIn />
          </Route>
          <Route exact path="/new-patient">
            <NewPatientForm />
          </Route>
          <Route exact path="/register">
            <SignUp />
          </Route>
          <Route exact path="/verify-insurance">
            <AddInsuranceForm />
          </Route>
          <Route exact path="/appointment">
            <AppointmentForm />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
