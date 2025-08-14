"use client";

import Image from "next/image";
import {
  MapPin,
  Ticket,
  Clock,
  Hotel,
  PlaneLanding,
  Landmark,
  Building2,
} from "lucide-react";

const tripData = {
  resp: "Here's your detailed 4-day high-budget family sightseeing trip plan from Beijing to Kathmandu, including hotels, sightseeing spots, and useful travel tips. Enjoy your journey!",
  ui: "Final",
  tripPlan: {
    overview:
      "A luxurious 4-day family sightseeing trip from Beijing to Kathmandu, exploring the rich culture, history, and natural beauty of Nepal’s capital and surroundings with comfortable accommodations and curated activities.",
    totalEstimatedCost: "USD 4,500",
    days: [
      {
        day: 1,
        title: "Arrival and Cultural Introduction",
        description:
          "Arrive in Kathmandu, check into a luxury hotel, and enjoy a relaxed afternoon visiting the historic Durbar Square followed by a welcome dinner.",
        places: [
          {
            name: "Kathmandu Durbar Square",
            googleMapLink: "https://maps.google.com/?q=Kathmandu+Durbar+Square",
            image:
              "https://www.bing.com/th/id/OIP.3XTA3zYfXyWQACdSrJm7-QHaEe?w=277&h=211&c=8&rs=1&qlt=90&o=6&cb=thwsc4&dpr=1.3&pid=3.1&rm=2",
            ticketPrice: "USD 15 per adult, USD 7.5 per child",
            timeToCover: "2 hours",
            notes:
              "Explore the royal palace complex and admire traditional Newari architecture.",
          },
        ],
        hotelStay: {
          name: "Dwarika's Hotel Kathmandu",
          googleMapLink: "https://maps.google.com/?q=Dwarikas+Hotel+Kathmandu",
          image:
            "https://www.bing.com/th/id/OIP.3XTA3zYfXyWQACdSrJm7-QHaEe?w=277&h=211&c=8&rs=1&qlt=90&o=6&cb=thwsc4&dpr=1.3&pid=3.1&rm=2",
          pricePerNight: "USD 300",
        },
      },
      {
        day: 2,
        title: "Spiritual and Heritage Exploration",
        description:
          "Visit UNESCO World Heritage sites including Pashupatinath Temple and Boudhanath Stupa, immersing in Nepalese spiritual culture.",
        places: [
          {
            name: "Pashupatinath Temple",
            googleMapLink: "https://maps.google.com/?q=Pashupatinath+Temple",
            image:
              "https://www.bing.com/th/id/OIP.3XTA3zYfXyWQACdSrJm7-QHaEe?w=277&h=211&c=8&rs=1&qlt=90&o=6&cb=thwsc4&dpr=1.3&pid=3.1&rm=2",
            ticketPrice: "USD 10 per adult, free for children under 12",
            timeToCover: "1.5 hours",
            notes:
              "Respect the customs; photography restricted inside main temple area.",
          },
          {
            name: "Boudhanath Stupa",
            googleMapLink: "https://maps.google.com/?q=Boudhanath+Stupa",
            image:
              "https://www.bing.com/th/id/OIP.3XTA3zYfXyWQACdSrJm7-QHaEe?w=277&h=211&c=8&rs=1&qlt=90&o=6&cb=thwsc4&dpr=1.3&pid=3.1&rm=2",
            ticketPrice: "USD 5 per adult, free for children under 12",
            timeToCover: "1.5 hours",
            notes:
              "Circle the stupa clockwise and soak in the spiritual atmosphere.",
          },
        ],
        hotelStay: {
          name: "Dwarika's Hotel Kathmandu",
          googleMapLink: "https://maps.google.com/?q=Dwarikas+Hotel+Kathmandu",
          image:
            "https://www.bing.com/th/id/OIP.3XTA3zYfXyWQACdSrJm7-QHaEe?w=277&h=211&c=8&rs=1&qlt=90&o=6&cb=thwsc4&dpr=1.3&pid=3.1&rm=2",
          pricePerNight: "USD 300",
        },
      },
    ],
  },
};

export default function TripPage() {
  const { overview, totalEstimatedCost, days } = tripData.tripPlan;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#2ad8a4] flex items-center justify-center gap-3">
          <PlaneLanding className="w-8 h-8 text-[#2ad8a4]" /> Trip Itinerary
        </h1>
        <p className="text-lg mt-2 text-gray-700">{overview}</p>
        <p className="text-lg font-semibold mt-3 bg-green-100 text-green-800 px-4 py-2 inline-block rounded-full shadow-sm">
          💰 Estimated Cost: {totalEstimatedCost}
        </p>
      </div>

      {/* Days */}
      <div className="space-y-10">
        {days.map((day) => (
          <div
            key={day.day}
            className="bg-white sm:shadow-xl rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-bold text-green-600 mb-2 flex items-center gap-2">
              <Landmark className="w-6 h-6 text-green-500" />
              Day {day.day}: {day.title}
            </h2>
            <p className="mb-6 text-gray-700">{day.description}</p>

            {/* Places */}
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              {day.places.map((place, i) => (
                <div
                  key={i}
                  className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white"
                >
                  <Image
                    src={place.image}
                    alt={place.name}
                    width={500}
                    height={300}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-green-500" />
                      {place.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1 flex items-center gap-1">
                      <Ticket className="w-4 h-4 text-green-400" />
                      {place.ticketPrice}
                    </p>
                    <p className="text-sm text-gray-600 mb-1 flex items-center gap-1">
                      <Clock className="w-4 h-4 text-green-400" />
                      {place.timeToCover}
                    </p>
                    <p className="text-sm text-gray-500 mb-3">{place.notes}</p>
                    <a
                      href={place.googleMapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-red-600 font-medium hover:underline text-sm"
                    >
                      <MapPin className="w-4 h-4 text-red-500" />
                      View on Google Maps
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Hotel */}
            <div className="bg-green-50 p-4 rounded-lg flex flex-col sm:flex-row items-center sm:items-start gap-4 shadow-inner">
              <Image
                src={day.hotelStay.image}
                alt={day.hotelStay.name}
                width={140}
                height={90}
                className="rounded-lg object-cover"
              />
              <div>
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <Hotel className="w-5 h-5 text-green-500" />
                  {day.hotelStay.name}
                </h4>
                <p className="text-gray-700">
                  💵 {day.hotelStay.pricePerNight} / night
                </p>
                <a
                  href={day.hotelStay.googleMapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-red-600 hover:underline text-sm"
                >
                  <MapPin className="w-4 h-4 text-red-500" />
                  View Hotel Location
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
