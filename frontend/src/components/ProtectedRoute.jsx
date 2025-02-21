import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ roles }) => {
    const { user, token } = useAuth(); // Get user and token from AuthContext

    // If no token, redirect to login
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // If roles are specified and user doesn't have the required role, redirect to home
    if (roles && !roles.includes(user?.role)) {
        return <Navigate to="/" replace />;
    }

    // If authenticated and authorized, render the child routes
    return <Outlet />;
};

export default ProtectedRoute;