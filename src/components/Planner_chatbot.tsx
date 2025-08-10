"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles, Send, Plus } from "lucide-react";

const AiTripPlannerChatbot = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [messages, setMessages] = useState([
    { type: "assistant", text: "Hello!👋\nI'm your Tour Guide Assistant." },
    { type: "user", text: "I'm planning a trip to Istanbul. Can you help with the itinerary?" },
    { type: "assistant", text: "Oh, Istanbul! The city where East meets West and where you can eat your weight in baklava. Let's get this trip planning party started!" },
    { type: "user", text: "February for a week-long stay with friends to explore local cuisine" },
    { type: "assistant", text: "Awesome! Here’s the scoop on your trip:\n\n7-Day Culinary Adventure in Istanbul for a group of friends\n- Dates: February 12 - February 19, 2025\n- Travelers: 4 (You and your three friends)\n- Total Cost: $546 (about BDT 74,500, give or take)" }
  ]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    console.log("Sending message:", inputValue);  
    // Simulate an API call
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full max-w-[1400px] mx-auto sm:mt-8 mt-6 p-4">
      
      {/* Chat Section */}
      <section
        aria-label="Chat conversation with tour guide assistant"
        className="flex flex-col bg-white rounded-xl shadow-xl w-full lg:max-w-[480px] h-[600px] max-h-[800px] p-6"
      >
        {/* Chat Messages */}
        <div className="flex flex-col gap-5 flex-grow overflow-y-auto scrollbar-hide scrollbar-thin scroll-smooth pb-4">
          {messages.map((msg, idx) => (
            <article
              key={idx}
              className={msg.type === "assistant" ? "flex gap-3 items-start" : "flex justify-end"}
            >
              {msg.type === "assistant" && (
                <div
                  className="shrink-0 w-9 h-9 bg-green-100 rounded-full flex justify-center items-center text-green-600 font-bold select-none"
                  aria-hidden="true"
                >
                  ✨
                </div>
              )}
              <div
                className={`text-sm leading-tight whitespace-pre-line ${
                  msg.type === "user"
                    ? "rounded-lg bg-sky-200 text-sky-900 px-4 py-2 max-w-[70%]"
                    : ""
                }`}
              >
                {msg.text}
              </div>
            </article>
          ))}
        </div>

        {/* Input Section */}
        <div className="mt-4 flex items-center gap-2">
          <Input
            placeholder="The more you share, the better I can help..."
            className="flex-1 border-gray-200"
            onChange={(e) => setInputValue(e.currentTarget.value)}
          />
          {/* <Button variant="outline" size="icon">
            <Plus className="h-5 w-5 text-gray-500" />
          </Button> */}
          <Button
            size="icon"
            className="bg-[#2ad8a4] hover:bg-[#23b98b] text-white"
            onClick={handleSendMessage}
            disabled={isLoading}
            aria-label="Send message"
            title="Send message"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Itinerary Section */}
      <section
        aria-label="Culinary adventure itinerary details"
        className="bg-white rounded-xl shadow-xl w-full h-full max-h-[800px] flex flex-col p-6"
      >
        {/* Header actions */}
        <header className="flex justify-between items-center mb-4">
          <div className="flex gap-3 items-center text-gray-700 text-sm select-none">
            <button
              aria-label="Share itinerary"
              title="Share itinerary"
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M18 8a3 3 0 0 0-2.812 2H10a2 2 0 1 0 0 4h5.188A3 3 0 1 0 18 8z" />
              </svg>
            </button>

            <button
              aria-label="Bookmark itinerary"
              title="Bookmark itinerary"
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 3v18l7-5 7 5V3z" />
              </svg>
            </button>
          </div>

          <button
            aria-label="Cancel itinerary"
            title="Cancel itinerary"
            className="text-gray-500 hover:text-gray-700 transition"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </header>

        {/* Title */}
        <h1 className="text-2xl font-semibold leading-tight pb-1 select-text">
          7-Day Culinary Adventure in Istanbul with friends
        </h1>
        <p className="text-gray-600 text-sm mb-5 select-text">
          February 12 - February 19, 2025
        </p>

        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-md mb-6">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0970ff16-68f1-44cb-abff-3ba990a84d29.png"
            alt="Detailed map of Istanbul"
            className="w-full object-cover"
          />
        </div>

        {/* Tabs + cost */}
        <nav
          aria-label="Itinerary categories and total cost"
          className="flex items-center justify-between mb-3 flex-wrap gap-3"
        >
          <ul
            role="tablist"
            className="flex gap-4 text-xs font-semibold text-gray-600 flex-wrap"
          >
            <li className="flex gap-1 items-center py-1 px-3 rounded-full bg-gray-100 cursor-pointer">
              Itinerary
            </li>
            <li className="flex gap-1 items-center py-1 px-3 rounded-full cursor-pointer hover:bg-gray-100 text-gray-400">
              Restaurant
            </li>
            <li className="flex gap-1 items-center py-1 px-3 rounded-full cursor-pointer hover:bg-gray-100 text-gray-400">
              Hotel
            </li>
            <li className="flex gap-1 items-center py-1 px-3 rounded-full cursor-pointer hover:bg-gray-100 text-gray-400">
              Flights
            </li>
          </ul>

          <div className="flex items-center gap-2 bg-green-100 rounded-full px-3 py-1 text-green-700 min-w-[100px] text-xs font-semibold">
            <span>Total Cost</span>
            <span className="bg-green-600 text-white rounded-full px-3 py-0.5 font-mono">
              $546 USD
            </span>
          </div>
        </nav>

        {/* Dates */}
        <div className="flex gap-3 mb-3 flex-wrap">
          <button className="bg-gray-900 text-white rounded-full px-4 py-1 text-xs font-semibold">
            Feb 10
          </button>
          <button className="bg-gray-100 text-gray-600 rounded-full px-4 py-1 text-xs font-semibold hover:bg-gray-200">
            Feb 11
          </button>
          <button className="bg-gray-100 text-gray-600 rounded-full px-4 py-1 text-xs font-semibold hover:bg-gray-200">
            Feb 12
          </button>
          <button className="bg-gray-100 text-gray-600 rounded-full px-4 py-1 text-xs font-semibold hover:bg-gray-200">
            Feb 13
          </button>
        </div>

        {/* Itinerary Details */}
        <article className="flex flex-col gap-3 border border-gray-200 rounded-lg p-4 flex-grow overflow-y-auto scrollbar-thin">
          <h2 className="font-semibold text-gray-900 mb-2">Istanbul, Türkiye</h2>
          <p className="font-semibold text-lg mb-4">Wednesday, Feb 10</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-28 sm:h-20 rounded-lg overflow-hidden shrink-0 border border-gray-200 shadow-sm">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8bdf3195-1bb4-40a6-89c5-b01d51d3bdb3.png"
                alt="Pera Museum"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-grow flex flex-col justify-between">
              <header>
                <h3 className="font-semibold text-base mb-1">Pera Museum</h3>
                <div className="flex items-center gap-2 text-sm text-green-600 font-semibold">
                  <span>★ 4.7</span>
                  <span className="text-gray-400">(441 reviews)</span>
                </div>
              </header>
              <div className="flex gap-3 items-center text-gray-600 text-xs mt-2 flex-wrap">
                <span>Speciality Museums</span>
                <span>From <strong>$24</strong>/ Person</span>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default AiTripPlannerChatbot;
