import { useEffect, useState } from "react";
import "./Hero.css";

import { FaApple } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoChevronForwardOutline } from "react-icons/io5";

// Images (corrected imports)
import heroImg from "../../assets/iphone-14-pro-on-white-background-front-view.jpg";
import heroImgWatch from "../../assets/apple-watch-ultra.jpg"; 
import heroImgAirPods from "../../assets/airpods-pro-2.jpg"; 
import heroImg2 from "../../assets/macbookpro.jpg";
import heroImgHomePod from "../../assets/home-pod-mini.jpg";


// Categories 
const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

// Slides (order preserved for slider)
const slides = [
  {
    id: 0,
    eyebrow: "iPhone 14 Series",
    headingPrimary: "Up to 10%",
    headingSecondary: "off Voucher",
    image: heroImg,
  },
  {
    id: 1,
    eyebrow: "Apple Watch Ultra",
    headingPrimary: "Stay Connected",
    headingSecondary: "All Day",
    image: heroImgWatch,
  },
  {
    id: 2,
    eyebrow: "AirPods Pro 2",
    headingPrimary: "Noise Cancelling",
    headingSecondary: "On the Go",
    image: heroImgAirPods,
  },
  {
    id: 3,
    eyebrow: "MacBook Pro M2",
    headingPrimary: "Power Your",
    headingSecondary: "Creativity",
    image: heroImg2,
  },
  {
    id: 4,
    eyebrow: "HomePod Mini",
    headingPrimary: "Fill the Room",
    headingSecondary: "With Sound",
    image: heroImgHomePod,
  },
];

const SLIDE_DELAY = 6000;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DELAY);

    return () => clearInterval(timer);
  }, [slides.length]);

  const currentSlide = slides[activeSlide];

  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        {/* At the sidebar fixed: added missing "categories" array */}
        <aside className="hero-sidebar">
          <ul>
            {categories.map((item, index) => (
              <li key={item}>
                <span>{item}</span>
                {index < 2 && (
                  <IoChevronForwardOutline className="sidebar-icon" />
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Banner */}
        <article className="hero-banner">
          <div className="hero-banner__row">
            <div className="hero-banner__content" key={currentSlide.id}>
              <p className="hero-eyebrow">
                <FaApple className="hero-apple" />
                {currentSlide.eyebrow}
              </p>

              <h1>
                <span className="hero-heading-line hero-heading-line--primary">
                  {currentSlide.headingPrimary}
                </span>
                <span className="hero-heading-line hero-heading-line--secondary">
                  {currentSlide.headingSecondary}
                </span>
              </h1>

              <button className="hero-cta">
                <span>Shop Now</span>
                <HiOutlineArrowNarrowRight className="hero-cta__icon" />
              </button>
            </div>

            <img
              src={currentSlide.image}
              alt={currentSlide.eyebrow}
              className="hero-image"
              key={`${currentSlide.id}-image`}
            />
          </div>

          {/* Dots */}
          <div className="hero-dots">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={
                  index === activeSlide
                    ? "hero-dot hero-dot--active"
                    : "hero-dot"
                }
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-pressed={index === activeSlide}
              />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
