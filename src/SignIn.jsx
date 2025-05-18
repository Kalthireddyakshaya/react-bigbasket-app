import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginUser } from './store'; // adjust path as needed
import { useNavigate } from 'react-router-dom';
import './SignIn.css'; // make sure you create this CSS file or rename accordingly

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(loginUser(data));
    navigate('/veg'); // redirect after login
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Username"
          {...register('username', { required: true })}
        />
        <input
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
        />
        <button type="submit">Sign In</button>
      </form>
      <p>
        Don't have an account?{' '}
        <a href="/SignUp">Sign Up</a>
      </p>
    </div>
  );
};

export default SignIn;
