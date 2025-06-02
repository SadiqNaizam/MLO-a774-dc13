import React, { useState, useCallback } from 'react';
import LoginCard from '../components/layout/LoginCard';

// Define the type for the login form data, matching LoginCard's onLoginSubmit prop
interface LoginFormData {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleLoginSubmit = useCallback(async (data: LoginFormData) => {
    setIsSubmitting(true);
    console.info('Login attempt with:', { username: data.username, password: '***' }); // Avoid logging password directly

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Example: Basic validation for demonstration
    if (data.username === 'admin' && data.password === 'password123') {
      console.info('Login successful (simulated)');
      // In a real app, you would navigate to a dashboard or set auth tokens
      // alert('Login Successful!'); // Avoid using alert in production apps, prefer toasts or inline messages
    } else {
      console.warn('Login failed: Invalid credentials (simulated)');
      // alert('Login Failed: Invalid credentials.');
    }

    setIsSubmitting(false);
  }, []);

  const handleSignUpClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent default anchor link behavior
    console.info('Sign up action triggered.');
    // In a real app, this would typically navigate to a sign-up page
    // or open a sign-up modal dialog.
    // alert('Sign up clicked! Implement navigation or modal here.');
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <LoginCard
        title="Log in"
        initialUsername="" // Explicitly set initial empty username
        initialPassword="" // Explicitly set initial empty password
        onLoginSubmit={handleLoginSubmit}
        onSignUpClick={handleSignUpClick}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

export default LoginPage;
