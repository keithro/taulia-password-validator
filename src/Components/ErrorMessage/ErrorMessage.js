import './ErrorMessage.css';

const ErrorMessage = (props) => {

  return (
    <div className='error-message'>
      {/* <p>Unable to retreive email</p> */}
      <p>{props.errorMessage}</p>
    </div>
  )
}

export default ErrorMessage;