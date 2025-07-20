import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How does CuriousCoreAI personalize strategies for businesses?",
      answer: "At CuriousCoreAI, we start with a deep dive into your business goals, target audience, and competition. Using this insight, we create a custom strategy that aligns with your objectives and delivers measurable results through AI-driven and data-informed methods."
    },
    {
      question: "What automation tools does CuriousCoreAI use to help businesses grow?",
      answer: "We leverage state-of-the-art tools for email marketing, lead generation, and client appointment scheduling. Our team integrates these tools seamlessly into your business workflows to save you time and increase efficiency."
    },
    {
      question: "Can CuriousCoreAI manage multi-channel campaigns?",
      answer: "Absolutely! CuriousCoreAI specializes in creating and managing cohesive campaigns across platforms like social media, email, advertising, and more. Our goal is to ensure consistent branding and maximize your ROI across all digital channels."
    },
    {
      question: "How do I get started with CuriousCoreAI's services?",
      answer: "Getting started is simple! Contact us via email, phone, or use the \"Request a Consultation\" button on our website. We'll schedule a free consultation to understand your needs and recommend the best solution."
    },
    {
      question: "Do CuriousCoreAI offer one-time services or ongoing packages?",
      answer: "We offer both! CuriousCoreAI provides flexible options, including one-time consultations for immediate needs and ongoing packages for comprehensive, long-term support tailored to your business goals."
    },
    {
      question: "How will I receive campaign performance reports and analytics?",
      answer: "CuriousCoreAI provides detailed, easy-to-understand reports that highlight key metrics such as website traffic, engagement rates, conversions, and ROI. We also offer regular review meetings to discuss campaign performance and outline next steps for improvement."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Answers to common questions about CuriousCoreAI and our marketing services.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-6 shadow-sm hover:shadow-card transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 pt-2 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};