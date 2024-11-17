import { Boxes, Puzzle, Workflow, Zap, Database, Lock } from 'lucide-react';

const integrations = [
  {
    icon: Boxes,
    name: "Bubble.io",
    description: "Visual development platform for web applications"
  },
  {
    icon: Puzzle,
    name: "Bolt.new",
    description: "AI-powered development and deployment"
  },
  {
    icon: Database,
    name: "Database",
    description: "Scalable data storage solutions"
  },
  {
    icon: Workflow,
    name: "Workflows",
    description: "Automated business processes"
  },
  {
    icon: Lock,
    name: "Auth Services",
    description: "Secure authentication systems"
  },
  {
    icon: Zap,
    name: "API Integration",
    description: "Connect with third-party services"
  }
];

export default function Integrations() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Integrations</h2>
          <p className="text-xl text-gray-600">Connect with your favorite tools seamlessly</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{integration.name}</h3>
                </div>
                <p className="text-gray-600">{integration.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}