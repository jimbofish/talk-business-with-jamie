import { useEffect } from 'react'
import { MessageSquare,
  Presentation,
  Mail,
  Handshake,
  MessagesSquare,
  BriefcaseBusiness,
Target,
TrendingUp, } from 'lucide-react'

function Lessons() {
useEffect(() => {
  if (window.location.hash === '#booking') {
    setTimeout(() => {
      document.getElementById('booking')?.scrollIntoView({
        behavior: 'smooth',
      })
    }, 0)
  } else {
    window.scrollTo(0, 0)
  }
}, [])

  return (
    <main>


      <section id="lessons" className="lessons-section">
        <p className="eyebrow">WHAT I TEACH</p>

        <h2>Practical English for the workplace.</h2>

        <div className="lesson-grid">
<div className="lesson-card">
  <MessageSquare className="lesson-icon" />

  <h3>Meetings & Discussions</h3>
  <p>
    Facilitate and participate effectively in meetings and discussions.
  </p>
</div>

          <div className="lesson-card">
            <Presentation className="lesson-icon" />
            <h3>Presentations</h3>
            <p>
              Present to international audiences with confidence. 
            </p>
          </div>

          <div className="lesson-card">
            <Mail className="lesson-icon" />
            <h3>Business Emails</h3>
            <p>
              Write clear, natural emails for everyday communication with
              colleagues, customers, and business partners.
            </p>
          </div>

          <div className="lesson-card">
            <Handshake className="lesson-icon" />
            <h3>Negotiations</h3>
            <p>
              Develop the language and communication skills you need to make proposals, and reach agreements.
            </p>
          </div>

          <div className="lesson-card">
            <MessagesSquare className="lesson-icon" />
            <h3>Workplace Communication</h3>
            <p>
              Improve your English for real situations such as explaining
              problems, reporting progress, and asking for clarification.
            </p>
          </div>

          <div className="lesson-card">
            <BriefcaseBusiness className="lesson-icon" />
            <h3>English for Your Job</h3>
            <p>
              Focus on the English you actually need, based on your role,
              industry, and professional goals.
            </p>
          </div>
        </div>
      </section>

      <section className="process-section">
        <p className="eyebrow">HOW IT WORKS</p>

        <h2>A simple approach to improving your English.</h2>

        <div className="process-grid">
          <div className="process-card">
            <div className="process-top">

<span className="process-number">01</span>
<Target className="process-icon" />
</div>
            <h3>Tell me your goals</h3>
            <p>
              Discuss your current English level, your job, and the skills
              you want to improve in an online consultation.
            </p>
          </div>

<div className="process-card">
          <div className="process-top">
            <span className="process-number">02</span>
            <MessagesSquare className="process-icon" />
            </div>
            <h3>Practise real situations</h3>
            <p>
              Lessons focus on situations you actually encounter at work.
            </p>
          </div>

<div className="process-card">
          <div className="process-top">
            <span className="process-number">03</span>
            <TrendingUp className="process-icon" />
            </div>
            <h3>Build confidence</h3>
            <p>
              You practise, receive feedback, and develop the confidence to
              communicate more naturally. We regularly review your progress
              and adjust lessons to match your goals.
            </p>
          </div>
        </div>
      </section>

<section className="pricing-section">

<p className="eyebrow">PRICING & BOOKING</p>

<h2>Flexible online lessons. </h2>
<h2>  Better value than the Eikaiwas!</h2>

<div className="pricing-grid">

<div className="pricing-card">

<h3>Pricing</h3>

<p className="price">50-minute lesson</p>

<p className="price-amount">¥3,490</p>

<p>

Online one-to-one lessons tailored to your goals and workplace needs.

</p>

</div>

<div className="pricing-card" id="booking">

  <h3>Book a lesson</h3>

  <form
    action="https://formspree.io/f/myezvajd"
    method="POST"
  >
    <label>
      Name
      <input
        type="text"
        name="name"
        required
      />
    </label>

    <label>
      Email
      <input
        type="email"
        name="email"
        required
      />
    </label>

    <label>
      Tell me about your goals
      <textarea
        name="message"
        rows="5"
        required
      ></textarea>
    </label>

<p className="form-note"> I'll get back to you within 1–2 business days. </p>
    <button type="submit" className="button">
      Book a lesson
    </button>
  </form>

</div>



</div>

</section>


    </main>
  )
}

export default Lessons