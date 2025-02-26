// pages/index.tsx
import Head from 'next/head';
import '../styles/styles.css'; // Global styles import

export default function Home() {
  return (
    <>
      <Head>
        <title>StudyAI - AI-Powered Study Assistant</title>
      </Head>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">StudyAI</div>
        <ul className="nav-links">
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">About</a></li>
        </ul>
      <div className="auth-buttons">
        <a href="/login" className="sign-in">Sign In</a>
        <a href="/signup" className="get-started">Get Started</a>
      </div>

      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-text">
          <h1>AI-Powered Study Assistant with Voice Dictation</h1>
          <p>Transform your learning experience with our intelligent study tools. Summarize, quiz, collaborate, and learn more effectively.</p>
          <div className="hero-buttons">
            <a href="#" className="btn primary">Try for Free</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/dashboard.png" alt="Study AI Dashboard" />
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Powerful Features for Smart Learning</h2>
        <div className="feature-grid">
          <div className="feature-box">
            <h3>📄 AI Summarization</h3>
            <p>Instantly condense study materials from PDFs, Word documents, and text files into summaries.</p>
          </div>
          <div className="feature-box">
            <h3>🎤 Voice Dictation</h3>
            <p>Take notes effortlessly using speech-to-text powered by AI.</p>
          </div>
          <div className="feature-box">
            <h3>📝 Quiz Generation</h3>
            <p>Create intelligent assessments automatically from your study materials.</p>
          </div>
        </div>
      </section>

      {/* Gamification Section */}
      <section className="gamification">
        <h2>Make Learning Fun</h2>
        <div className="game-features">
          <div className="game-box">
            <h3>🏆 Leaderboards</h3>
            <p>Compete with peers and track your progress.</p>
          </div>
          <div className="game-box">
            <h3>🏅 Achievement Badges</h3>
            <p>Earn badges for completing milestones.</p>
          </div>
          <div className="game-box">
            <h3>📊 Progress Tracking</h3>
            <p>Monitor your learning journey.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Start Learning Smarter Today</h2>
        <p>Join thousands of students who are already transforming their study experience.</p>
        <a href="#" className="btn primary">Get Started for Free</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">StudyAI</div>
          <ul className="footer-links">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">About</a></li>
          </ul>
          <p>&copy; 2025 StudyAI. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
