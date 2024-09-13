import React from 'react'

const Signup = () => {
  return (
    <div className='Signup'>
      <h1>Register</h1>
      <p>Please fill in the information below:</p>
         <form className=''>     
    <div className='Signup1'>
    <label htmlFor="">Name</label>
      <input type="Name" placeholder='Name' />
    </div><br />
    <div className='Signup1'>
    <label htmlFor="">Phonenumber</label>
      <input type="Phonenumber" placeholder='Phonenumber' />
      <div/>
      <br />
      <div className='Signup1'></div>
      <label htmlFor="">Email</label>
      <input type="Email" placeholder='Email' />
    </div><br />
    <div className='Signup1'>
    <label htmlFor="">Password</label>
      <input type="Password" placeholder='Password' />
    </div><br />
    <button style={{width:280}} className='btn btn-success' >Create My Account</button>
    <br /> 
</form>
<br />
</div>
  )
}

export default Signup