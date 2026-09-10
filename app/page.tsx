import { ArrowDownToLine, ArrowUpRight, Mail } from 'lucide-react';

const resume = '/Snehal-Sinha-Resume.pdf';
export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="topbar">
      <div className="topbar-inner">
        <a className="wordmark" href="#main">Snehal Sinha<span> / Quantitative Finance</span></a>
        <div className="resume-actions">
          <a className="linkedin-top" href="https://www.linkedin.com/in/ssinhaquant/" target="_blank" rel="noopener noreferrer" aria-label="Open Snehal Sinha’s LinkedIn profile in a new tab"><span className="linkedin-mark" aria-hidden="true">in</span> LinkedIn <ArrowUpRight size={16} aria-hidden="true"/></a>
          <a className="download" href={resume} download="Snehal-Sinha-Resume.pdf" target="_blank" rel="noopener noreferrer"><ArrowDownToLine size={17} aria-hidden="true"/> Download résumé <span className="pdf-label">PDF</span></a>
          <a className="view-pdf" href={resume} target="_blank" rel="noopener noreferrer" aria-label="Open résumé PDF in a new tab">Open PDF <ArrowUpRight size={15} aria-hidden="true"/></a>
        </div>
      </div>
    </header>
    <main id="main" className="wrap">
      <section className="hero" aria-labelledby="intro-heading">
        <div className="intro">
          <p className="eyebrow"><span className="status-dot"/> Quantitative research · Portfolio risk</p>
          <h1 id="intro-heading">Snehal<br/><em>Sinha.</em></h1>
          <p className="credential">Georgia Tech MS QCF · Atlanta, GA</p>
          <p className="intro-copy">As a believer of thinking from first principles, I am most enthusiastic about the dynamics in the market and how various systems come together to influence price movement.</p>
          <p className="intro-copy">Experience with development and validation of models using sparse and biased return data to determine daily factor risk decomposition for Private market positions for <strong><em>Portfolio Construction and Asset Allocation</em></strong> for over $300B USD AUM.</p>
          <div className="contact-links"><a href="mailto:ssinha373@gatech.edu"><Mail size={17} aria-hidden="true"/> Email me</a><a href="https://www.linkedin.com/in/ssinhaquant/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} aria-hidden="true"/></a></div>
        </div>
        <figure className="portrait"><div className="portrait-frame"><img src="/snehal-sinha.jpg" alt="Snehal Sinha" width={3327} height={3327} fetchPriority="high"/></div><figcaption>S. SINHA <span>ATLANTA, GA / 2026</span></figcaption></figure>
      </section>
      <div className="highlights"><div><strong>$300B+</strong><span>AUM covered by risk models</span></div><div><strong>60%+</strong><span>Faster credit simulations</span></div><div><strong>4.00 / 4.00</strong><span>Georgia Tech GPA</span></div></div>
      <nav className="section-nav" aria-label="Résumé sections">
        <a href="#experience">Experience</a><a href="#research">Research</a><a href="#education">Education</a><a href="#skills">Skills</a><a href="#beyond">Beyond finance</a>
      </nav>

      <section className="resume-section" id="experience" aria-labelledby="experience-heading">
        <div className="section-heading"><span>01 /</span><h2 id="experience-heading">Experience</h2></div>
        <div className="section-body">
          <div className="organization"><h3>BlackRock</h3><span>Gurugram, India</span></div>
          <p className="department">Portfolio Risk · Aladdin Financial Engineering</p>
          <article className="role">
            <div className="entry-heading"><h4>Associate</h4><span>Jan 2025 – Dec 2025</span></div>
            <ul>
              <li>Facilitated validation and deployment of factor-based portfolio risk models covering <strong>$300B+ AUM</strong>, coordinating across research, modeling, development, and client teams to support communication and adoption.</li>
              <li>Implemented and productionized a <strong>Merton structural-credit model</strong> to decompose private credit risk into explainable factors, using Monte Carlo simulation to estimate default probabilities. Designed an alternative volatility-calibration algorithm that <strong>cut simulation runtimes by 60%+</strong> and reduced production incidents.</li>
              <li>Developed and validated a <strong>stochastic cash-flow forecasting model</strong> for commitment-based investment vehicles, including backtesting, test-case design, stress testing, and benchmarking against industry models.</li>
              <li><strong>Reduced computational load by 40%</strong> using variance reduction techniques, including importance sampling, for Monte Carlo VaR and expected shortfall models with different copulas and underlying distributions.</li>
              <li>Served as a subject-matter expert for multi-asset factor models, resolving client escalations on VaR, stress testing, and risk decomposition; recognized in an internal newsletter for quick turnaround.</li>
              <li>Supported deployment of <strong>BlackRock Capital Market Assumptions</strong>, providing distributions of private-investment risk across geographies and sectors for institutional investors.</li>
            </ul>
          </article>
          <article className="role">
            <div className="entry-heading"><h4>Analyst</h4><span>Aug 2022 – Dec 2024</span></div>
            <ul>
              <li>Led validation of a portfolio-weight data store during a major migration to microservices, performing regression testing for <strong>millions of investment positions</strong> across asset classes.</li>
              <li>Built an automated <strong>Python framework</strong> for systematic integration, benchmarking, and backtesting of equity risk models.</li>
              <li><strong>Reduced runtimes by 90%</strong> for a large-scale, API-based position reconciliation tool, subsequently adopted by multiple teams.</li>
              <li>Designed a flexible data-quality validation tool for alternative investments, configurable for future models.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="resume-section" id="research" aria-labelledby="research-heading">
        <div className="section-heading"><span>02 /</span><h2 id="research-heading">Projects &<br/>research</h2></div>
        <div className="section-body">
          <article className="research-entry">
            <p className="eyebrow">01 · Options & volatility</p>
            <h3>Systematic intraday long-volatility trading</h3>
            <p>Built an intraday, delta-neutral long-volatility strategy on Nifty 50 options to trade the realized–implied variance spread.</p>
            <ul>
              <li>Used volatility-surface signals—25Δ butterfly, put–call skew, and skew slope—alongside the combined gamma–theta P&amp;L identity to time entries.</li>
              <li>Conditioned strike selection, inverse-IV position sizing, and a staged exit ladder on the implied-volatility regime.</li>
              <li>Applied small-sample inference, including a Lo-adjusted Sharpe ratio and a <strong>10,000-resample bootstrap</strong>, to assess the strength of the evidence.</li>
            </ul>
            <div className="project-metrics"><div><strong>+10.1%</strong><span>Backtested return</span></div><div><strong>1.86</strong><span>Sharpe ratio</span></div><div><strong>2.27</strong><span>Profit factor</span></div></div>
            <p className="research-note">Two-month expiry-cycle backtest · 6.1% maximum drawdown · 63% win rate. Small-sample results are hypothesis-generating.</p>
          </article>
          <article className="research-entry">
            <p className="eyebrow">02 · Empirical asset pricing</p>
            <h3>Factor decomposition of momentum crowding</h3>
            <p>Extended the “Comomentum” crowding signal using high-frequency abnormal-return correlations across momentum-sorted deciles.</p>
            <ul>
              <li>Used <strong>Fama–MacBeth and panel regressions</strong> to forecast time-varying momentum returns and predict strategy crashes.</li>
              <li>Decomposed crowding against residual/idiosyncratic, industry, and 52-week-high momentum factors through cross-sectional regressions, isolating overreaction- and underreaction-driven return components.</li>
            </ul>
          </article>
          <article className="research-entry">
            <p className="eyebrow">03 · Machine learning & NLP</p>
            <h3>Machine-learning equity sector rotation</h3>
            <ul>
              <li>Fine-tuned a <strong>RoBERTa transformer</strong> using PyTorch and Hugging Face on SEC 10-K filings for 10-class sector classification, achieving <strong>F1 &gt; 0.60</strong>.</li>
              <li>Clustered PCA-reduced embeddings to map firm similarity and sector-return structure.</li>
              <li>Built an FOMC “hawkishness” signal using LLM inference on meeting minutes; validated it against Fed Funds moves with an <strong>83% directional hit rate</strong>.</li>
              <li>Ran Fama–French sector rate-sensitivity regressions to drive a long–short sector-rotation strategy.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="resume-section" id="education" aria-labelledby="education-heading">
        <div className="section-heading"><span>03 /</span><h2 id="education-heading">Education</h2></div>
        <div className="section-body">
          <article className="education-entry">
            <div className="entry-heading"><h3>Georgia Institute of Technology</h3><span>Atlanta, GA</span></div>
            <p className="department">Scheller College of Business</p>
            <h4>MS, Quantitative and Computational Finance</h4>
            <p className="date">Jan 2026 – May 2027 · Expected graduation May 2027</p>
            <p><strong>GPA: 4.00 / 4.00</strong> · Awarded a graduate assistantship for AI in Finance.</p>
            <p className="coursework"><span>Selected coursework</span>Stochastic Processes for Asset Pricing; Computational Data Analysis; Computational Statistics and Optimization; Numerical Methods in Finance; Fixed Income Securities; Derivative Securities; AI in Finance.</p>
          </article>
          <article className="education-entry">
            <div className="entry-heading"><h3>Indian Institute of Technology Delhi</h3><span>New Delhi, India</span></div>
            <h4>BTech, Civil Engineering</h4>
            <p className="date">May 2018 – May 2022</p>
            <p><strong>GPA: 8.37 / 10.00 · Top 7%</strong></p>
          </article>
        </div>
      </section>

      <section className="resume-section" id="skills" aria-labelledby="skills-heading">
        <div className="section-heading"><span>04 /</span><h2 id="skills-heading">Technical<br/>foundation</h2></div>
        <div className="section-body skills-grid">
          <div><h3>Programming & libraries</h3><div className="tags">{['Python','NumPy','Pandas','SciPy','PyTorch','C++','R','Java','SQL','Excel VBA'].map(x=><span key={x}>{x}</span>)}</div></div>
          <div><h3>Mathematics & methods</h3><div className="tags">{['Statistics','Probability theory','Time series','Stochastic processes','Differential equations','Monte Carlo simulation'].map(x=><span key={x}>{x}</span>)}</div></div>
          <div className="exam-note"><h3>Professional examinations</h3><p>Passed CFA Level I and FRM Part I examinations.</p></div>
        </div>
      </section>

      <section className="resume-section" id="beyond" aria-labelledby="beyond-heading">
        <div className="section-heading"><span>05 /</span><h2 id="beyond-heading">Competition &<br/>curiosity</h2></div>
        <div className="section-body">
          <article className="achievement"><p className="eyebrow">Trading competition</p><h3>Top 5% · IMC Prosperity 4</h3><p>Placed in the top 5% of the manual trading round by constructing a synthetic put through put–call parity and static replication to arbitrage a pricing spread.</p></article>
          <article className="cubing">
            <p className="eyebrow">Beyond finance · Speedcubing</p>
            <h3>Finding the next move.</h3>
            <p>Competitive speedcuber with a 14.02-second official 3×3 solve and a debutant podium.</p>
            <div className="cube-records"><div><span>3×3 cube</span><strong>14.02<span>s</span></strong><p>Single · 15.49s average</p></div><div><span>2×2 cube</span><strong>8.28<span>s</span></strong><p>Single · 10.45s average</p></div></div>
            <p className="research-note">Official results at Gurugram Autumn Cube Open 2024.</p>
            <a className="text-link" href="https://www.worldcubeassociation.org/persons/2024SINH05" target="_blank" rel="noopener noreferrer">View my WCA profile <ArrowUpRight size={16} aria-hidden="true"/><span className="wca-id">2024SINH05</span></a>
          </article>
        </div>
      </section>
      <footer><div><a href="#main">Snehal Sinha</a><p>Quantitative finance · Atlanta, GA</p></div><div><a href="mailto:ssinha373@gatech.edu">ssinha373@gatech.edu</a><a href={resume} download="Snehal-Sinha-Resume.pdf" target="_blank" rel="noopener noreferrer">Download résumé ↓</a></div></footer>
    </main>
  </>;
}
