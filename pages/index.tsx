import Head from 'next/head';
import Link from 'next/link';  // Import Link from next/link
import Image from 'next/image'; // Import Image from next/image
import '../styles/styles.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>StudyAI - AI-Powered Study Assistant</title>
      </Head>

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <Image src="/logo.png" alt="StudyAI Logo" width={90} height={40} />  {/* Using next/image */}
          <span>StudyAI</span>
        </div>
        <ul className="nav-links">
          <li><Link href="/dashboard">Dashboard</Link></li> {/* No <a> inside <Link> */}
          <li><Link href="/documents">Documents</Link></li>
          <li><Link href="/flashcards">FlashCards</Link></li>
          <li><Link href="quizzes">Quizzes</Link></li>
        </ul>
        <div className="auth-buttons">
          <Link href="/login" className="sign-in">Sign In</Link>  {/* No <a> inside <Link> */}
          <Link href="/signup" className="get-started">Get Started</Link>  {/* No <a> inside <Link> */}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-text">
          <h1>AI-Powered Study Assistant with Voice Dictation</h1>
          <p>Transform your learning experience with our intelligent study tools.</p>
          <div className="hero-buttons">
            <Link href="#" className="btn primary">Try for Free</Link>  {/* No <a> inside <Link> */}
          </div>
        </div>
        <div className="hero-image">
          <Image src="/dashboard.png" alt="Study AI Dashboard" width={600} height={400} /> {/* Using next/image */}
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
        <Link href="#" className="btn primary">Get Started for Free</Link>  {/* No <a> inside <Link> */}
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
