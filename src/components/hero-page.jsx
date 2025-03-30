import { CircleArrowRight } from 'lucide-react';
import React from 'react';
import background from "../assets/a-chosen-soul-sNQf2ySMcj8-unsplash.jpg";
import { useNavigate } from "react-router-dom";

const HeroPage = () => {
  const navigate = useNavigate();

  return (
    <section 
      className="h-[100vh] lg:h-[calc(100vh-72px)] w-full flex justify-center items-center px-6 lg:px-20 bg-black text-white relative"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay to enhance text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="w-full max-w-7xl flex justify-center items-center flex-col gap-10 relative z-10">
        <div className="text-center w-[90%] text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
          <h1>Your Escape from Boredom Starts Here!</h1>
          {/* <h1>Inspiration with Us</h1> */}
        </div>

        <button 
          onClick={() => navigate("/chat-bot")} 
          className="text-xl md:text-2xl bg-blue-500 text-black p-3 md:p-5 rounded-full flex items-center gap-2"
        >
          Chat with Bot <CircleArrowRight />
        </button>
      </div>
    </section>
  );
}

export default HeroPage;
