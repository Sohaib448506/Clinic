import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const StepOne = ({ onNext }) => {
  const onFinish = (values) => {
    onNext(values);
  };

  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>New Patient Form</h1>
      </div>
      <div>
        <p style={{ textAlign: "center" }}>
          Please fill out the form to verify your eligibility
        </p>
      </div>
      <Form name="newPatientForm" onFinish={onFinish} scrollToFirstError>
        <Form.Item
          name="fName"
          rules={[
            {
              required: true,
              message: "Please input your first name!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="First Name"
          />
        </Form.Item>
        <Form.Item
          name="lName"
          rules={[
            {
              required: true,
              message: "Please input your last name!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Last Name"
          />
        </Form.Item>
        <div style={{ width: "100%" }}>Date of Birth</div>
        <Form.Item
          name="dob"
          rules={[
            {
              required: true,
              message: "Please input your date of birth!",
            },
          ]}
        >
          <Input
            prefix={<CalendarOutlined className="site-form-item-icon" />}
            type="date"
            placeholder="Date of Birth"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not a valid email!",
            },
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="pNumber"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            prefix={<PhoneOutlined className="site-form-item-icon" />}
            type="number"
            placeholder="Phone Number"
          />
        </Form.Item>
        <Form.Item
          name="zCode"
          rules={[
            {
              required: true,
              message: "Please input your zip code!",
            },
          ]}
        >
          <Input
            prefix={<EnvironmentOutlined className="site-form-item-icon" />}
            type="number"
            placeholder="Zip Code"
          />
        </Form.Item>
        <Form.Item style={{ textAlign: "end" }}>
          <Button type="primary" htmlType="submit" className="submitButton">
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const StepTwo = ({ onSubmit, data }) => {
  const { Option } = Select;

  const handleSubmit = (values) => {
    onSubmit({ ...data, ...values });
  };

  return (
    <div className="centerWhiteBox">
      <Form name="newPatientForm" onFinish={handleSubmit}>
        <h1 style={{ textAlign: "center" }}>Please Enter Your Information</h1>
        <p style={{ textAlign: "center" }}>
          Please fill out the form to verify your eligibility
        </p>
        <Form.Item
          name="sex"
          rules={[{ required: true, message: "Please select your gender" }]}
        >
          <Select placeholder="Select your Gender">
            <Option value="F">Female</Option>
            <Option value="M">Male</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="feet"
          rules={[
            { required: true, message: "Please select your height (feet)" },
          ]}
        >
          <Select placeholder="Select your height (feet)">
            <Option value="3">3 ft</Option>
            <Option value="4">4 ft</Option>
            <Option value="5">5 ft</Option>
            <Option value="6">6 ft</Option>
            <Option value="7">7 ft</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="inches"
          rules={[
            { required: true, message: "Please select your height (inches)" },
          ]}
        >
          <Select placeholder="Select your height (inches)">
            <Option value="1">1 in</Option>
            <Option value="2">2 in</Option>
            <Option value="3">3 in</Option>
            <Option value="4">4 in</Option>
            <Option value="5">5 in</Option>
            <Option value="6">6 in</Option>
            <Option value="7">7 in</Option>
            <Option value="8">8 in</Option>
            <Option value="9">9 in</Option>
            <Option value="10">10 in</Option>
            <Option value="11">11 in</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="weight"
          rules={[
            { required: true, message: "Please enter your weight in pounds" },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Enter your weight in pounds"
          />
        </Form.Item>
        <Form.Item style={{ textAlign: "end" }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const TwoStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const history = useHistory();

  const handleNext = (data) => {
    setFormData(data);
    setStep(2);
  };

  const handleSubmit = (data) => {
    // do something with form data, like sending it to a server
    console.log("New Patient Data", data);
    alert("New Patient Form has been submitted sucessfully");
    history.push("/appointment");
    setStep(1);
    setFormData({});
  };

  return (
    <div className="p-4" style={{ maxWidth: "600px", margin: "auto" }}>
      {step === 1 && <StepOne onNext={handleNext} />}
      {step === 2 && <StepTwo onSubmit={handleSubmit} data={formData} />}
    </div>
  );
};

export default TwoStepForm;
