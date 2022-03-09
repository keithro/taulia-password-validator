import React, { useState } from "react";
import RequirementsList from "../RequirementsList/RequirementsList";
import "./PasswordInput.css";

const PasswordInput = (props) => {
  const { email } = props;
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("password");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Change input type to toggle show/hide password
  const handleShowPassword = (event) => {
    const type = event.target.checked ? "text" : "password";
    setInputType(type);
  };

  // Check only after length > 0
  // return TRUE if does not include email or emailSubStr
  const checkIfContainsEmail = () => {
    if (!inputValue.length) return false;

    const end = email.indexOf("@");
    const emailSubStr = email.slice(0, end);

    return !inputValue.includes(email) && !inputValue.includes(emailSubStr);
  };

  const isCorrectLength = inputValue.length >= 8 && inputValue.length <= 72;
  const hasUppercase = /[A-Z]/.test(inputValue);
  const hasLowercase = /[a-z]/.test(inputValue);
  const hasNumber = /[0-9]/.test(inputValue);
  const notEmail = checkIfContainsEmail();
  // const isValidPassord = isCorrectLength && hasUppercase && hasLowercase && hasNumber && notEmail;

  return (
    <>
      <form>
        <label for="password">Password</label>
        <div className="password-container">
          <input
            type={inputType}
            name="password"
            id="password"
            value={inputValue}
            onChange={handleInputChange}
          />

          <div className="checkbox-container">
            <input type="checkbox" name="show" onChange={handleShowPassword} />
            <label for="show">Show</label>
          </div>
        </div>
      </form>

      <RequirementsList
        isCorrectLength={isCorrectLength}
        hasUppercase={hasUppercase}
        hasLowercase={hasLowercase}
        hasNumber={hasNumber}
        notEmail={notEmail}
      />
    </>
  );
};

export default PasswordInput;
