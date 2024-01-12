import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Skill from "./Components/Skills/Skill";
import Works from "./Components/Works/Works";
import Contactus from "./Components/ContactUs/Contactus";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skill />
      <Works />
      <Contactus />
      <Footer />
    </div>
  );
};

export default App;
