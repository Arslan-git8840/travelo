import React from "react";
import { DollarSign } from "lucide-react";

type AIResponse = {
  resp: string;
  ui: string;
};

interface BudgetSelectorProps {
  aiResponse: AIResponse;
  onSelect: (value: "low" | "medium" | "high") => void;
}

export const BudgetSelector: React.FC<BudgetSelectorProps> = ({
  aiResponse,
  onSelect
}) => {
  if (aiResponse.ui !== "budget") return null;

  const budgets = [
    { label: "Low", icon: "💰", value: "low" },
    { label: "Medium", icon: "💵", value: "medium" },
    { label: "High", icon: "💎", value: "high" },
  ];

  return (
    <div className="p-4 rounded-xl border bg-white shadow-md w-full max-w-md">
      <p className="mb-3 text-gray-700">{aiResponse.resp}</p>
      <div className="flex gap-4">
        {budgets.map((b: any) => (
          <button
            key={b.value}
            onClick={() => onSelect(b.value)}
            className="flex flex-col items-center p-4 border rounded-lg hover:bg-green-100 transition"
          >
            <span className="text-2xl">{b.icon}</span>
            <span className="mt-1 font-medium">{b.label} Budget</span>
          </button>
        ))}
      </div>
    </div>
  );
};
