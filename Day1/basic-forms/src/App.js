import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };
  const handleFirstNameInputChange = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };
  const handleLastNameInputChange = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };
  const handleEmailInputChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">
            Success! Thank you for registering.
          </div>
        ) : null}
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ? (
          <span>Please enter your first name</span>
        ) : null}
        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? (
          <span>Please enter your last name</span>
        ) : null}
        <input
          onChange={handleEmailInputChange}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? (
          <span>Please enter your email</span>
        ) : null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
