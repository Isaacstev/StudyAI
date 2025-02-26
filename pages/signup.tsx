// pages/signup.tsx
import { useState } from 'react';
import Head from 'next/head';
import '../styles/styles.css'; // Global styles import

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., sign up user)
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log({ email, password });
  };

  return (
    <>
      <Head>
        <title>Sign Up - StudyAI</title>
      </Head>

      <div className="container">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn primary">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </>
  );
}
