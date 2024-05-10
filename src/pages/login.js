import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/authcontext'

const Login = () => {
  const {loginUser} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    loginUser(email, password)
  }
  return (
    <div className='home'>
      <h1>Sign Into Your Account</h1>

      <form onSubmit={handleSubmit}>
        
        <label>Email:</label>
        <input 
          type="email" 
          name="email"
          required />

        <label>Password:</label>
        <input 
          type="password" 
          name="password"
          required />

        <div className='btn-container'>
          <button type='submit'>Login</button>
        </div>
        <span>Don't Have an Account; &nbsp;
          <Link className='link' to="/register">Register</Link>
        </span>

      </form>
    </div>
  )
}

export default Login