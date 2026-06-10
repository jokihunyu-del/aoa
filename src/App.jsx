import { useState } from "react";

const HERO_VISION =
  "We make high-speed fiber simple — symmetric uploads and downloads, 99.9% uptime, and true local support in Kahawa West and across Nairobi.";

const FEATURES = [
  {
    title: "Symmetric Fiber",
    desc: "Upload and download at the same speed. Built for developers who push code, pull datasets, and run CI at scale."
  },
  {
    title: "AI-Ready Uplink",
    desc: "Low latency and stable throughput for model training, inference APIs, and real-time collaboration."
  },
  {
    title: "Simple Pricing",
    desc: "Pay daily, weekly, or monthly. No hidden fees, no installation delays, no fine print."
  },
  {
    title: "24/7 Local Support",
    desc: "Real people. Real help. Our team sits between Nairobi and Kahawa West."
  }
];

const PLANS = [
  { label: "Starter", speed: "5 Mbps", price: "KES 20 / day" },
  { label: "Builder", speed: "10 Mbps", price: "KES 50 / day" },
  { label: "Pro", speed: "25 Mbps", price: "KES 100 / day" },
  { label: "Enterprise", speed: "50 Mbps", price: "KES 200 / day" }
];

function App() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
        <Plans />
        <Cta email={email} setEmail={setEmail} />
        <Footer />
      </main>
    </div>
  );
}

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.headerInner}>
        <div style={styles.brand}>
          <span style={styles.brandDot} />
          <span>AOA</span>
        </div>
        <nav style={styles.nav}>
          <a href="#packages">Packages</a>
          <a href="#coverage">Coverage</a>
          <a href="#support">Support</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        <h1 style={styles.h1}>
          Always On.
          <br />
          <span style={{ color: "#2dd4bf" }}>Fiber for AI &amp; Devs.</span>
        </h1>
        <p style={styles.lead}>{HERO_VISION}</p>
        <div style={styles.actions}>
          <button style={styles.primaryBtn}>Get Connected</button>
          <button style={styles.secondaryBtn}>View Plans</button>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" style={styles.section}>
      <div style={styles.container}>
        <h2 style={{ ...styles.h2, fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
          Why devs choose AOA
        </h2>
        <div style={styles.grid}>
          {FEATURES.map((f) => (
            <article key={f.title} style={styles.card}>
              <h3 style={styles.cardTitle}>{f.title}</h3>
              <p style={styles.cardBody}>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section id="packages" style={{ ...styles.section, background: "#0a1a16" }}>
      <div style={styles.container}>
        <h2 style={{ ...styles.h2, fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
          Packages
        </h2>
        <p style={{ color: "#8aada3", marginBottom: 32 }}>
          All plans include symmetric speeds. Weekly and monthly plans include a
          14–27% discount.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20
          }}
        >
          {PLANS.map((p) => (
            <article
              key={p.label}
              style={styles.card}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#122b24")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#0d1f1a")
              }
            >
              <h3 style={styles.cardTitle}>{p.label}</h3>
              <p style={styles.cardBody}>{p.speed}</p>
              <p style={{ ...styles.cardBody, color: "#2dd4bf", marginTop: 8 }}>
                {p.price}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta({ email, setEmail }) {
  return (
    <section
      id="support"
      style={{ ...styles.section, background: "linear-gradient(180deg, #0a1a16, #050d0b)" }}
    >
      <div
        style={{
          ...styles.container,
          display: "grid",
          gap: 24,
          maxWidth: "640px",
          textAlign: "center"
        }}
      >
        <h2 style={styles.h2}>Optimize your setup</h2>
        <p style={{ color: "#8aada3" }}>
          Contact our team for help choosing a plan, scheduling installation, or
          troubleshooting.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            aria-label="Email"
            style={styles.input}
          />
          <button type="submit" style={styles.primaryBtn}>
            Get in touch
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ padding: "32px 24px", textAlign: "center", color: "#4a7a6e" }}>
      <small>© 2026 AOA Fiber. Always On.</small>
    </footer>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    borderBottom: "1px solid #1a3d33",
    background: "rgba(5, 13, 11, 0.8)",
    backdropFilter: "blur(12px)"
  },
  headerInner: {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    fontWeight: 700,
    letterSpacing: "0.1em"
  },
  brandDot: {
    display: "inline-block",
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: "#5eead4",
    boxShadow: "0 0 12px #5eead4"
  },
  nav: {
    display: "flex",
    gap: 24
  },
  hero: {
    padding: "clamp(60px, 8vw, 120px) 24px"
  },
  container: {
    maxWidth: "1120px",
    margin: "0 auto"
  },
  h1: {
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: "-0.02em"
  },
  lead: {
    marginTop: 24,
    color: "#8aada3",
    fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
    maxWidth: "680px"
  },
  actions: {
    marginTop: 32,
    display: "flex",
    gap: 16,
    flexWrap: "wrap"
  },
  primaryBtn: {
    padding: "14px 28px",
    borderRadius: 999,
    background: "#0d9488",
    color: "#fff",
    fontWeight: 600,
    boxShadow: "0 8px 20px rgba(13, 148, 136, 0.25)"
  },
  secondaryBtn: {
    padding: "14px 28px",
    borderRadius: 999,
    border: "1px solid #1a3d33",
    color: "#e8f5f2"
  },
  section: {
    padding: "clamp(56px, 7vw, 100px) 24px"
  },
  h2: {
    fontWeight: 700,
    color: "#e8f5f2",
    marginBottom: 24
  },
  grid: {
    display: "grid",
    gap: 20,
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))"
  },
  card: {
    padding: 24,
    borderRadius: 16,
    background: "#0d1f1a",
    border: "1px solid #1a3d33",
    transition: "background 0.25s ease"
  },
  cardTitle: {
    fontSize: "1.125rem",
    fontWeight: 700,
    color: "#e8f5f2",
    marginBottom: 8
  },
  cardBody: {
    color: "#8aada3",
    fontSize: "0.95rem"
  },
  input: {
    padding: "14px 20px",
    borderRadius: 999,
    border: "1px solid #1a3d33",
    background: "#0a1a16",
    color: "#e8f5f2",
    fontFamily: "Outfit, sans-serif",
    minWidth: 220
  }
};

export default App;
