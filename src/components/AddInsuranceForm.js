import { useState } from "react";
import { Form, Input, Select, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const { Option } = Select;

const MyForm = () => {
  const [numDependents, setNumDependents] = useState(0);
  const history = useHistory();

  const handleNumDependentsChange = (value) => {
    setNumDependents(value);
  };

  const generateInputs = () => {
    const inputs = [];

    for (let i = 0; i < numDependents; i++) {
      inputs.push(
        <div key={i}>
          <h3>Enter Detail of Dependent {i + 1}</h3>
          <Form.Item name={`member${i}firstName`} rules={[{ required: true }]}>
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item name={`member${i}lastName`} rules={[{ required: true }]}>
            <Input placeholder="Last Name" />
          </Form.Item>
          <Form.Item
            name={`member${i}gender`}
            rules={[
              { required: true, message: "Please input M or F!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (
                    !value ||
                    value.toLowerCase() === "m" ||
                    value.toLowerCase() === "f"
                  ) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Please input M or F!"));
                },
              }),
            ]}
          >
            <Input placeholder="Gender (M or F)" />
          </Form.Item>
          <Form.Item
            name={`member${i}dateOfBirth`}
            rules={[{ required: true }]}
          >
            <Input type="date" placeholder="Date of Birth" />
          </Form.Item>
          <Form.Item
            name={`member${i}groupNumber`}
            rules={[{ required: true }]}
          >
            <Input type="number" placeholder="Group Number" />
          </Form.Item>
        </div>
      );
    }

    return inputs;
  };

  return (
    <div className="p-4" style={{ maxWidth: "600px", margin: "auto" }}>
      <Form
        name="insuranceForm"
        onFinish={(values) => {
          console.log(values, 33333);
          history.push("/new-patient");
        }}
      >
        <div className="titleContent">
          <h1 style={{ textAlign: "center" }}>
            Enter Your Insurance Information
          </h1>
          <Form.Item
            name="insurance"
            rules={[
              { required: true, message: "Please select your insurance!" },
            ]}
          >
            <Select placeholder="Choose your insurance">
              <Option value="" disabled selected>
                Choose your insurance
              </Option>
              <Option value="AETNA">Aetna</Option>
              <Option value="AMPWU">APWU</Option>
              <Option value="MSBCBS">BCBS Mississippi</Option>
              <Option value="TXBCBS">BCBS Texas</Option>
              <Option value="CIGNA">Cigna</Option>
              <Option value="DMBA">DMBA</Option>
              <Option value="EMINS">EMI Health</Option>
              <Option value="Humana">Humana</Option>
              <Option value="UTMLNA">Molina Healthcare of Utah</Option>
              <Option value="PEHP">PEHP</Option>
              <Option value="UTSLHT">Select Health</Option>
              <Option value="TREST">TRICARE East</Option>
              <Option value="TDFIC">TRICARE For Life</Option>
              <Option value="SCWI0">TRICARE West</Option>
              <Option value="UHC">UnitedHealthcare</Option>
              <Option value="UMRWAU">United Medical Resources</Option>
              <Option value="CMSMED">Utah Medicare</Option>
              <Option value="UNUTHP">University of Utah Health Plan</Option>
              <Option value="UTCAID">Utah Medicaid</Option>
              <Option value="UTFEPI">Utah Blue Cross</Option>
              <Option value="UTFEPP">Utah Blue Shield</Option>
              <Option value="UTREBS">
                Utah Regence Blue Cross Blue Shield
              </Option>
              <Option value="OTHER">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="groupID"
            rules={[{ required: true, message: "Please input your group ID!" }]}
          >
            <Input placeholder="Enter your group ID" />
          </Form.Item>
          <Form.Item
            name="memberID"
            rules={[
              { required: true, message: "Please input your member ID!" },
            ]}
          >
            <Input placeholder="Enter your member ID" />
          </Form.Item>
          <Form.Item
            name="numDependents"
            rules={[
              {
                required: true,
                message: "Please input the number of dependents!",
              },
            ]}
          >
            <Input
              type="number"
              placeholder="Number of dependents"
              onChange={(e) => handleNumDependentsChange(e.target.value)}
              suffix={<PlusOutlined />}
            />
          </Form.Item>
          {generateInputs()}
          <div className="text-end">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default MyForm;
