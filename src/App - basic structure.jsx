function App() {
  return (
    <>
      <header>
        <div className="logo">Business English</div>

        <nav>
          <a href="#about">About</a>
          <a href="#lessons">Lessons</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* Hero section */}
        <section className="hero-section">
          ...
        </section>

        {/* About section */}
        <section id="about" className="about-section">
          <p className="eyebrow">WHO I TEACH</p>

          <h2>English for real-world business communication.</h2>

          <p>
            These lessons are designed for professionals who need to use English
            in meetings, presentations, emails, negotiations, and everyday
            workplace communication.
          </p>
        </section>
      </main>
    </>
  )
}

export default App