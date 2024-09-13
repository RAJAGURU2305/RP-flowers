import React from 'react'

const Login = () => {
  return (
    <form className='login'> 
    <div className='login1'>
      <h1>Login</h1>
      <p>Please enter your e-mail and Password</p>
    <label htmlFor="">username</label>
      <input type="Name" placeholder='Name' />
    </div>
    <div className='login2'>
    <label htmlFor="">Password</label>
      <input type="Password" placeholder='password' />
    </div>
    <button style={{width:280}} className='btn btn-success' >submit</button>
    <br />

    <p>Don't have an account? <a href="/Createone">Create one</a></p>
  
</form>
  )
}

export default Login