// pages/quizzes.tsx
import Head from 'next/head';
import Link from 'next/link'; // Import Link from next/link
import '../styles/quizzes.css'; // Import the relevant CSS

export default function Quizzes() {
  return (
    <>
      <Head>
        <title>Quizzes - StudyAI</title>
      </Head>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="/logo.png" alt="StudyAI Logo" width={90} height={40} />
          <span>StudyAI</span>
        </div>
        <ul className="nav-links">
          <li><Link href="/dashboard">Dashboard</Link></li>  {/* Correct Link usage */}
          <li><Link href="/documents">Documents</Link></li>
          <li><Link href="/flashcards">Flashcards</Link></li>
          <li><Link href="/quizzes">Quizzes</Link></li>
        </ul>
        <div className="profile">
          <i className="fas fa-bell"></i>
          <img src="/profile.png" alt="User Profile" />
        </div>
      </nav>

      {/* Quizzes Section */}
      <div className="container">
        <h2>Your Quizzes</h2>
        <div className="quiz-list">
          <div className="quiz-item">
            <p>Quiz 1</p>
            <div className="quiz-actions">
              <Link href="/quizzes/view">Start Quiz</Link>  {/* Correct Link usage */}
              <Link href="/quizzes/edit">Edit</Link>
              <Link href="#">Delete</Link>  {/* Correct Link usage */}
            </div>
          </div>
          <div className="quiz-item">
            <p>Quiz 2</p>
            <div className="quiz-actions">
              <Link href="/quizzes/view">Start Quiz</Link>
              <Link href="/quizzes/edit">Edit</Link>
              <Link href="#">Delete</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 StudyAI. All rights reserved.</p>
      </footer>
    </>
  );
}
