import Header from "./components/header/header"
import Navbar from "./components/nav/nav"
import Home from "./components/home/home";
import About from "./components/about/about";
import Qualification from "./components/qualifications/qualifications";
import Members from "./components/members/members";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Projects from "./components/projects/projects";
export default function App() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle1"></div>
      <Header />
      <Navbar />
      <Home />
      <About />
      {/* <Qualification /> */}
      <Projects />
      <Members />
      <Contact />
      <Footer />
    </>
  );
}