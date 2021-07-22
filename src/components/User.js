import React from 'react'

function User({ details }) {
  console.log(details)
  if (!details) {
    return <h3>Working fetching your user&apos;s details...</h3>
  }

  return (
    <div>
      <p>Name:{details.name}</p>
      <p>Email: {details.email}</p>
      <p>Password: {details.password }</p>
    </div>
  )
}

export default User