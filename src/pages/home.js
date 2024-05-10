import React, {useContext} from 'react'
import AuthContext from "../context/authcontext"
import { Link } from 'react-router-dom'

const Home = () => {
  const {user, logoutUser} = useContext(AuthContext)

  return (
    <div className='home'>
      <h1 className="mitiget">
        <span className="white">MITI</span>
        <span className="light-green">GET</span>
      </h1>
      <p>There has to be a Better Way for Information Security</p>

      {user ?
        <>
         
          <p className="home-p">Welcome to today's Interview</p>
          <div className="home-button">   
          <Link className="link" to="/dashboard"> View Profile</Link>
          <Link className="link" onClick={logoutUser}>Logout</Link>
          </div>
        </>
      :
        <>
          <p className="home-p">Register Today </p>
          <div className="home-button">   

          <Link className="link" to="/login">Login</Link>
          <Link className="link" to="/register">Register</Link>
          </div>
        </>
      }
    </div>
  )
}

export default Home