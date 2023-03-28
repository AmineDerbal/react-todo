import {
  useState, useContext, createContext, useEffect,
} from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const getUsername = () => {
    const temp = localStorage.getItem('username');
    const savedUsername = JSON.parse(temp);
    return savedUsername || '';
  };
  const [user, setUser] = useState(getUsername());
  const login = (user) => setUser(user);
  const logout = () => setUser(null);
  useEffect(() => {
    // storing user state
    const temp = JSON.stringify(user);
    localStorage.setItem('username', temp);
  }, [user]);
  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string,
      login: PropTypes.string,
      logout: PropTypes.func,
    }),
  ).isRequired,
};

export const useAuthContext = () => useContext(AuthContext);
