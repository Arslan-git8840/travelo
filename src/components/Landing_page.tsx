"use client";

import React from "react";
import {
  FileText,
  Smartphone,
  User,
  CheckSquare,
  CalendarCheck,
  Wallet,
  BookOpen,
  Video,
  Globe,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const features = [
  { name: "Documents", icon: FileText },
  { name: "eSIM", icon: Smartphone },
  { name: "Profile", icon: User },
  { name: "Checklist", icon: CheckSquare },
  { name: "Planner", icon: CalendarCheck },
  { name: "Budget", icon: Wallet },
  { name: "Journal", icon: BookOpen },
  { name: "Travel Reels", icon: Video },
  { name: "Scratch Map", icon: Globe },
];

const Landing_page = () => {
  const middleIndex = Math.floor(features.length / 2);

  return (
    <section className="w-full flex flex-col px-4 py-10">
      <div className="bg-overlay bg-[url('/banner_travelo.svg')] bg-cover bg-center bg-no-repeat"></div>
      {/* Hero content */}
      <div className="flex flex-1 justify-center items-center">
        <div className="relative z-10 max-w-4xl w-full text-center space-y-6 p-6 sm:p-10 md:p-12 rounded-lg">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            <span
              className="block text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(140deg, #2ad8a4 0.91%, #34bb93 100.57%)",
              }}
            >
              One travel app
            </span>
            <span className="block text-gray-900">to replace them all</span>
          </h1>

          <p className="text-gray-800 text-base sm:text-lg max-w-xl mx-auto">
            Streamline every aspect of your trip – from itinerary planning and
            travel budgeting to packing and wanderlust sharing.
          </p>

          <Link href="/sign-in">
            <Button
              className="mt-4 p-6 text-white text-lg font-semibold rounded-full transition"
              style={{
                background:
                  "linear-gradient(140deg, #2ad8a4 0.91%, #34bb93 100.57%)",
              }}
            >
              Get started. It's FREE
            </Button>
          </Link>
        </div>
      </div>

      {/* Horizontal Feature List */}
      <div className="mt-10 overflow-x-auto scrollbar-hide">
        <div className="flex md:grid md:grid-cols-9 gap-6 justify-center py-6 px-4 bg-white/80 rounded-lg backdrop-blur-sm max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isMiddle = index === middleIndex;

            return (
              <div
                key={index}
                className={`flex flex-col items-center justify-center min-w-[80px] text-center transition-transform duration-300 ${
                  isMiddle ? "scale-125 drop-shadow-xl" : ""
                }`}
              >
                <div className="flex flex-col items-center justify-center">
                  <Icon className="h-6 w-6 mb-1" style={{ color: "#13c892" }} />
                  <span className="text-sm text-gray-700 font-medium">
                    {feature.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Demo Images Section */}
      <div className="relative w-full flex justify-center items-center mt-10">
        {/* Main Header Image - wider on medium+ screens */}
        <Image
          src="/main_header.png"
          alt="Main Header"
          width={1400}
          height={800}
          className="hidden sm:block w-full max-w-7xl rounded-lg"
        />

        {/* Phone Image - smaller height and always visible, positioned on top for md+ */}
        <Image
          src="/header_phone.png"
          alt="Phone Header"
          width={300}
          height={600}
          className="w-full sm:w-1/4 sm:absolute sm:top-1/2 sm:right-0 sm:-translate-x-1/3 sm:-translate-y-1/2 z-10"
        />
      </div>

      {/* Trip Demo Banner Heading */}
      <div className="text-center mt-12">
        <h2
          className="text-3xl sm:text-4xl font-extrabold leading-tight text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(140deg, #2ad8a4 0.91%, #34bb93 100.57%)",
          }}
        >
          Plan your dream trip in minutes
        </h2>
        <p className="text-gray-800 mt-3 max-w-2xl mx-auto text-base sm:text-lg">
          Our AI-powered trip planner helps you create, customize, and visualize
          your perfect journey — effortlessly.
        </p>
      </div>

      {/* Trip Demo Banner */}

      <div>
        <Image
          src="/trip_demo_banner.png"
          alt="Trip Demo Banner"
          width={1400}
          height={800}
          className="w-full max-w-7xl mx-auto mt-10 rounded-lg"
        />
      </div>

    </section>
  );
};

export default Landing_page;
