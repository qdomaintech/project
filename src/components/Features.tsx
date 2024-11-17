import { Code, Smartphone, Cpu, Gauge, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: "No-Code Development",
    description: "Build complex applications visually using Bubble.io's intuitive interface"
  },
  {
    icon: Smartphone,
    title: "Native Mobile Apps",
    description: "Create iOS and Android apps without traditional mobile development"
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Leverage AI capabilities with Bolt.new for smarter applications"
  },
  {
    icon: Gauge,
    title: "High Performance",
    description: "Optimized infrastructure ensuring your apps run smoothly at scale"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Built-in security features to protect your data and users"
  },
  {
    icon: Users,
    title: "Collaboration Tools",
    description: "Team features for seamless development workflow"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">Everything you need to build modern applications</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="p-6 rounded-xl border border-gray-100 hover:border-purple-100 hover:shadow-lg transition-all">
                <Icon className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}