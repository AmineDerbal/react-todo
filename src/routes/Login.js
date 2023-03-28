import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import styles from '../styles/login.module.scss';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const { login } = useAuthContext();
  const location = useLocation();
  const from = location.state?.pathname || '/';
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;
    login(username);
    setUsername('');
    navigate(from, { replace: true });
  };
  return (
    <div>
      <h1>Login</h1>
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleSubmit} type="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
