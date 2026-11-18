
import { useState } from 'react'
import './App.css'

function App() {
  const [active, setActive] = useState('Dashboard')
  const [search, setSearch] = useState('')

  const jobs = [
    { company: 'Google', role: 'Software Developer', type: 'Full Time', color: 'blue' },
    { company: 'Microsoft', role: 'Frontend Developer', type: 'Internship', color: 'pink' },
    { company: 'Infosys', role: 'Graduate Trainee', type: 'Full Time', color: 'orange' },
    { company: 'Amazon', role: 'Web Developer', type: 'Internship', color: 'green' }
  ]

  const menu = [
    ['◈', 'Dashboard'],
    ['⌕', 'Find Jobs'],
    ['▤', 'Applications'],
    ['◇', 'My Skills'],
    ['✧', 'Interview Prep'],
    ['▥', 'Analytics']
  ]

  const filteredJobs = jobs.filter(job =>
    (job.company + job.role + job.type)
      .toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="app">

      <aside className="sidebar">
        <h2 className="logo">✦ Career<span>Launch</span></h2>
        <p className="side-label">WORKSPACE</p>

        <nav>
          {menu.map(([icon, name]) => (
            <button
              key={name}
              className={active === name ? 'active' : ''}
              onClick={() => setActive(name)}
            >
              <span>{icon}</span>{name}
            </button>
          ))}
        </nav>

        <div className="side-bottom">
          <div className="upgrade">
            <span>✧</span>
            <h3>Dream Bigger!</h3>
            <p>Your next opportunity starts here.</p>
          </div>
          <div className="user">
            <div className="avatar">K</div>
            <div>
              <b>Student</b>
              <small>Career Explorer</small>
            </div>
            <span>⋮</span>
          </div>
        </div>
      </aside>

      <main className="main">

        <header className="topbar">
          <div>
            <p className="muted">MONDAY / YOUR CAREER SPACE</p>
            <h2>Welcome back, <span>Explorer!</span> ✨</h2>
          </div>
          <div className="top-actions">
            <span className="notification">♧</span>
            <div className="avatar">K</div>
          </div>
        </header>

        <section className="hero">
          <div className="hero-content">
            <span className="tag">✦ YOUR FUTURE STARTS HERE</span>
            <h1>Turn your <span>ambition</span><br />into achievement.</h1>
            <p>Discover opportunities, build your skills and take the next step in your career journey.</p>
            <button className="primary-btn"
              onClick={() => setActive('Find Jobs')}>
              Explore Opportunities ↗
            </button>
          </div>
          <div className="hero-art">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="orb">✦</div>
            <div className="float-card">🚀 <span>Dream. Discover. Do.</span></div>
          </div>
        </section>

        <section className="stats">
          <div className="stat-card">
            <span className="stat-icon">▣</span>
            <p>Available Jobs</p>
            <h2>120 <small>+12%</small></h2>
          </div>
          <div className="stat-card">
            <span className="stat-icon">▤</span>
            <p>Applications</p>
            <h2>18</h2>
          </div>
          <div className="stat-card">
            <span className="stat-icon">✧</span>
            <p>Interviews</p>
            <h2>08</h2>
          </div>
          <div className="stat-card">
            <span className="stat-icon">♛</span>
            <p>Offers Received</p>
            <h2>05</h2>
          </div>
        </section>

        <section className="content-grid">

          <div className="jobs-section">
            <div className="section-head">
              <div>
                <p className="muted">FIND YOUR NEXT MOVE</p>
                <h2>Featured Opportunities</h2>
              </div>
              <span className="view">Explore all ↗</span>
            </div>

            <input
              className="search"
              placeholder="⌕  Search company, job or type..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />

            <div className="job-list">
              {filteredJobs.map((job, i) => (
                <div className="job-card" key={job.company}>
                  <div className={'company-logo ' + job.color}>
                    {job.company[0]}
                  </div>
                  <div className="job-info">
                    <h3>{job.role}</h3>
                    <p>{job.company} · {job.type}</p>
                  </div>
                  <button className="apply-btn"
                    onClick={() => alert('Application selected: ' + job.role)}>
                    Apply ↗
                  </button>
                </div>
              ))}
              {filteredJobs.length === 0 &&
                <p className="empty">No matching opportunities found.</p>
              }
            </div>
          </div>

          <div className="progress-section">
            <p className="muted">YOUR JOURNEY</p>
            <h2>Career Progress</h2>
            <div className="progress-circle">
              <div>
                <h2>75%</h2>
                <small>Completed</small>
              </div>
            </div>
            <div className="progress-line">
              <span>Profile Completion</span>
              <b>75%</b>
            </div>
            <div className="bar"><div></div></div>
            <p className="tip">✦ Keep growing! Complete your profile to unlock more opportunities.</p>
          </div>

        </section>

        <footer>✦ CareerLaunch · Build your future, one opportunity at a time.</footer>

      </main>
    </div>
  )
}

export default App
