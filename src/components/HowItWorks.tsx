import { Workflow, AppWindow, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Workflow,
    title: "Design Your App",
    description: "Use Bubble.io's visual designer to create your app's interface and workflow"
  },
  {
    icon: AppWindow,
    title: "Build Landing Page",
    description: "Create a stunning landing page with Bolt.new's AI-powered development tools"
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description: "Deploy your application and scale with confidence using our infrastructure"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Simple steps to bring your idea to life</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}