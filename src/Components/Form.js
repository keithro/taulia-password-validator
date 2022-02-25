
import React, { useEffect, useState } from 'react';
import './Form.css';
import logo from '../logo.svg';

const Form = () => {
  const [ inputValue, setInputValue ] = useState('');
  const [ inputType, setInputType ] = useState('password');
  const [ email, setEmail ] = useState('');

  // Make AJAX request on page load
  useEffect(() => {
    const url = 'https://run.mocky.io/v3/09e642b5-b52f-43c1-837b-8ebf70c10813';

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
  
        setEmail(data.user.email);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  },[]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  // Change input type to toggle show/hide password
  const handleShowPassword = (event) => {
    const type = event.target.checked ? 'text' : 'password';
    setInputType(type);
  }

  // Check if password meets requirements
  const checkIfContainsEmail = ()=> {
    // Check only after length > 0 
    if(!inputValue.length) return false;

    const end = email.indexOf('@');
    const emailSubStr = email.slice(0,end);

    // return TRUE if does not include email or emailSubStr
    return !inputValue.includes(email) && !inputValue.includes(emailSubStr);
  }

  const isCorrectLength = inputValue.length >= 8 && inputValue.length <= 72;
  const hasUppercase = /[A-Z]/.test(inputValue);
  const hasLowercase = /[a-z]/.test(inputValue);
  const hasNumber = /[0-9]/.test(inputValue);
  const notEmail = checkIfContainsEmail();

  // BONUS: onBlur={handleFocusChange}
  //  handleFocusChange = () => {
  //   if(isValidPassord) ...confetti
  // }

  return (
    <div className="form-container">
      <img src={logo} className="logo" alt="logo" />

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

      <div className="requirements">
        <ul className="requirements-list">
          <li className={isCorrectLength ? "strike-out" : ""}>
            <p>8-72 Characters</p>
          </li>
          <li className={hasUppercase ? "strike-out" : ""}>
            <p>1 Uppercase Character</p>
          </li>
          <li className={hasLowercase ? "strike-out" : ""}>
            <p>1 Lowercase Character</p>
          </li>
          <li className={hasNumber ? "strike-out" : ""}>
            <p>1 Number</p>
          </li>
          <li className={notEmail ? "strike-out" : ""}>
            <p>Should Not Match Your Email Address</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Form;