
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

    // const fetchData = async () => {
    //   try {
    //     const res = await fetch('https://run.mocky.io/v3/09e642b5-b52f-43c1-837b-8ebf70c10813');
    //     const data = await res.json();
  
    //     console.log(data);
    //     // setEmail(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    // fetchData();
  },[]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleShowPassword = (event) => {
    const type = event.target.checked ? 'text' : 'password';
    setInputType(type);
  }
  // const isCorrectLength = check if input.length between 8 - 72
  const isCorrectLength = inputValue.length >= 8 && inputValue.length <= 72;
  console.log(isCorrectLength);
  // const hasUppercase = check for 1 uppercase char
  // const hasLowercase = 
  // const hasNumber = 
  // const notEmailMatch = Check if typed password includes part email


  // BONUS: 
  // const isValidPassword = could return an obj from one function above and then use:
  //    Object.values(input).every(test => !!test);
  // if isValidPassword = true: drop confetti and display congrats message


  // Input Form:
  // How to toggle show/hide password? State for input type (password/text), toggle onClick?

  // In form validation message display (separate component?):
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
          <p>1 Lowercase Character</p>
          <p>Should Not Match Your Email Address</p>
          <p>1 Uppercase Character</p>
          <p>1 Number</p>
        </ul>
      </div>
    </div>
  )
}

export default Form;