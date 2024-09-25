import { Link } from "react-scroll";

// Hero section
const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/restaurant_2.jpg" alt="restaurant" />
      <div className="item">
        <h3>Dream Maker</h3>
        <div>
          <h1>Your Personal Dream Maker</h1>
          <p>
            Transforming visions into unforgettable moments, we specialize in
            crafting personalized events that reflect your style and exceed your
            expectations.
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
