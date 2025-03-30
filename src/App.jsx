import { Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Faq from "./components/faq";
import Footer from "./components/footer";
import HeroPage from "./components/hero-page";
import Navbar from "./components/navbar";
import SignUp from "./components/sign-up";
import Zone from "./components/zone";
import Movies from "./pages/movies";
import GamesPage from "./pages/games"; 
import GuessTheFlag from "./games/GuessTheFlag"; 
import FactOrFiction from "./games/FactOrFiction";
import Hangman from "./games/Hangman";
import Chatbot from "./pages/chatbot";
import ThemePark from "./pages/ThemePark";
import ThemeParkDetails from "./pages/ThemeParkDetails";
import Memes from "./pages/memes";
import Stories from "./pages/stories";
import Books from "./pages/Books";
import AboutUs from "./components/about-us";
import ContactUs from "./components/contact";



function App() {
  return (
    <div className="app">
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }} 
      />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroPage />
              <AboutUs/>
              <Zone />
              <SignUp />
              <Faq />
              <ContactUs/>
            </>
          }
        />
        <Route path="/chat-bot" element={<Chatbot />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/Books" element={<Books />} />
          
        <Route path="/games" element={<GamesPage />} />
        <Route path="/memes" element={<Memes />} />
        <Route path="/ThemePark" element={<ThemePark />} />
        <Route path="/ThemePark/:id" element={<ThemeParkDetails />} />
        <Route path="/stories" element={<Stories />} />
        
        
        <Route path="/games/guess-the-flag" element={<GuessTheFlag />} />
        <Route path="/games/fact-or-fiction" element={<FactOrFiction />} />
        <Route path="/games/hangman" element={<Hangman />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
