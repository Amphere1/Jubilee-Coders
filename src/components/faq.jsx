import React, { useState } from "react";

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const toggleQuestion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const questions = [
    {
      id: 1,
      question: "What is this website about?",
      answer:
        "This website is a one-stop destination for fun and leisure! You can play mini-games, browse movie lists, explore theme parks, enjoy hilarious memes, and dive into intriguing conspiracy stories—all in one place.",
    },
    {
      id: 2,
      question: "Are the mini-games free to play?",
      answer:
        "Yes! All mini-games on our platform are completely free to play. Just click and start having fun!",
    },
    {
      id: 3,
      question: "Where do you source memes and conspiracy stories from?",
      answer:
        "Our memes and conspiracy stories are curated from popular online sources, ensuring you always get fresh and engaging content.",
    },
    {
      id: 4,
      question: "How often is the movie list updated?",
      answer:
        "We update our movie lists regularly to include the latest releases, trending films, and all-time favorites.",
    },
  ];

  return (
    <section className="py-[120px] flex justify-center px-6 lg:px-20">
      <div className="w-full max-w-7xl">
        <h1 className="text-6xl lg:text-7xl italic font-[700]">FAQ</h1>
        {questions.map(({ id, question, answer }) => (
          <div
            key={id}
            onClick={() => toggleQuestion(id)}
            className="py-6 cursor-pointer border-b-[1px] border-neutral-800"
          >
            <div className="font-jakartaSans">
              <div className="flex justify-between items-center font-rethinkSans">
                <h1 className="text-2xl md:text-3xl w-full md:w-[640px] leading-[150%] md:leading-[44px] font-[600] tracking-[-0.64px]">
                  {question}
                </h1>
                {/* Dropdown Button */}
                <button
                  onClick={() => toggleQuestion(id)}
                  className="ml-4 focus:outline-none"
                >
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${
                      openId === id ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openId === id
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="leading-[150%] font-medium max-w-[640px]">
                    {answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;