import AboutMobile from "../mobilePages/AboutMobile";
import Header from "../pageSegments/Header";
import Footer from "../pageSegments/Footer";
import Background from "../pageSegments/Background";
import TextBox from "../content/TextBox";
import Portrait from "../../assets/Circle_Portrait_Border.png";
import Avatar from "@mui/material/Avatar";
import { useMediaQuery } from "react-responsive";

const About = () => {
  //Check to determine if user is on mobile device
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    //Main container
    <div>
      {/* Determine whether desktop or mobile layout should be used */}
      {isMobile ? (
        <AboutMobile />
      ) : (
        <div>
          <Header />

          <div
            className="p-3 text-primary-emphasis container-md"
            style={{
              position: "relative",
              zIndex: 1,
              backgroundColor: "#cccccc",
              backgroundImage:
                "linear-gradient(rgb(63, 67, 87), rgb(82, 128, 199), rgb(63, 67, 87))",
            }}
          >
            <div className="row" style={{ height: 100 }}></div>
            <div className="row">
              <div className="col-8">
                <TextBox
                  title="My name is Garrett Pascoe."
                  text="A recent graduate of Oakland University with a Bachelor of
                  Science degree in Computer Science. I am a fast learner and an
                  excellent problem solver, exactly the kind of person you want
                  working on your next big project. Whether its my ability to
                  make well thought out and impactful decisions when a project
                  is at a standstill or my ability to take up the reigns and
                  lead the group when management is unavailable, I excell at
                  keeping the ball rolling on a project and making meaningful
                  progress towards its completion where others may feel
                  uncertain and willing to stall."
                />
              </div>
              <div className="col-4">
                <Avatar
                  src={Portrait}
                  alt="Portrait"
                  sx={{ width: 300, height: 300 }}
                />
              </div>
            </div>
            <div className="row" style={{ height: 100 }}></div>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-10">
                <TextBox
                  title="Problem Solving"
                  text="One of my greatest strong points. I have always been a fan of
                  puzzles and problem solving. I have used this interest in
                  problem solving to my advantage in programming. By viewing
                  every problem in a project as a puzzle that needs to be
                  solved, I am able to find fun and intrigue in even the more
                  mundane side of coding, allowing me to keep focused on the
                  problem at hand until its completion. This holds especially
                  true for creating algorithms, which was a particular interest
                  of mine through my studies. This has recently leant to a
                  fascination with machine learning, which I have been fervently
                  researching and practicing since my graduation. Not only am I
                  interested in the tools to create machine learning projects
                  like tensorflow and pytorch, but also in the mathematical
                  principles that go into making them function. I am looking to
                  obtain an in-depth understanding of machine learning, not just
                  the surface level skills required to build models."
                />
              </div>
            </div>
            <div className="row" style={{ height: 100 }}></div>
            <div className="row">
              <div className="col-10">
                <TextBox
                  title="Work Experience"
                  text="When I graduated high school, I immediantly sought out a part
                  time job to work as I studied in college part time. The first
                  job I worked was at a department store called Buy Buy Baby as
                  a cashier. However, I had many more duties than just
                  cashiering. I handled returns and customer service, grabbed
                  carts, stocked, performed janitorial tasks, built furniture,
                  loaded furniture into cars, and occasionally served as a sales
                  clerk to inform customers on all the various carseats and
                  strollers we sold. It was honestly like working five jobs at
                  once, but since it was my first job I assumed every job was
                  just as hectic and stressful. Despite the pressure, I worked
                  that job for five years. Since then, I have worked a more
                  physically taxing job offloading trucks at Meijer. It has its
                  own difficulties, but compared to my first job, it feels like
                  a breeze. After working such a stressful job, everything else
                  comes across easy in comparison."
                />
              </div>
              <div className="col-2"></div>
            </div>
            <div className="row" style={{ height: 100 }}></div>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-10">
                <TextBox
                  title="Hobbies and Interests"
                  text="My interest in video games, Legos, and building/painting scale
                  minatures led me to being interested in computer programming
                  rather naturally. I've always gravitated to hobbies that keep
                  me thinking and/or allow me to flex my creativity. I enjoy
                  video games that are more strategic. I like being able to
                  think things through and find the most optimal build for a
                  given situation. I prefer to find these strategies myself than
                  look up a guide online. What's the point of a decision in a
                  video game if you didn't come to the solution yourself? In the
                  art department, I became quite skilled in painting Warhammer
                  40k figures. Not only have I placed first in painting
                  competitions, I've been commissioned to paint models to a
                  professional standard."
                />
              </div>
            </div>
            <div className="row" style={{ height: 100 }}></div>
          </div>
          <Footer />
          <Background />
        </div>
      )}
    </div>
  );
};

export default About;
