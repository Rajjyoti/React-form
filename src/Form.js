import React, {useState} from 'react';
import FormSubmit from './FormSubmit';
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = () => {
    const [isSubmitted, setIsSubmitted]= useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }

  return  <>
  <div className='form-container'>
    <span className='close-btn'>×</span>
    <div className='form-content-left'>
    </div>
    {!isSubmitted ? <FormSubmit submitForm={submitForm} /> : <FormSuccess />}
  </div>
</>
};

export default Form;
