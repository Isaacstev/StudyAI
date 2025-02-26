// pages/login.tsx
import { useState } from 'react';
import Head from 'next/head';
import '../styles/styles.css'; // Global styles import

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., authenticate with backend)
    console.log({ email, password });
  };

  return (
    <>
      <Head>
        <title>Login - StudyAI</title>
      </Head>

      <div className="container">
        <h2>Login to Your Account</h2>
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

          <button type="submit" className="btn primary">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </>
  );
}
