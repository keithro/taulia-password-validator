import React, { useEffect, useState } from "react";
import PasswordInput from "../PasswordInput/PasswordInput";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./Form.css";
import logo from "../../logo.svg";

const Form = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Make AJAX request on page load
  useEffect(() => {
    const url = "https://run.mocky.io/v3/09e642b5-b52f-43c1-837b-8ebf70c10813";

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setEmail(data.user.email);
      } catch (error) {
        console.log(error);
        setErrorMessage("Unable to retreive email");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="form-container">
      <header className="input-header">
        <img src={logo} className="logo" alt="logo" />
      </header>

      <PasswordInput email={email} />

      {!!errorMessage.length && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
};

export default Form;
