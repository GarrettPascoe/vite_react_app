import HomeMobile from "../mobilePages/HomeMobile";
import Header from "../pageSegments/Header";
import Footer from "../pageSegments/Footer";
import Background from "../pageSegments/Background";
import TextBoxWithButton from "../content/TextBoxWithButton";
import TextBox from "../content/TextBox";
import Portrait from "../../assets/Circle_Portrait_Border.png";
import Avatar from "@mui/material/Avatar";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  //Check to determine if user is on mobile device
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    //Main container
    <div>
      {/* Determine whether desktop or mobile layout should be used */}
      {isMobile ? (
        <HomeMobile />
      ) : (
        <div>
          {/* Header also contains the Navbar component */}
          <Header />

          {/* Container for the body content. Size is determined by the contents. */}
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
            {/* Formatting is done mostly through Bootstrap's grid system */}
            <div className="row" style={{ height: 100 }} />
            <div className="row">
              <div className="col-7">
                {/* Textboxes are made using Material UI's Paper component and use their elevation system */}
                <TextBox
                  title="Welcome to My Homepage"
                  text="I am Garrett Pascoe, a recent graduate from Oakland
                      University with a strong interest in algorithms, machine
                      learning, neural networks, and other computer science
                      related topics. I built this website not only to showcase
                      my portfolio, but to be a part of it. The frontend is a React
                      typescript project hosted on Hostinger. The backend is a Django
                      app deployed to a Microsoft Azure web server using a Postgresql
                      database."
                />
              </div>
              <div className="col-5">
                <Avatar
                  src={Portrait}
                  alt="Portrait"
                  sx={{ width: 300, height: 300 }}
                />
              </div>
            </div>
            <div className="row" style={{ height: 100 }} />
            <TextBoxWithButton
              title="n/a"
              text="Visit my About page in order to learn more about
                    me and gain insight into my thought processes."
              butLink="/About"
              butName="Go to About Page"
              icon={[]}
            />
            <div className="row" style={{ height: 100 }} />
            <TextBoxWithButton
              title="n/a"
              text="Visit my Resume page for an overview of my skills
                    and qualifications."
              butLink="/Resume"
              butName="Go to Resume Page"
              icon={[]}
            />
            <div className="row" style={{ height: 100 }} />
            <TextBoxWithButton
              title="n/a"
              text="Visit my portfolio page for a brief overview of my
                    projects with links for more in-depth explainations."
              butLink="/Portfolio"
              butName="Go to Portfolio Page"
              icon={[]}
            />
            <div className="row" style={{ height: 100 }} />
          </div>
          {/* Footer contains links, contact information, and a form to submit a visitor's contact information
      to my Postgresql database connected to my Django backend hosted as a Azure web app */}
          <Footer />
          {/* Background image repeats in both x and y directions and fills the original container. */}
          <Background />
        </div>
      )}
    </div>
  );
};

export default Home;
