// pages/documents.tsx
import Head from 'next/head';
import Link from 'next/link'; // Import Link from next/link
import '../styles/document.css'; // Import the relevant CSS

export default function Documents() {
  return (
    <>
      <Head>
        <title>Documents - StudyAI</title>
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

      {/* Documents Section */}
      <div className="container">
        <h2>Your Documents</h2>
        <div className="document-list">
          <div className="document-item">
            <p>Study Material 1.pdf</p>
            <div className="document-actions">
              <Link href="/document/view">View</Link>  {/* Correct Link usage */}
              <Link href="/document/edit">Edit</Link>
              <Link href="#">Delete</Link> {/* Delete can have the same Link component or a different logic */}
            </div>
          </div>
          <div className="document-item">
            <p>Study Material 2.docx</p>
            <div className="document-actions">
              <Link href="/document/view">View</Link>
              <Link href="/document/edit">Edit</Link>
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
