import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                US
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              We are here to make great design accessible and delightfull for everyone!!!
              At Webonism, we believe that every business deserves a powerful online presence. Our passion lies in delivering custom web solutions—whether it’s creating dynamic websites, innovative web apps, or unique digital experiences. Our expert team combines creativity with technical expertise to bring your ideas to life, helping you engage your audience and drive growth.


              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
