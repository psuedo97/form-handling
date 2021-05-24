import useFormInput from "../hooks/form-input";

const BasicForm = (props) => {
  const {
    value: enteredNameValue,
    isValid: nameInputIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHanlder: nameBlurHandler,
    reset: resetNameInput,
  } = useFormInput((value) => value.trim() !== "");

  const {
    value: enteredLnameValue,
    isValid: lnameInputIsValid,
    hasError: lnameInputHasError,
    valueChangeHandler: lnameChangeHandler,
    valueBlurHanlder: lnameBlurHandler,
    reset: resetLnameInput,
  } = useFormInput((value) => value.trim() !== "");

  const {
    value: enteredEmailValue,
    isValid: emailInputIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHanlder: emailBlurHandler,
    reset: resetEmailInput,
  } = useFormInput((value) => value.includes("@"));

  const formSubmission = (event) => {
    event.preventDefault();

    if (!nameInputIsValid || !lnameInputIsValid || !emailInputIsValid) {
      return;
    }
    console.log(enteredNameValue +enteredLnameValue +enteredEmailValue  )
    resetNameInput();
    resetEmailInput();
    resetLnameInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const lnameInputClasses = lnameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmission}>
      <div className="form-control">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredNameValue}
            id="fname"
          />
          {nameInputHasError && (
            <p className="error-text">Please fill the field.</p>
          )}
        </div>
        <div className={lnameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            value={enteredLnameValue}
            onChange={lnameChangeHandler}
            onBlur={lnameBlurHandler}
            id="lname"
          />
          {lnameInputHasError && (
            <p className="error-text">Please fill the field.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmailValue}
        />
        {emailInputHasError && (
          <p className="error-text">Please fill the field.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
