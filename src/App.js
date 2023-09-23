import React from 'react';
import './App.css';

function Header() {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>This is where you can write a brief description of yourself.</p>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>List your projects and their descriptions here.</p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Provide contact information or a contact form here.</p>
    </section>
  );
}

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Your Logo</h2>
            <p>A brief tagline or description</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Information</h3>
            <p>Email: your.email@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Main St, City, Country</p>
          </div>
        </div>
        <hr />
        <div className="footer-social">
          <h3>Connect with Me</h3>
          <ul>
            <li><a href="linkdlin">LinkedIn</a></li>
            <li><a href="github">GitHub</a></li>
            <li><a href="tweet">Twitter</a></li>
            <li><a href="insta">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
