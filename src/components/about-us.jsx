import React from 'react'

const AboutUs = () => {
  return (
    <section id='about-us' className="bg-gray-900 text-white py-12 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg mb-4">
          Feeling bored? We’ve got you covered! 🎉
        </p>
        <p className="text-lg mb-4">
          Welcome to <span className="font-semibold">[Your Website Name]</span>, your ultimate boredom-buster! Whether you're in the mood for a laugh, a challenge, or just something fun to do, we’ve packed this place with everything you need to kill time in the most entertaining way possible.
        </p>
        <div className="mt-6 space-y-6 text-left">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">🧠 Chatbots for Fun</h2>
            <p className="text-gray-400 mt-2">From cracking dad jokes to giving savage roasts, recommending movies, and even throwing tricky riddles your way, our AI-powered bots are here to keep you entertained.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">😂 Meme Madness</h2>
            <p className="text-gray-400 mt-2">Browse through an ever-growing collection of hilarious memes that will have you rolling on the floor laughing!</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">📖 Conspiracy & Story Hub</h2>
            <p className="text-gray-400 mt-2">Dive into wild conspiracy theories, creepy tales, and mind-blowing short stories that will keep you hooked.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">🎮 Minigames & Fun Activities</h2>
            <p className="text-gray-400 mt-2">Play quick and engaging minigames or find exciting things to do when boredom strikes.</p>
          </div>
        </div>
        <p className="text-lg mt-8 font-semibold">
          Whether you're looking for a quick laugh, a challenge, or an escape into a fun story, <span className="font-bold">[Your Website Name]</span> is here to turn your boredom into excitement. So, what are you waiting for? Start exploring and let the fun begin! 🚀
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
