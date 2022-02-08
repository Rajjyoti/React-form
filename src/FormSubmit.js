import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const FormSubmit = (submitForm) => {
    const {handleChange, values, handleSubmit, errors}=useForm(submitForm, validate);


  return <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
          <h1>Get Started! Submit by filling the information below.</h1>
          <div className="form-inputs">
              <label htmlFor="username" className="form-label">Username</label>
              <input 
                  id="username"
                  type="text" 
                  name="username" 
                  className="form-input" 
                  placeholder="Enter your username"
                  value={values.username}
                  onChange={handleChange}
                  />
                  {errors.username && <p>{errors.username}</p>}
          </div>
          <div className="form-inputs">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                id="title" 
                type="text" 
                  name="title" 
                  className="form-input" 
                  placeholder="Enter your title"
                  value={values.title}
                  onChange={handleChange}
                  />
                  {errors.title && <p>{errors.title}</p>}
          </div>
          <div className="form-inputs">
              <label htmlFor="body" className="form-label">Body</label>
              <input
                id="body" 
                type="text" 
                  name="body" 
                  className="form-input" 
                  placeholder="Enter your body"
                  value={values.body}
                  onChange={handleChange}
                  />
                {errors.body && <p>{errors.body}</p>}
          </div>
          <button className="form-input-btn" type="submit">Submit</button>
      </form>
  </div>;
};

export default FormSubmit;
