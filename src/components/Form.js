import React from 'react'

export default function Form (props){

    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props

   const onSubmit = event => {
       event.preventDefault()
       submit()
   }

   const onChange = event => {
       const {name, value, type, checked} = event.target
       const valueToUse = type === 'checkbox' ? checked : value
       change(name,valueToUse)
   }

    return(
       <form onSubmit={onSubmit}>
           <h2> Add a user to the system!</h2>
           <button id="submitBtn" disabled={disabled}>Submit</button>

        <div>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
        </div>

        <label>Name
        <input
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>

        <label>Email
        <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>
        <label>Password
        <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='password'
          />
        </label>

        <label>Terms of service
        <input type="checkbox" name="tos" onChange={onChange} checked={values.tos}/>
        </label>
       </form>
    )
}