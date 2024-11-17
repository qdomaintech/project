import { Menu, X, Code2, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-8 w-8 text-purple-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              TechFusion
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition-colors">How it Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</a>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <a href="#features" className="block py-2 text-gray-600">Features</a>
            <a href="#how-it-works" className="block py-2 text-gray-600">How it Works</a>
            <a href="#pricing" className="block py-2 text-gray-600">Pricing</a>
            <button className="mt-4 w-full bg-purple-600 text-white px-6 py-2 rounded-full">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}