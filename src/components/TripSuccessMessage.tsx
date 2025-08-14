import { CheckCircle, ArrowRight } from "lucide-react";

const TripSuccessMessage = ({ tripLink }: string) => {
  return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex flex-col items-center text-center shadow-md">
      <CheckCircle className="w-12 h-12 text-green-600 mb-3" />
      <h2 className="text-xl font-semibold text-green-800 mb-2">
        🎉 Your trip is ready!
      </h2>
      <p className="text-green-700 mb-4 max-w-md">
        We’ve created your personalized trip itinerary. Click the button below to explore your trip details.
      </p>
      <a
        href={tripLink}
        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-medium transition"
      >
        View Trip <ArrowRight className="w-5 h-5" />
      </a>
    </div>
  );
};
export default TripSuccessMessage;