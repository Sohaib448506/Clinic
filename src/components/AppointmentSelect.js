import { useState, useEffect } from "react";
import { Radio, Button, Form } from "antd";
import { useHistory } from "react-router-dom";

const { Group: RadioGroup } = Radio;

const healthProviderList = [
  { label: "Shantel", value: "39" },
  { label: "David", value: "45" },
  { label: "Jen", value: "34" },
  { label: "Brannick", value: "8" },
  { label: "Karen", value: "56" },
  { label: "Grame", value: "71" },
  { label: "Maren", value: "68" },
  { label: "Levi", value: "25" },
];

const appointmentTypeList = [
  { label: "In-person Acute Care 15 Minutes", value: "41" },
  { label: "Telehealth Acute Care - 15 Min", value: "13" },
  { label: "Acute Care (New Patient) - 15 Min", value: "46" },
];

const AppointmentForm = ({ onNext }) => {
  const [appointmentType, setAppointmentType] = useState("");
  const [healthProvider, setHealthProvider] = useState("");

  const handleAppointmentTypeChange = (e) => {
    setAppointmentType(e.target.value);
  };

  const handleHealthProviderChange = (e) => {
    setHealthProvider(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    onNext({ appointmentType, healthProvider });
  };

  return (
    <div>
      <div className="text-center">
        <h1>Schedule An Appointment</h1>
      </div>
      <div>
        <p>
          <strong>Choose Appointment Type</strong>
        </p>
      </div>
      <form style={{ textAlign: "left" }} onSubmit={handleSubmit}>
        <div style={{ paddingLeft: "20px" }}>
          <RadioGroup
            onChange={handleAppointmentTypeChange}
            value={appointmentType}
          >
            {appointmentTypeList.map((type) => (
              <Radio key={type.value} value={type.value}>
                {type.label}
              </Radio>
            ))}
          </RadioGroup>
        </div>
        <br />
        <div>
          <p>
            <strong>Choose A Provider</strong>
          </p>
        </div>

        <div style={{ paddingLeft: "20px" }}>
          <RadioGroup
            onChange={handleHealthProviderChange}
            value={healthProvider}
          >
            {healthProviderList.map((provider) => (
              <Radio key={provider.value} value={provider.value}>
                {provider.label}
              </Radio>
            ))}
          </RadioGroup>
        </div>
        <br />
        <div className="text-end">
          <Button type="primary" htmlType="submit">
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

const NewAppointmentForm = ({ handleSubmit, data }) => {
  const { Item } = Form;

  const alreadyScheduled = ["9:00 am", "1:00 pm", "4:00 pm"]; // example array

  const timeOptions = [
    "9:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 pm",
    "1:00 pm",
    "2:00 pm",
    "3:00 pm",
    "4:00 pm",
    "5:00 pm",
    "6:00 pm",
  ];
  const [form] = Form.useForm();
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    setAvailableTimes(
      timeOptions.filter((time) => !alreadyScheduled.includes(time))
    );
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <br />
      <div>
        <p>
          <strong>Please Select Your Appointment Time</strong>
        </p>
      </div>
      <Form
        onFinish={(values) => {
          handleSubmit({ ...data, ...values });
        }}
        form={form}
      >
        <Item
          label="Appointment Time"
          name="appointmentTime"
          rules={[
            { required: true, message: "Please select an appointment time" },
          ]}
        >
          <Radio.Group>
            {availableTimes.map((time) => (
              <Radio key={time} value={time}>
                {time}
              </Radio>
            ))}
          </Radio.Group>
        </Item>
        <Item>
          <div className="text-end">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Item>
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
    console.log("Appointment Data", data);
    alert("Appointment has been booked sucessfully");
    history.push("/sign-in");
    setStep(1);
    setFormData({});
  };

  return (
    <div className="p-4" style={{ maxWidth: "900px", margin: "auto" }}>
      {step === 1 && <AppointmentForm onNext={handleNext} />}
      {step === 2 && (
        <NewAppointmentForm handleSubmit={handleSubmit} data={formData} />
      )}
    </div>
  );
};

export default TwoStepForm;
