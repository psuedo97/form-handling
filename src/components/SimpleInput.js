import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEmailEntered] = useState("");
  const [enteredNameTouch, setEnteredNameTouch] = useState(false);
  const [enteredEmailTouch, setEnteredEmailTouch] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.includes("@");
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouch;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouch;

  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid, enteredEmailIsValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouch(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouch(true);

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);
    setEnteredName("");
    setEmailEntered("");
    setEnteredEmailTouch(false);
    setEnteredNameTouch(false);
  };

  const emailInputChangeHandler = (event) => {
    setEmailEntered(event.target.value);
  };
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouch(true);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";
  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          id="name"
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Email Address</label>
        <input
          type="text"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          id="name"
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
