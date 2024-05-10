import React, {useState, useContext, useEffect} from 'react'
import useAxios from "../reducer/axiosSlice"
import { jwtDecode } from 'jwt-decode'
import { Link } from 'react-router-dom'
import AuthContext from '../context/authcontext'


const Dashboard = () => {
  const [response, setResponse] = useState("")
  const api = useAxios();
  const token = localStorage.getItem("authTokens")
  const {logoutUser} = useContext(AuthContext)

  
  const decode = jwtDecode(token)
  let user_id = decode.user_id
  let username = decode.username
  let email = decode.email
  let name = decode.name

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/test/")
        setResponse(response.data.response)

      } catch (error) {
        console.log(error)
        setResponse("cannot display user details")
      }
    }
    
    fetchData()
    
  }, [])
  

  return (
    <div className='home'>
         <div className="profile-link">
            <Link className='dash-link' to="/">Home</Link>
            <Link className='dash-link' onClick={logoutUser}>Logout</Link>
         </div>
         <div className='welcome-box'>
      <p className='username'>Welcome, {username}</p>
    </div>
    <h2>Profile Details</h2>
    <div className="profile-p" >
  <p><span className="profile-label">Name:</span> <span className="profile-data">{name}</span></p>
  <p><span className="profile-label">Username:</span> <span className="profile-data">{username}</span></p>
  <p><span className="profile-label">UserID:</span> <span className="profile-data">{user_id}</span></p>
  <p><span className="profile-label">Email:</span> <span className="profile-data">{email}</span></p>
</div>
      
    </div>
  )
}

export default Dashboard