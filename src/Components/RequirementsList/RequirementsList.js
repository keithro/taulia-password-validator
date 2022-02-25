import './RequirementsList.css';

const RequirementsList = (props) => {
  const {
    isCorrectLength,
    hasUppercase,
    hasLowercase,
    hasNumber,
    notEmail
  } = props;

  return (
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
  )
}

export default RequirementsList;