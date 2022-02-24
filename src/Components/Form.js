
import React, { useEffect, useState } from 'react';
import './Form.css';
import logo from '../logo.svg';

const Form = () => {
  const [ inputValue, setInputValue ] = useState('');
  const [ inputType, setInputType ] = useState('password');
  const [ email, setEmail ] = useState('');

  // Make AJAX request or take email address from props if request made in App
  useEffect(() => {
    console.log('making API call');

    const fetchData = async () => {
      try {
        const res = await fetch('https://run.mocky.io/v3/09e642b5-b52f-43c1-837b-8ebf70c10813');
        const data = await res.json();
  
        console.log(data); // TODO: DELETE ME
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
    // Want to check only after length > 0 (alternatively: could check only after pw is correct length)
    if(!inputValue.length) return false;

    const end = email.indexOf('@');
    const emailSubStr = email.slice(0,end);
    console.log(email, '& sub string: ', emailSubStr);// TODO: DELETE ME

    // return TRUE if does not include email or emailSubStr
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
          <li className={hasLowercase ? 'strike-out' : ''}>1 Lowercase Character</li>
          <li className={isCorrectLength ? 'strike-out' : ''}>8-72 Characters</li>
          <li className={notEmail ? 'strike-out' : ''}>Should Not Match Your Email Address</li>
        </ul>
        <ul>
          <li className={hasUppercase ? 'strike-out' : ''}>1 Uppercase Character</li>
          <li className={hasNumber ? 'strike-out' : ''}>1 Number</li>
        </ul>
      </div>
    </div>
  )
}

export default Form;