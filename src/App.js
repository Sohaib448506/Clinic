import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NewPatientForm from "./components/NewPatientForm";
import AddInsuranceForm from "./components/AddInsuranceForm";
import AppointmentForm from "./components/AppointmentSelect";
import FormSteps from "./FormSteps";

export const steps = [
  // { title: "Log In", path: "/" },
  {
    step: 0,
    title: "Verify Insurance",
    path: "/verify-insurance",
    component: AddInsuranceForm,
  },
  {
    step: 1,
    title: "New Patient",
    path: "/new-patient",
    component: NewPatientForm,
  },
  {
    step: 2,
    title: "Select Appointment",
    path: "/appointment",
    component: AppointmentForm,
  },
];

const App = () => {
  return (
    <div
      style={{
        background: "#e3e9e4",
        minHeight: "100vh",
        padding: "100px",
      }}
    >
      <div>
        <Router>
          <Switch>
            {steps.map((item) => (
              <Route
                exact
                key={item?.step}
                path={item.path}
                render={() => (
                  <FormSteps current={item.step} component={item.component} />
                )}
              />
            ))}
            <Redirect from="/" to="/verify-insurance" />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
