import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What services does Webonism offer?",
    answer: "We provide comprehensive web design and development services, including custom website creation, e-commerce solutions, SEO optimization, and website maintenance.",
    value: "item-1",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the complexity of the project. A basic website can take 2-4 weeks, while larger projects may take longer. We'll provide a clear timeline after understanding your requirements.",
    value: "item-2",
  },
  {
    question:
      "Do you offer ongoing website maintenance?",
    answer:
      "Yes, we offer flexible maintenance plans to keep your website updated, secure, and running smoothly, ensuring long-term success.",
    value: "item-3",
  },
  {
    question: "Can you help with SEO and online marketing?",
    answer: "Absolutely! Our team specializes in SEO strategies, content optimization, and digital marketing to improve your site’s visibility and help you reach your target audience.",
    value: "item-4",
  },
  {
    question:
      "Will my website be mobile-friendly?",
    answer:
      "Definitely. Every website we build is fully responsive, ensuring optimal performance and a great user experience across all devices, including smartphones and tablets.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
