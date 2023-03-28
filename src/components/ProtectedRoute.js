import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ pathname: location.pathname }} replace />;
  }

  return children;
};
ProtectedRoute.propTypes = {
  children: PropTypes.shape({
    user: PropTypes.string,
    login: PropTypes.string,
    logout: PropTypes.func,
  }).isRequired,
};

export default ProtectedRoute;
