import React from "react";

import { Steps } from "antd";

import { steps } from "./App";

const FormSteps = ({ current, component: Component }) => {
  console.log("helo", current);
  return (
    <>
      <Steps
        type="navigation"
        current={current}
        className="site-navigation-steps"
      >
        {steps?.map((step) => (
          <Steps.Step key={step?.title} title={step?.title} />
        ))}
      </Steps>
      <div>
        <Component />
      </div>
    </>
  );
};

export default FormSteps;
