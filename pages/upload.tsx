// pages/upload.tsx
import Head from 'next/head';
import '../styles/upload.css'; // Specific upload page styles

export default function Upload() {
  return (
    <>
      <Head>
        <title>StudyAI Dashboard</title>
      </Head>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src="logo.png" alt="StudyAI Logo" />
          <span>StudyAI</span>
        </div>
        <ul className="nav-links">
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Documents</a></li>
          <li><a href="#">Flashcards</a></li>
          <li><a href="#">Quizzes</a></li>
        </ul>
        <div className="profile">
          <i className="fas fa-bell"></i>
          <img src="profile.png" alt="User Profile" />
        </div>
      </nav>

      {/* Upload Section */}
      <div className="container">
        <div className="upload-box">
          <h2>Upload Your Documents</h2>
          <p>Upload PDF, DOCX, or TXT files to get started</p>
          <div className="upload-area">
            <i className="fas fa-file-upload"></i>
            <p><a href="#">Choose a file</a> or drag and drop here</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="features">
          <div className="feature-card">
            <i className="fas fa-lightbulb"></i>
            <h3>AI Summary</h3>
            <p>Get instant AI-powered summaries of your documents</p>
            <button>Generate Summary</button>
          </div>
          <div className="feature-card">
            <i className="fas fa-file-alt"></i>
            <h3>Quiz Generator</h3>
            <p>Create custom quizzes from your documents</p>
            <button>Create Quiz</button>
          </div>
          <div className="feature-card">
            <i className="fas fa-sticky-note"></i>
            <h3>Flashcards</h3>
            <p>Generate study flashcards automatically</p>
            <button>Create Flashcards</button>
          </div>
        </div>

        {/* Recent Documents Section */}
        <div className="recent-documents">
          <h2>Recent Documents</h2>
          <div className="document">
            <i className="fas fa-file-pdf pdf-icon"></i>
            <div>
              <p>Chapter 1 - Introduction.pdf</p>
              <span>Uploaded 2 hours ago</span>
            </div>
            <div className="actions">
              <i className="fas fa-eye"></i>
              <i className="fas fa-download"></i>
              <i className="fas fa-trash"></i>
            </div>
          </div>
          <div className="document">
            <i className="fas fa-file-word word-icon"></i>
            <div>
              <p>Study Notes.docx</p>
              <span>Uploaded yesterday</span>
            </div>
            <div className="actions">
              <i className="fas fa-eye"></i>
              <i className="fas fa-download"></i>
              <i className="fas fa-trash"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 StudyAI. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Support</a>
        </div>
      </footer>
    </>
  );
}
