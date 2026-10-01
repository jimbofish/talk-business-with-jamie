import { Routes, Route, Link } from 'react-router'
import Home from './Home.jsx'
import Lessons from './Lessons.jsx'
import './App.css'

function App() {
  return (
    <>
      <header>
        <div className="logo">Talk Business with Jamie</div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/lessons">Lessons</Link>
          <a href="mailto:hello@example.com">Book a Lesson</a>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
      </Routes>
    </>
  )
}

export default App