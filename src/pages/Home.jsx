import { Link } from "react-router-dom";
import homeHero from "../assets/images/home-hero.png";
const Home = () => {
  return (
    <>
      <div
        className="relative min-h-[350px] bg-cover bg-center bg-no-repeat px-[23px] py-[45px] text-white"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)), url(${homeHero})`,
        }}
      >
        <h1 className="text-[2.25rem] leading-[42px] font-bold">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="leading-6">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="vans" className="link-button mt-[27px] bg-[#FF8C38] px-0">
          Find your van
        </Link>
      </div>
    </>
  );
};

export default Home;
