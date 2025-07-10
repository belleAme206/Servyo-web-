import React from 'react';
import Login from '../../../components/auth/AuthForm';

interface LoginPageProps {
  onLoginSuccess: () => void;
  onSignupClick: () => void;
  onBackClick: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({
  onLoginSuccess,
  onSignupClick,
  onBackClick,
}) => {
  return (
    <Login
      onLoginSuccess={onLoginSuccess}
      onSignupClick={onSignupClick}
      onBackClick={onBackClick}
    />
  );
};

export default LoginPage;
