import React, { useEffect, useState } from 'react';
import EmailInput from '../EmailInput/EmailInput';
// import RequirementsList from '../RequirementsList/RequirementsList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './Form.css';
import logo from '../../logo.svg';

const Form = () => {
  // const [ inputValue, setInputValue ] = useState('');
  // const [ inputType, setInputType ] = useState('password');
  const [ email, setEmail ] = useState('');
  const [ isError, setIsError ] = useState(false);

  // Make AJAX request on page load
  useEffect(() => {
    const url = 'https://un.mocky.io/v3/09e642b5-b52f-43c1-837b-8ebf70c10813';

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setEmail(data.user.email);
      } catch (error) {
        console.log(error);
        setIsError(true)
      }
    }
    fetchData();
  },[]);

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // }

  // // Change input type to toggle show/hide password
  // const handleShowPassword = (event) => {
  //   const type = event.target.checked ? 'text' : 'password';
  //   setInputType(type);
  // }

  // // Check only after length > 0 
  // // return TRUE if does not include email or emailSubStr
  // const checkIfContainsEmail = ()=> {
  //   if(!inputValue.length) return false;

  //   const end = email.indexOf('@');
  //   const emailSubStr = email.slice(0,end);

  //   return !inputValue.includes(email) && !inputValue.includes(emailSubStr);
  // }

  // const isCorrectLength = inputValue.length >= 8 && inputValue.length <= 72;
  // const hasUppercase = /[A-Z]/.test(inputValue);
  // const hasLowercase = /[a-z]/.test(inputValue);
  // const hasNumber = /[0-9]/.test(inputValue);
  // const notEmail = checkIfContainsEmail();
  // // const isValidPassord = isCorrectLength && hasUppercase && hasLowercase && hasNumber && notEmail;

  return (
    <div className="form-container">
      <header className='input-header'>
        <img src={logo} className="logo" alt="logo" />
      </header>

      {/* <form>
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
      </form> */}

      <EmailInput email={email} />

      {!isError || <ErrorMessage />}
    </div>
  );
}

export default Form;
