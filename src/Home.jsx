import { Link } from 'react-router'
import heroPhoto from './assets/hero-pic.png'
import profilePhoto from './assets/my-profile.png'
import './App.css'
import { BadgeCheck, CalendarDays, Laptop } from 'lucide-react'

function Home() {
  return (
    <>


      <main>
        <section className="hero-section">
<div className="hero-copy">          
  <p className="eyebrow">BUSINESS ENGLISH FOR JAPANESE PROFESSIONALS</p>

  <h1>Speak English with confidence at work.</h1>

  <p className="hero-text">
    Practical Online English lessons for Japanese professionals who want to
    communicate more clearly and confidently in the workplace.
  </p>

 <a className="book-button" href="/lessons#booking">Book a lesson</a>
  </div>
  <img src={heroPhoto} className="hero-photo" alt="Jamie in an office" />
</section>
<section className="intro-section">
<div className="intro-content">
<div className="intro-photo">
<img src={profilePhoto} className="profile-photo" alt="Jamie portrait" />
</div>
<div className="intro-text">

<p className="eyebrow">HI, I'M JAMIE</p>
<h2>Business English built around you.</h2>
<img src={profilePhoto} className="profile-photo-mobile" alt="Jamie portrait" />

<div className="profile-point">
<CalendarDays className="profile-point-icon" />
<p>I've spent more than 15 years teaching English in Japan, including extensive experience working with Japanese business professionals.</p>
</div>

<div className="profile-point">
<BadgeCheck className="profile-point-icon" />
<p>I'm a fully qualified teacher holding a University of Cambridge CELTA certification.</p>
</div>

<div className="profile-point">
<Laptop className="profile-point-icon" />
<p>Lessons are available online, so you can study wherever is most convenient for you.</p>
</div>
</div>
</div>
</section>

<section className="experience-section">
  <div className="experience-content">
    <p className="eyebrow">EXPERIENCE</p>

    <h2>15+ years of corporate English training.</h2>

    <div className="experience-grid">
      <div className="experience-item">
        <span className="experience-number">15+</span>
        <h3>Years teaching in Japan</h3>
        <p>
          Experience teaching English to professionals in Japan
          since 2011.
        </p>
      </div>

      <div className="experience-item">
        <span className="experience-number">Business</span>
        <h3>Corporate English training</h3>
        <p>
          Extensive experience helping Japanese professionals at major global companies communicate more effectively in English.
        </p>
      </div>

      <div className="experience-item">
        <span className="experience-number">1-to-1</span>
        <h3>Personalised lessons</h3>
        <p>
          Lessons are adapted to your role, English level, goals, and the
          situations you actually need to handle at work.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="video-section">
  <div className="video-content">
    <div className="video-text">
      <p className="eyebrow">A QUICK HELLO</p>

      <h2>Meet your teacher.</h2>
    </div>

    <div className="video-placeholder">
      <span>Greeting video coming soon</span>
    </div>
  </div>
</section>

<section className="lesson-preview-section">
  <div className="lesson-preview-content">
    <p className="eyebrow">EXPLORE THE LESSONS</p>

    <h2>Business skills training in English.</h2>

    <Link to="/lessons" className="lesson-link">
      View Lessons →
    </Link>
  </div>
</section>


<section id="contact" className="contact-section">
  <div className="contact-content">
    <p className="eyebrow">READY TO IMPROVE YOUR ENGLISH?</p>

    <h2>Let's work on the English you need.</h2>

    <p>
      Tell me about your goals.
      Let's discuss how the lessons can help you.
    </p>

    <a className="book-button" href="/lessons#booking">Book a lesson</a>
  </div>
</section>
      </main>
    </>
  )
}

export default Home