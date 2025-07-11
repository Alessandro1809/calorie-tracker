import type { Features } from "../types";

interface FeaturesCardProps {
    features: Features[];
}

export const FeaturesCard = ({ features }: FeaturesCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="opacity-90 bg-gradient-to-br from-orange-500 to-purple-700 backdrop-blur-lg hover:bg-black/90 hover:opacity-100 transition-opacity duration-500 hover:cursor-pointer p-6 rounded-lg shadow-lg shadow-slate-300/40">
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.name}</h3>
                <p className="text-gray-200">
                  {feature.description}
                </p>
              </div>
            ))}
    </div>
  )
}
