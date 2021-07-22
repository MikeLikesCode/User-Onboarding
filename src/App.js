import React, { useState, useEffect } from "react";
import User from "./components/User";
import Form from "./components/Form";
import FormSchema from "./validation/formSchema";
import axios from "axios";
import * as yup from "yup";
import "./App.css";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  tos: false,
};

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
};

function App() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(false);

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((resp) => {
        console.log(resp);
        setUsers([resp.data, ...users]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(setFormValues(initialFormValues));
  };

  const validate = (name, value) => {
    yup
      .reach(FormSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => console.log(err));
  };

  const inputChange = (name, value) => {
    validate();
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    FormSchema.isValid(formValues).then((valid) =>
      valid ? setDisabled(false) : setDisabled(true)
    );
  }, [formValues]);

  return (
    <div>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {users.map((user, idx) => {
        return <User key={idx} details={user} />;
      })}
    </div>
  );
}

export default App;
