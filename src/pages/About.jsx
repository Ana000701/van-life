import { Link } from "react-router-dom";
import bgImg from "../assets/images/about-hero.png";
const About = () => {
  return (
    <>
      <div className="about-page-container">
        <img src={bgImg} className="max-w-full" />
        <div className="mb-[55px] px-[23px] text-[#161616]">
          <h1 className="leading-[38px]">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="leading-[22px]">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className="leading-[22px]">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="mx-[27px] rounded-[5px] bg-[#FFCC8D] px-8 pb-8 text-[#161616]">
          <h2 className="m-0 py-[37px]">
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Link className="link-button rounded-[10px] bg-[#161616]" to="/vans">
            Explore our vans
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
