import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from "../context/authcontext"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const {registerUser} = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    registerUser(name, email, username, password, password2)
  }

  return (
    <div className='home'>
      <h1>Create a new account</h1>
      <form>
        <label>Full Name:</label>
        <input 
          type="text" 
          name="name"
          onChange={(e)=>setName(e.target.value)}
          required />

        <label>Email:</label>
        <input 
          type="email" 
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
          required />

        <label>Username:</label>
        <input 
          type="text" 
          name="username"
          onChange={(e)=>setUsername(e.target.value)}
          required />

        <label>Password:</label>
        <input 
          type="password" 
          name="password"
          onChange={(e)=>setPassword(e.target.value)}
          required />
          <p className="hint">Hint: Password should be more than 8 characters</p>

        <label>Confirm Password:</label>
        <input 
          type="password" 
          name="password2"
          onChange={(e)=>setPassword2(e.target.value)}
          required />

        <div className='btn-container'>
          <button onClick={handleSubmit} type='button'>Register</button>
        </div>
        <span>Already Have an Account; &nbsp;
          <Link className="link" to="/login">Login</Link>
        </span>

      </form>
    </div>
  )
}

export default Register