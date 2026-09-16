import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// --- DATA CONFIGURATION ---
const bestWork = [
  { id: 1, title: "Pakistan's Population Crisis", videoId: "3eW6-eLEPHQ", desc: "An analytical video essay." },
  { id: 8, title: "Ravoqi SaaS", videoId: "HIUjyZ8mIGA", desc: "Promotional SaaS video." },
  { id: 3, title: "Creative Direction", videoId: "FkARHm7N_d8", desc: "Motion graphics showcase." },
  { id: 2, title: "Cinematic Visuals", videoId: "yRQ5P_GzsBY", desc: "Recent cinematic edit." }
];

const theVault = [
  { id: 4, title: "History of Lahore", videoId: "NispElXFGwU", desc: "A deep dive into the transformation of Lahore." },
  { id: 5, title: "Sir Ganga Ram", videoId: "_3dtPq1IXwo", desc: "The forgotten legacy of the man who built modern Lahore." },
  { id: 7, title: "History of Balochistan", videoId: "nZ77PizOOFI", desc: "A comprehensive historical breakdown." }
];

const VideoEmbed = ({ videoId, title }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className="video-wrapper editorial-video"
  >
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen>
    </iframe>
  </motion.div>
);

const App = () => {
  const [activeIntroVideo, setActiveIntroVideo] = useState(bestWork[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHoveringReels, setIsHoveringReels] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (isHoveringReels) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHoveringReels]);

  return (
    <>
      <nav>
        <div className="logo">✦ Faiq Subhani</div>
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </div>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
          <a href="#work" onClick={() => setIsMenuOpen(false)}>Work</a>
          <a href="#reels" onClick={() => setIsMenuOpen(false)}>Verticals</a>
          <a href="/Faiq_Subhani_Resume_Draft.png" target="_blank" rel="noopener noreferrer" className="nav-social" onClick={() => setIsMenuOpen(false)}>Resume</a>
          <a href="mailto:faiqsubhani0987@gmail.com?subject=Project Inquiry" className="btn-pill" onClick={() => setIsMenuOpen(false)}>Get in touch</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-text-bg">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-title"
          >
            CREATIVE
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title-outline gold"
          >
            CREATIVE
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-title-outline gold"
          >
            CREATIVE
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
          className="hero-image-container"
        >
          <div className="hero-image-backdrop"></div>
          <img src="/img1.webp" alt="Faiq Subhani" width="732" height="698" fetchPriority="high" decoding="async" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-right-content"
        >
          <div className="hero-editorial-line">Vision &<br />Execution</div>
          <div className="hero-editorial-text">
            Bridging the gap between cinematic visual storytelling and cutting-edge digital leadership.
          </div>
          <div className="hero-editorial-line" style={{ marginTop: '10px', color: 'var(--color-ravoqi-gold)' }}>Based in PK</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "-50%", y: -20 }}
          animate={{ opacity: 1, x: "-50%", y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="scroll-circle"
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          Scroll<br />down
        </motion.div>
      </section>

      {/* INTRO SECTION */}
      <section id="about" className="intro-section">
        <div className="intro-text">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Hello,<br />I'm Faiq !
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            I am a self-taught Video Editor & IT Leader based in Pakistan with extensive experience in digital media, motion graphics, and tech leadership. I am currently the Chief Deputy Officer of IT at CM Punjab MUN and a Video Editor at Jenpharm, crafting high-quality promotional content.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="intro-action-links"
          >
            <a href="https://wa.me/923241475020?text=Hi%20Faiq!%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project." className="btn-link" target="_blank" rel="noreferrer">
              ✦ WhatsApp: 0324 1475 020
            </a>
            <a href="/Faiq_Subhani_Resume_Draft.png" target="_blank" rel="noopener noreferrer" className="btn-link secondary">
              Resume
            </a>
          </motion.div>
        </div>

        <div className="intro-visual">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="intro-visual-bg"
          ></motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="intro-visual-circle"
          ></motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIntroVideo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="intro-video-wrapper"
              style={{ position: 'relative' }}
            >
              <VideoEmbed videoId={activeIntroVideo.videoId} title={activeIntroVideo.title} />
            </motion.div>
          </AnimatePresence>

          {bestWork.filter(v => [1, 2, 3].includes(v.id)).map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + (idx * 0.2), type: "spring" }}
              className={`interactive-circle-btn pos-${idx} ${activeIntroVideo.id === video.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveIntroVideo(video)}
            >
              {video.id === 1 ? 'Masterpiece' : video.id === 2 ? 'Cinematic' : 'Creative'}
            </motion.div>
          ))}
        </div>
      </section>

      {/* SPLIT SECTION */}
      <section id="experience" className="split-section">

        {/* LEFT: CREAM (Experience) */}
        <div className="split-left">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="experience-box"
          >
            <h3>Experience</h3>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="exp-item"
            >
              <div className="exp-year">2026</div>
              <div className="exp-details">
                <h4>Chief Deputy Officer IT</h4>
                <p>CM Punjab MUN, Pakistan<br />Engineered website & integrated AI Chatbot. <a href="https://thecmpunjabmun.com/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>View Website</a></p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="exp-item"
            >
              <div className="exp-year">2026</div>
              <div className="exp-details">
                <h4>Video Editor</h4>
                <p>Jenpharm<br />Crafting high-quality visual content & promotional videos.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="exp-item"
            >
              <div className="exp-year">2025</div>
              <div className="exp-details">
                <h4>1-on-1 Video Editor</h4>
                <p>YouTuber Client<br />Mastered audience retention and rapid turnarounds for 1 year.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="exp-item"
            >
              <div className="exp-year">2022</div>
              <div className="exp-details">
                <h4>Content Writer & Affiliate</h4>
                <p>Freelance / Amazon<br />Wrote SEO-optimized articles and managed affiliate streams.</p>
              </div>
            </motion.div>

            <div className="tags">
              <span className="tag-dark">#CinematicEditing</span>
              <span className="tag-dark">#Storytelling</span>
              <span className="tag-dark">#WebDev</span>
              <span className="tag-dark">#Leadership</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="editorial-title"
            id="work"
            style={{ marginTop: '80px' }}
          >
            Latest Masterpieces
          </motion.h2>
          {bestWork.slice(1).map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.2 }}
            >
              <VideoEmbed videoId={video.videoId} title={video.title} />
              <h4 className="editorial-video-title" style={{ color: 'var(--color-text-dark)' }}>{video.title}</h4>
              <p className="editorial-video-desc" style={{ color: '#444' }}>{video.desc}</p>
            </motion.div>
          ))}

        </div>

        {/* RIGHT: GREEN (Skills & Vault) */}
        <div className="split-right">

          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="editorial-title"
            style={{ color: 'var(--color-cream)' }}
          >
            Technical skills
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="skills-pill-container"
            style={{ marginBottom: '60px' }}
          >
            {['Video Editing', 'Motion Graphics', 'Web Development (React)', 'AI Integration', 'Cinematography', 'Project Management'].map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="skill-pill"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="editorial-title"
            style={{ color: 'var(--color-ravoqi-gold)' }}
          >
            The Vault
          </motion.h2>
          {theVault.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.2 }}
            >
              <VideoEmbed videoId={video.videoId} title={video.title} />
              <h4 className="editorial-video-title">{video.title}</h4>
              <p className="editorial-video-desc">{video.desc}</p>
            </motion.div>
          ))}

        </div>

      </section>

      {/* REELS SECTION */}
      <section id="reels" className="reels-section">
        <div className="reels-header">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="editorial-title"
            style={{ color: 'var(--color-cream)', marginBottom: '10px' }}
          >
            Vertical Edits
          </motion.h2>
          <p style={{ color: 'rgba(245,242,235,0.8)', fontFamily: 'Inter' }}>Short-form content & Reels crafted for high retention.</p>
        </div>

        <div
          className="reels-container"
          ref={scrollRef}
          onMouseEnter={() => setIsHoveringReels(true)}
          onMouseLeave={() => setIsHoveringReels(false)}
        >
          {/* Actual Previous Vertical Reels */}
          <div className="reel-item">
            <iframe
              src="https://www.youtube.com/embed/p96XGUpdLOM"
              title="Vertical Video 1"
              loading="lazy"
              allowFullScreen>
            </iframe>
          </div>
          <div className="reel-item">
            <iframe
              src="https://www.youtube.com/embed/11ha9cnOF8s"
              title="Vertical Video 2"
              loading="lazy"
              allowFullScreen>
            </iframe>
          </div>
          <div className="reel-item">
            <iframe
              src="https://www.youtube.com/embed/HhAGU9yfQa4"
              title="Vertical Video 3"
              loading="lazy"
              allowFullScreen>
            </iframe>
          </div>
          <div className="reel-item">
            <iframe
              src="https://www.youtube.com/embed/9JXJplHHtBY"
              title="Vertical Video 4"
              loading="lazy"
              allowFullScreen>
            </iframe>
          </div>
          <div className="reel-item">
            <iframe
              src="https://www.youtube.com/embed/hRwTgTQYx4E"
              title="Vertical Video 5"
              loading="lazy"
              allowFullScreen>
            </iframe>
          </div>
          <div className="reel-item">
            <iframe
              src="https://www.youtube.com/embed/Hz2GgyhBNfw"
              title="Vertical Video 6"
              loading="lazy"
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#0D3B2E', color: '#F5F2EB', textAlign: 'center', padding: '30px 5%', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(245, 242, 235, 0.1)' }}>
        <div style={{ fontWeight: 600 }}>© 2026 Faiq Subhani. Made with code & creativity.</div>
        <div style={{ opacity: 0.8, fontSize: '0.9rem' }}>Filmmaker • Motion Designer • IT Leader</div>
      </footer>
    </>
  );
};

export default App;
