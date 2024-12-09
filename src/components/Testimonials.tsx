import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Sarah M., Business Owner",
    userName: "@SsarahM",
    comment: "Exceptional service and quality! The team transformed our outdated website into a modern, responsive design that truly represents our brand. Their attention to detail and communication throughout the project were outstanding.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "James R., Startup Founder",
    userName: "@jameyjamesR",
    comment:
      "The premium website plan exceeded our expectations. From smooth animations to advanced features, the final product was sleek and user-friendly. Highly recommend this agency for any web development needs!",
  },

  {
    image: "https://github.com/shadcn.png",
    name: "Priya S., Tech Entrepreneur",
    userName: "priya_s",
    comment:
      "We opted for the full-stack web and mobile app package, and it was worth every penny. The web app and mobile app integration is flawless, and the team’s use of the latest technologies was evident in the performance. Amazing work!",
  },
  // {
  //   image: "https://github.com/shadcn.png",
  //   name: "John Doe React",
  //   userName: "@john_Doe3",
  //   comment:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  // },
  // {
  //   image: "https://github.com/shadcn.png",
  //   name: "John Doe React",
  //   userName: "@john_Doe4",
  //   comment:
  //     "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.",
  // },
  // {
  //   image: "https://github.com/shadcn.png",
  //   name: "John Doe React",
  //   userName: "@john_Doe5",
  //   comment:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  // },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        This Landing Page
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
      What Our Clients Say
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
