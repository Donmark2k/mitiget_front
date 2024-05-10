import { useContext } from "react";
import AuthContext from "../context/authcontext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    let {user} = useContext(AuthContext)

    if (!user){
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute