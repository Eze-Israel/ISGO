import * as D from "./data";
import Pledge from "./Pledge";
import HeroCarousel, { Reveal } from "./Visuals";

function Section({ id, title, sub, tint = false, children }) {
    return (
        <section id={id} className={`section${tint ? " section--tint" : ""}`}>
            <div className="page-width">
                <Reveal>
                    <div className="section__heading">
                        <p className="eyebrow">ISGO FARMS <span>/</span> {id}</p>
                        <h2>{title}</h2>
                        {sub && <p className="section__intro">{sub}</p>}
                    </div>
                </Reveal>
                <div className="section__body">{children}</div>
            </div>
        </section>
    );
}

const formatNaira = (amount) => `₦${amount.toLocaleString("en-NG")}`;

export default function Home() {
    const total = D.budget.reduce((sum, [, amount]) => sum + amount, 0);

    return (
        <main>
            <header className="site-header">
                <div className="page-width site-header__inner">
                    <a href="#top" className="brand" aria-label="ISGO Farms home">
                        <span className="brand__mark" aria-hidden="true">I</span>
                        <span>ISGO <b>FARMS</b><small>AGRICULTURE · PEOPLE · PROSPERITY</small></span>
                    </a>
                    <nav className="site-nav" aria-label="Main navigation">
                        {D.nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
                    </nav>
                    <a className="header-cta" href="#contact">Work with us <span aria-hidden="true">↗</span></a>
                </div>
            </header>

            <div id="top"><HeroCarousel /></div>

            <section className="grant-appeal" aria-labelledby="grant-appeal-title">
                <div className="page-width grant-appeal__inner">
                    <Reveal className="grant-appeal__copy">
                        <p className="eyebrow">A PROPOSED PROJECT, READY FOR PARTNERS</p>
                        <h2 id="grant-appeal-title">Help bring the ISGO Farms plan to life.</h2>
                        <p>We are seeking grant funding and strategic support to establish an integrated farm in Mbirichi. Your partnership can help build essential infrastructure, launch poultry and fish production, and create lasting opportunities for local people.</p>
                        <a className="button button--gold" href="#contact">Partner with us<span aria-hidden="true"> ↗</span></a>
                    </Reveal>
                    <div className="grant-appeal__details">
                        <Reveal className="grant-appeal__amount" delay={0.12}>
                            <span>PHASE ONE GRANT SOUGHT</span>
                            <strong>₦2,500,000</strong>
                            <small>Part of a ₦4,200,000 project, including in-kind contribution</small>
                        </Reveal>
                        <div className="grant-appeal__targets">
                            <Reveal delay={0.2}><strong>12 months</strong><span>to establish phase one</span></Reveal>
                            <Reveal delay={0.28}><strong>4–10 local jobs</strong><span>targeted as the farm develops</span></Reveal>
                        </div>
                    </div>
                </div>
            </section>

            <section className="facts-bar" aria-label="Project overview">
                <div className="page-width facts-bar__inner">
                    {[["01 ha", "Fenced farmland"], ["4–10", "Local jobs targeted"], ["12 months", "Phase one"], ["₦2.5m", "Grant requested"]].map(([value, label]) => (
                        <div className="fact" key={label}><strong>{value}</strong><span>{label}</span></div>
                    ))}
                </div>
            </section>

            <Section id="about" title="Agriculture with people at its heart" sub="ISGO Farms is a proposed integrated farm in Mbirichi, Ohaji/Egbema LGA, Imo State. Our plan brings crop production, livestock, fish farming and indigenous seed conservation together." >
                <div className="about-grid">
                    <Reveal className="about-copy">
                        <p className="dropcap">A resilient food system begins close to home. ISGO Farms is designed to grow nutritious food, create practical opportunities and keep locally adapted seeds in the hands of future growers.</p>
                        <p>With existing farmland, nearby water and access to local markets, the project will develop in considered phases, building productive capacity alongside community knowledge.</p>
                        <a className="text-link" href="#objectives">What we are working toward <span aria-hidden="true">→</span></a>
                    </Reveal>
                    <Reveal className="about-photo" delay={0.1}>
                        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80" alt="Green agricultural fields under an open sky" loading="lazy" />
                        <span>MBIRICHI <i>·</i> IMO STATE, NIGERIA</span>
                    </Reveal>
                    <div className="about-details">
                        <Reveal className="info-block">
                            <p className="eyebrow">THE OPPORTUNITY</p>
                            <h3>Growing through local challenges</h3>
                            <ul>{D.problems.map((item) => <li key={item}>{item}</li>)}</ul>
                        </Reveal>
                        <Reveal className="info-block" delay={0.08}>
                            <p className="eyebrow">OUR FOUNDATION</p>
                            <h3>Built on practical commitment</h3>
                            <ul>{D.why.map((item) => <li key={item}>{item}</li>)}</ul>
                        </Reveal>
                    </div>
                </div>
                <Reveal className="key-facts">
                    {D.facts.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
                </Reveal>
            </Section>

            <Section id="objectives" title="A clear path from plan to harvest" sub="A 12-month first phase lays the groundwork for a productive, inclusive and sustainable farm." tint>
                <div className="objective-list">
                    {D.objectives.map((item, index) => <Reveal className="objective" key={item} delay={index * 0.04}>
                        <span className="objective__number">0{index + 1}</span><p>{item}</p><span className="objective__arrow" aria-hidden="true">↗</span>
                    </Reveal>)}
                </div>
            </Section>

            <Section id="farm" title="One hectare, thoughtfully planned" sub="Located in Mbirichi, with water sources, vehicle access and local markets nearby.">
                <div className="farm-grid">
                    <Reveal className="farm-image">
                        <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1300&q=80" alt="Crop rows on a rural farm" loading="lazy" />
                        <div><span>PHASE ONE</span><strong>Groundwork for a connected farm</strong></div>
                    </Reveal>
                    <div className="farm-information">
                        <Reveal>
                            <p className="eyebrow">SITE FEATURES</p>
                            <div className="feature-list">{D.features.map((item, index) => <div key={item}><span>0{index + 1}</span>{item}</div>)}</div>
                        </Reveal>
                        <Reveal className="layout-block" delay={0.08}>
                            <p className="eyebrow">FARM LAYOUT</p>
                            <ol>{D.layout.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
                        </Reveal>
                    </div>
                </div>
            </Section>

            <Section id="enterprises" title="A connected mix of farm enterprises" sub="Each production unit supports a more diverse, resource-conscious operation." tint>
                <div className="enterprise-grid">
                    {D.enterprises.map(([icon, title, description], index) => <Reveal className="enterprise" key={title} delay={index * 0.06}>
                        <span className="enterprise__icon" aria-hidden="true">{icon}</span>
                        <span className="enterprise__index">0{index + 1}</span>
                        <h3>{title}</h3><p>{description}</p>
                    </Reveal>)}
                </div>
                <Reveal className="method-strip">
                    <div><p className="eyebrow">FROM PREPARATION TO PRODUCTION</p><h3>Methodical by design.</h3></div>
                    <ol>{D.method.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
                </Reveal>
            </Section>

            <Section id="seeds" title="Seeds carry a community's future" sub="Identifying, documenting and multiplying locally adapted maize, cassava and vegetable varieties helps preserve agricultural knowledge for the seasons ahead.">
                <Reveal className="seed-feature">
                      <img src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1800&q=85" alt="Golden grain heads across a sunlit field" loading="lazy" />
                    <div className="seed-feature__copy"><p className="eyebrow">LOCAL KNOWLEDGE, LIVING SEEDS</p><blockquote>“Preserving our seeds today, securing our harvests tomorrow.”</blockquote><p>Careful selection, multiplication plots, labeling and storage are central to the seed conservation plan.</p></div>
                </Reveal>
            </Section>

            <Section id="budget" title="A transparent first-phase plan" sub="Grant request: ₦2,500,000. The total phase-one project cost is ₦4,200,000, including in-kind contribution." tint>
                <div className="budget-grid">
                    <Reveal className="budget-table-wrap">
                        <table className="budget-table"><thead><tr><th scope="col">Investment area</th><th scope="col">Amount</th></tr></thead><tbody>
                            {D.budget.map(([item, amount]) => <tr key={item}><td>{item}</td><td>{formatNaira(amount)}</td></tr>)}
                            <tr className="budget-table__total"><th scope="row">Total requested</th><td>{formatNaira(total)}</td></tr>
                        </tbody></table>
                    </Reveal>
                    <Reveal className="timeline" delay={0.08}>
                        <p className="eyebrow">12-MONTH TIMELINE</p>
                        {D.timeline.map(([period, description], index) => <div className="timeline__item" key={period}><span>0{index + 1}</span><div><strong>{period}</strong><p>{description}</p></div></div>)}
                    </Reveal>
                </div>
            </Section>

            <Section id="impact" title="The harvest is more than food" sub="A productive farm can support livelihoods, preserve local knowledge and strengthen food security." >
                <div className="impact-grid">
                    {D.impact.map(([icon, title, description], index) => <Reveal className="impact" key={title} delay={index * 0.05}><span aria-hidden="true">{icon}</span><h3>{title}</h3><p>{description}</p></Reveal>)}
                </div>
                <div className="impact-support">
                    <Reveal><p className="eyebrow">BUILT FOR THE LONG TERM</p><h3>Sustainability plan</h3><ul>{D.sustain.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>
                    <Reveal delay={0.08}><p className="eyebrow">READY FOR REAL-WORLD CONDITIONS</p><h3>Risk management</h3><ul>{D.risks.map(([risk, response]) => <li key={risk}><strong>{risk}:</strong> {response}</li>)}</ul></Reveal>
                </div>
            </Section>

            <section id="contact" className="contact-section">
                <div className="page-width">
                    <Reveal className="contact-heading"><p className="eyebrow">GROW SOMETHING GOOD WITH US</p><h2>Let's build a stronger food future.</h2><p>Partner with ISGO Farms to grow opportunity, conserve local seeds and support a thriving community.</p></Reveal>
                    <div className="contact-grid">
                        <Reveal className="contact-details"><span className="contact-details__mark" aria-hidden="true">✳</span><p className="eyebrow">VISIT THE PROJECT</p><h3>Mbirichi, Ohaji/Egbema LGA, Imo State, Nigeria</h3><a href="mailto:info@isgofarms.com">info@isgofarms.com <span aria-hidden="true">↗</span></a><p className="contact-note">Please confirm the contact email before publishing.</p></Reveal>
                        <Reveal className="contact-form" delay={0.08}><Pledge /></Reveal>
                    </div>
                </div>
            </section>

            <footer className="site-footer"><div className="page-width"><a href="#top" className="brand brand--footer"><span className="brand__mark" aria-hidden="true">I</span><span>ISGO <b>FARMS</b><small>AGRICULTURE · PEOPLE · PROSPERITY</small></span></a><p>© {new Date().getFullYear()} ISGO Farms Limited <span>·</span> Mbirichi, Imo State, Nigeria</p><a href="#top">Back to top ↑</a></div></footer>
        </main>
    );
}
