
import React, { useEffect, useState } from 'react';
import './Form.css';
import logo from '../logo.svg';

const Form = () => {
  const [ inputValue, setInputValue ] = useState('');
  const [ inputType, setInputType ] = useState('password');
  // TODO: REMOVE STARTING EMAIL ADDRESS IN useState()
  const [ email, setEmail ] = useState('bob@gmail.com');

  // Make AJAX request or take email address from props if request made in App
  useEffect(() => {
    console.log('making API call');

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
    // Want TRUE only after length > 0 (alternatively: could check only after pw is correct length)
    if(!inputValue.length) return false;

    const end = email.indexOf('@');
    const emailSubStr = email.slice(0,end);
    console.log(email, '& sub string: ', emailSubStr);// TODO: DELETE ME

    // return TRUE if does not include email or emailSubStr
    // return FALSE if it does include email or emailSubStr
    return !inputValue.includes(email) && !inputValue.includes(emailSubStr);
    // return !inputValue.includes(emailSubStr);
  }

  const isCorrectLength = inputValue.length >= 8 && inputValue.length <= 72;
  const hasUppercase = /[A-Z]/.test(inputValue);
  const hasLowercase = /[a-z]/.test(inputValue);
  const hasNumber = /[0-9]/.test(inputValue);
  const notEmail = checkIfContainsEmail();

  console.log(notEmail);// TODO: DELETE ME

  // BONUS: 
  // const isValidPassword = could return an obj from one function above and then use:
  //    Object.values(input).every(test => !!test);
  // if isValidPassword = true: drop confetti and display congrats message
  //  OR
  // onBlur = () => {
  //   if(isValidPassord) ...confetti
  // }


  // All 5 requirements with dynamic class to add strikethrough
  // Strikethrough animation from left to right

  return (
    <div className='formContainer'>
      <img src={logo} className="logo" alt="logo" />

      <form>
        <label for='password'>Password</label>
        <div>
          <input type={inputType} name='password' id='password' value={inputValue} onChange={handleInputChange}/>

          <input type='checkbox' name='show' id='show-cb' onChange={handleShowPassword}/>
          <label for='show'>Show</label>
        </div>
      </form>

      <div className='requirements'>
        <ul>
          <p className={isCorrectLength ? 'strike-out' : ''}>8-72 Characters</p>
          <p className={hasLowercase ? 'strike-out' : ''}>1 Lowercase Character</p>
          <p className={notEmail ? 'strike-out' : ''}>Should Not Match Your Email Address</p>
          <p className={hasUppercase ? 'strike-out' : ''}>1 Uppercase Character</p>
          <p className={hasNumber ? 'strike-out' : ''}>1 Number</p>
        </ul>
      </div>
    </div>
  )
}

export default Form;