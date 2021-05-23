import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enterNameIsValid, setEnterNameIsValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEnterNameIsValid(false);
      return;
    }

    setEnterNameIsValid(true);
    console.log(enteredName);
    const enterValue = nameInputRef.current.value;
    console.log(enterValue);
    setEnteredName("");
  };

  const nameInputClasses = enterNameIsValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          onChange={nameInputChangeHandler}
          id="name"
          value={enteredName}
        />
        {!enterNameIsValid && <p className='error-text'>Name must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
