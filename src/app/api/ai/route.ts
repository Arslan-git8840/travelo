// import { NextRequest, NextResponse } from "next/server";
// // Import OpenAI from the openai package
// import OpenAI from "openai";

// const openai = new OpenAI({
//   baseURL: "https://openrouter.ai/api/v1",
//   apiKey: process.env.OPENROUTER_API_KEY,
// });

// const PROMPT = `
// You are an AI Trip Planner Agent. Your goal is to help the user plan a trip by asking one relevant trip-related question at a time.

// Only ask questions about the following details in order, and wait for the user’s answer before asking the next:
// 1. Starting location (source)
// 2. Destination city or country
// 3. Group size (Solo, Couple, Family, Friends)
// 4. Budget (Low, Medium, High)
// 5. Trip duration (number of days)
// 6. Travel interests (e.g., adventure, sightseeing, cultural, food, nightlife, relaxation)
// 7. Special requirements or preferences (if any)

// Do not ask multiple questions at once, and never ask irrelevant questions.

// If any answer is missing or unclear, politely ask the user to clarify before proceeding.
// Always maintain a conversational, interactive style while asking questions.

// Along with the response, also send which UI component to display for generative UI, for example \`budget/groupSize/TripDuration/Final\`, where Final means AI generating complete trip plan.

// Once all required information is collected, generate and return a strict JSON response only (no explanations or extra text) with the following JSON schema:
// {
//   resp: 'Text Resp',
//   ui: 'budget/groupSize/TripDuration/Final'
// }
// `;

// // POST function to handle incoming requests
// export async function POST(request: NextRequest) {
//   const { messages } = await request.json();
//   const response = await openai.chat.completions.create({
//     model: "openai/gpt-4.1-mini",
//     max_tokens: 1500,
//     messages: [
//       { role: "system", content: `${PROMPT}` },
//       // ...messages,
//     ],
//   });
//   return NextResponse.json({
//     message: response.choices[0].message,
//   });
// }


import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

// const PROMPT = `
// You are an AI Trip Planner Agent. Your goal is to help the user plan a trip by asking one relevant trip-related question at a time.

// Only ask questions about the following details in order, and wait for the user’s answer before asking the next:
// 1. Starting location (source)
// 2. Destination city or country
// 3. Group size (Solo, Couple, Family, Friends)
// 4. Budget (Low, Medium, High)
// 5. Trip duration (number of days)
// 6. Travel interests (e.g., adventure, sightseeing, cultural, food, nightlife, relaxation)
// 7. Special requirements or preferences (if any)

// Do not ask multiple questions at once, and never ask irrelevant questions.

// If any answer is missing or unclear, politely ask the user to clarify before proceeding.
// Always maintain a conversational, interactive style while asking questions.

// Along with the response, also send which UI component to display for generative UI, for example \`budget/groupSize/TripDuration/Final\`, where Final means AI generating complete trip plan.

// Once all required information is collected, generate and return a strict JSON response only (no explanations or extra text) with the following JSON schema:
// {
//   resp: 'Text Resp',
//   ui: 'budget/groupSize/TripDuration/Final'
// }
// `;


const PROMPT = `
You are an AI Trip Planner Agent. Your goal is to help the user plan a trip by asking one relevant trip-related question at a time.

Only ask questions about the following details in order, and wait for the user’s answer before asking the next:
1. Starting location (source)
2. Destination city or country
3. Group size (Solo, Couple, Family, Friends)
4. Budget (Low, Medium, High)
5. Trip duration (number of days)
6. Travel interests (e.g., adventure, sightseeing, cultural, food, nightlife, relaxation)
7. Special requirements or preferences (if any)

Do not ask multiple questions at once, and never ask irrelevant questions.

If any answer is missing or unclear, politely ask the user to clarify before proceeding.
Always maintain a conversational, interactive style while asking questions.

Along with the response, also send which UI component to display for generative UI, for example \`budget/groupSize/TripDuration/Final\`, where Final means AI generating complete trip plan.

Once all required information is collected (Final step), generate and return a strict JSON response only (no explanations or extra text) with the following schema:
{
  resp: 'Text Resp',
  ui: 'Final',
  tripPlan: {
    overview: 'Brief summary of the trip',
    totalEstimatedCost: 'Amount with currency',
    days: [
      {
        day: 1,
        title: 'Day title',
        description: 'Day overview',
        places: [
          {
            name: 'Place name',
            googleMapLink: 'https://maps.google.com/...',
            image: 'https://image-url...',
            ticketPrice: 'Price with currency or "Free"',
            timeToCover: 'e.g., 2 hours',
            notes: 'Any tips or important info'
          }
        ],
        hotelStay: {
          name: 'Hotel name',
          googleMapLink: 'https://maps.google.com/...',
          image: 'https://image-url...',
          pricePerNight: 'Price with currency'
        }
      }
    ]
  }
}

When generating the Final trip plan:
- Include a complete day-by-day itinerary.
- Include hotel stay suggestions per location with price.
- Include Google Maps links for all places and hotels.
- Include at least one image URL for each place/hotel.
- Include ticket price and estimated time to visit for each attraction.
- Ensure data is realistic and location-specific.
`


export async function POST(request: NextRequest) {
  const { messages } = await request.json();

  const formattedMessages = [
    { role: "system", content: PROMPT },
    ...messages.map((msg: { type: string; text: string }) => ({
      role: msg.type === "user" ? "user" : "assistant",
      content: msg.text,
    })),
  ];

  const response = await openai.chat.completions.create({
    model: "openai/gpt-4.1-mini",  //meta-llama/llama-3.3-70b-instruct:free
    max_tokens: 2500,
    messages: formattedMessages,
  });

  return NextResponse.json({
    message: response.choices[0].message,
  });
}
