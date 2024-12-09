import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Basic Website",
    popular: 0,
    price: 15,
    description:
      "Our Basic Website Plan is perfect for startups and small businesses looking for a professional online presence. Get a sleek, user-friendly website designed to showcase your brand and engage your audience.",
    buttonText: "Get Started",
    benefitList: [
      "Responsive Design",
      "SEO Optimized",
      "Upto 5 pages",
      "Community support",
    ],
  },
  {
    title: "Premium Websites",
    popular: 1,
    price: 45,
    description:
      "Our Premium Website Plan is designed for businesses seeking a cutting-edge online presence. We use modern frameworks like React.js and Next.js to build high-performance, feature-rich websites, enhanced with sleek animations and the latest web technologies for a truly engaging user experience.",
    buttonText: "Contact US",
    benefitList: [
      "Advanced Web Technologies",
      "Dynamic Animations",
      "Custom Functionality",
      "Priority support",
    ],
  },
  {
    title: "Full Stack Development and App Development",
    popular: 0,
    price: 75-150,
    description:
     "Our Full-Stack Web & Mobile App Development Plan is tailored for businesses and startups looking for complete digital solutions. From robust web applications to sleek mobile apps, we deliver high-quality, end-to-end development using cutting-edge technologies to bring your vision to life.",
    buttonText: "Contact US",
    benefitList: [
      "Web & Mobile Integration",
      "Full-Stack Development",
      "Cross-Platform Compatibility",
      "Priority support",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Get
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Unlimited{" "}
        </span>
        Access
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
      "Transparent pricing tailored to deliver maximum value for your investment."
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground"> </span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
