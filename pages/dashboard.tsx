// pages/dashboard.tsx
import Head from 'next/head';
import Link from 'next/link';  // Import Link from next/link
import Image from 'next/image'; // Import Image from next/image
import '../styles/dashboard.css'; // Specific dashboard page styles

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>StudyAI Dashboard</title>
      </Head>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <Image src="/logo.png" alt="StudyAI Logo" width={90} height={40} /> {/* Using next/image */}
          <span>StudyAI</span>
        </div>
        <ul className="nav-links">
          <li><Link href="/dashboard">Dashboard</Link></li> {/* Remove <a> */}
          <li><Link href="/documents">Documents</Link></li>
          <li><Link href="/flascards">Flashcards</Link></li>
          <li><Link href="/quizzes">Quizzes</Link></li>
        </ul>
        <div className="profile">
          <i className="fas fa-bell"></i>
          <img src="/profile.png" alt="User Profile" />
        </div>
      </nav>

      {/* Dashboard Section */}
      <div className="container">
        {/* AI Capabilities Section */}
        <div className="ai-capabilities">
          <h2>Artificial Intelligence Capabilities</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <i className="fas fa-lightbulb"></i>
              <h3>AI Summarization</h3>
              <p>Instantly condense study materials from PDFs, DOCX, and text files.</p>
              <button>Generate Summary</button>
            </div>

            <div className="feature-card">
              <i className="fas fa-robot"></i>
              <h3>Quiz Generator</h3>
              <p>Automatically create quizzes from your documents.</p>
              <button>Create Quiz</button>
            </div>

            <div className="feature-card">
              <i className="fas fa-microphone"></i>
              <h3>Speech-to-Text</h3>
              <p>Take notes using voice dictation powered by AI.</p>
              <button>Start Dictation</button>
            </div>

            <div className="feature-card">
              <i className="fas fa-language"></i>
              <h3>Language Translation</h3>
              <p>Translate your documents into multiple languages.</p>
              <button>Translate</button>
            </div>
          </div>
        </div>

        {/* Document Upload Section */}
        <div className="document-upload">
          <h2>Upload Your Documents</h2>
          <p>Upload PDF, DOCX, or TXT files to get started</p>
          <div className="upload-area">
            <i className="fas fa-cloud-upload-alt"></i>
            <p><a href="#">Choose a file</a> or drag and drop here</p>
          </div>
        </div>

        {/* Gamification Section */}
        <div className="gamification">
          <h2>Gamification</h2>
          <div className="game-features">
            <div className="game-box">
              <h3>🏆 Leaderboards</h3>
              <p>Your Rank: #3</p>
              <p>Top Scorer: Jane Doe</p>
            </div>

            <div className="game-box">
              <h3>🏅 Achievements</h3>
              <p>Completed 5 quizzes</p>
              <p>Earned 3 badges</p>
            </div>

            <div className="game-box">
              <h3>📊 Progress Tracking</h3>
              <p>Completed 80% of your learning path</p>
              <p>Time spent: 15 hours</p>
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
