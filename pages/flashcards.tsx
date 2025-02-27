// pages/flashcards.tsx
import Head from 'next/head';
import Link from 'next/link'; // Import Link from next/link
import '../styles/styles.css'; // Import the relevant CSS

export default function Flashcards() {
  return (
    <>
      <Head>
        <title>Flashcards - StudyAI</title>
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

      {/* Flashcards Section */}
      <div className="container">
        <h2>Your Flashcards</h2>
        <div className="flashcard-list">
          <div className="flashcard-item">
            <p>Flashcard Set 1</p>
            <div className="flashcard-actions">
              <Link href="/flashcards/view">View</Link>  {/* Correct Link usage */}
              <Link href="/flashcards/edit">Edit</Link>
              <Link href="#">Delete</Link>  {/* Correct Link usage */}
            </div>
          </div>
          <div className="flashcard-item">
            <p>Flashcard Set 2</p>
            <div className="flashcard-actions">
              <Link href="/flashcards/view">View</Link>
              <Link href="/flashcards/edit">Edit</Link>
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
