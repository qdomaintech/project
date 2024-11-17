import { Rocket, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8">
            <Rocket className="h-5 w-5" />
            <span className="text-sm font-medium">Get Started in Minutes</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Development Process?
          </h2>
          
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of developers who are building faster and scaling better with our platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full hover:bg-purple-50 transition-colors flex items-center justify-center gap-2 font-semibold">
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}