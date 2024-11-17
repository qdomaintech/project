import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does the integration between Bubble.io and Bolt.new work?",
    answer: "Our platform seamlessly connects Bubble.io's visual development capabilities with Bolt.new's AI-powered tools. This integration allows you to design your application visually while leveraging AI for enhanced functionality and automation."
  },
  {
    question: "Can I migrate my existing Bubble.io application?",
    answer: "Yes! We provide comprehensive migration tools and support to help you transfer your existing Bubble.io applications to our platform, ensuring a smooth transition without losing any functionality."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer multiple tiers of support, including community forums, documentation, email support, and dedicated support teams for enterprise customers. Our goal is to ensure you have the help you need when you need it."
  },
  {
    question: "How secure is the platform?",
    answer: "Security is our top priority. We implement industry-standard encryption, regular security audits, and compliance with major security protocols. Your data and applications are protected with enterprise-grade security measures."
  },
  {
    question: "Can I scale my application as my user base grows?",
    answer: "Absolutely! Our infrastructure is built to scale automatically with your needs. Whether you have 100 or 100,000 users, the platform adjusts resources to maintain optimal performance."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about our platform</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-left">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-purple-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-6 bg-gray-50 rounded-b-lg mt-[-8px]">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}