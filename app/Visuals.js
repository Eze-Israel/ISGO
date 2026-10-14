"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=85",
    alt: "Cultivated green fields beneath a wide open sky",
    eyebrow: "ROOTED IN MBIRICHI, IMO STATE",
    title: "Good food starts with a healthy landscape.",
    description: "An integrated farm growing crops, raising livestock and fish, and protecting locally adapted seeds.",
    action: "Explore the farm",
    href: "#farm",
  },
  {
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2200&q=85",
    alt: "Warm sunlight falling across rows of crops on a working farm",
    eyebrow: "GROWING FOOD, CREATING OPPORTUNITY",
    title: "A farm built to nourish its community.",
    description: "Thoughtful production across maize, cassava, vegetables, poultry and fish, with local livelihoods in mind.",
    action: "Our approach",
    href: "#enterprises",
  },
  {
    image: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=2200&q=85",
    alt: "Golden grain heads across a sunlit field",
    eyebrow: "KEEPING LOCAL KNOWLEDGE ALIVE",
    title: "Protecting the seeds that know this soil.",
    description: "Identifying, multiplying and carefully storing indigenous varieties for more resilient harvests.",
    action: "Discover our seed work",
    href: "#seeds",
  },
  {
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=2200&q=85",
    alt: "Chickens in a farm setting",
    eyebrow: "POULTRY FOR FOOD AND LIVELIHOODS",
    title: "Building a healthy, productive poultry unit.",
    description: "The first phase will establish poultry housing and care practices for egg and meat production.",
    action: "Explore the project plan",
    href: "#enterprises",
  },
  {
    image: "https://images.unsplash.com/photo-1541441056316-443fff347c40?auto=format&fit=crop&w=2200&q=85",
    alt: "Fish swimming in freshwater",
    eyebrow: "FISH FARMING, PLANNED WITH CARE",
    title: "A fish pond designed for responsible production.",
    description: "ISGO Farms plans to raise tilapia with careful attention to water, feed and pond management.",
    action: "See the farm plan",
    href: "#farm",
  },
  {
    image: "https://images.unsplash.com/photo-1560819400-434c188f63ef?auto=format&fit=crop&w=2200&q=85",
    alt: "Brown and white goats",
    eyebrow: "LIVESTOCK IN THE NEXT PHASE",
    title: "Making room for a future goat unit.",
    description: "A later phase will add goats as the farm develops its infrastructure and production capacity.",
    action: "View our objectives",
    href: "#objectives",
  },
  {
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=2200&q=85",
    alt: "Piglets being raised on a farm",
    eyebrow: "PIGGERY IN THE NEXT PHASE",
    title: "Planning responsible livestock expansion.",
    description: "Pigs are part of the longer-term plan, introduced when the farm is ready to support their care and management.",
    action: "View our objectives",
    href: "#objectives",
  },
];

export function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const slide = slides[active];
  const showSlide = (index) => setActive((index + slides.length) % slides.length);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="ISGO Farms">
      <AnimatePresence mode="wait">
        <motion.img
          key={slide.image}
          className="hero__image"
          src={slide.image}
          alt={slide.alt}
          initial={reduceMotion ? false : { opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, ease: "easeOut" }}
          fetchPriority="high"
        />
      </AnimatePresence>
      <div className="hero__shade" />
      <div className="hero__content">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.title}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.35 }}
          >
            <p className="eyebrow hero__eyebrow">{slide.eyebrow}</p>
            <h1>{slide.title}</h1>
            <p className="hero__description">{slide.description}</p>
            <a className="button button--gold" href={slide.href}>
              {slide.action}<span aria-hidden="true"> ↗</span>
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="hero__footer">
        <p><span className="hero__sun" aria-hidden="true">✳</span> Agriculture. People. Prosperity.</p>
        <div className="hero__controls" aria-label="Choose a featured story">
          <span className="hero__count">0{active + 1} <span>/ 0{slides.length}</span></span>
          {slides.map((item, index) => (
            <button
              key={item.title}
              className={`hero__dot${active === index ? " is-active" : ""}`}
              type="button"
              aria-label={`Show slide ${index + 1}: ${item.title}`}
              aria-current={active === index ? "true" : undefined}
              onClick={() => showSlide(index)}
            />
          ))}
          <button className="hero__arrow" type="button" aria-label="Previous slide" onClick={() => showSlide(active - 1)}>←</button>
          <button className="hero__arrow" type="button" aria-label="Next slide" onClick={() => showSlide(active + 1)}>→</button>
        </div>
      </div>
    </section>
  );
}