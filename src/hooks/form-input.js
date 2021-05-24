import { useState } from "react";

const useFormInput = (IsValid) => {
    const [ enteredValue , setEnteredValue] = useState('');
    const [ isTouched , setIsTouched] = useState(false);

    const enteredValueIsValid = IsValid(enteredValue);
    const hasError = !enteredValueIsValid && isTouched;
    
    const valueChangeHandler = event =>{
        setEnteredValue(event.target.value);
    }

    const valueBlurHanlder = event =>{
        setIsTouched(true);
    }


    const reset =()=>{
        setEnteredValue('');
        setIsTouched(false);
    }

    return{
        value: enteredValue,
        isValid: enteredValueIsValid,
        hasError,
        valueChangeHandler,
        valueBlurHanlder,
        reset
    }
};

export default useFormInput;
