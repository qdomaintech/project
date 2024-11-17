import { Sparkles, Rocket, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="h-6 w-6 text-purple-600" />
            <span className="text-sm font-medium text-purple-600">Powered by AI & No-Code</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Build Faster, Scale Better
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Combine the power of Bubble.io and Bolt.new to create stunning web applications
            and mobile apps without writing complex code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
              <Rocket className="h-5 w-5" />
              Start Building
            </button>
            <button className="border border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition-colors flex items-center justify-center gap-2">
              <Zap className="h-5 w-5" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}