import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "49",
    description: "Perfect for small projects and MVPs",
    features: [
      "Up to 3 team members",
      "Basic Bubble.io integration",
      "5 AI-powered components",
      "Community support",
      "Basic analytics"
    ]
  },
  {
    name: "Professional",
    price: "99",
    description: "Ideal for growing businesses",
    features: [
      "Up to 10 team members",
      "Advanced Bubble.io features",
      "Unlimited AI components",
      "Priority support",
      "Advanced analytics",
      "Custom domains"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "249",
    description: "For large-scale applications",
    features: [
      "Unlimited team members",
      "Enterprise Bubble.io features",
      "Custom AI model training",
      "24/7 dedicated support",
      "Advanced security features",
      "SLA guarantee"
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the perfect plan for your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`rounded-2xl p-8 ${plan.popular ? 'bg-purple-600 text-white ring-4 ring-purple-200' : 'bg-gray-50'}`}>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`mb-6 ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className={plan.popular ? 'text-purple-100' : 'text-gray-600'}>/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className={`h-5 w-5 ${plan.popular ? 'text-purple-200' : 'text-purple-600'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-full font-semibold transition-colors ${
                plan.popular 
                  ? 'bg-white text-purple-600 hover:bg-gray-100' 
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}