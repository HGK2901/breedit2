import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Content from "../Components/Content";
import CTA from "../Components/CTA";
import Gallery from "../Components/Gallery";
import Blog from "../Components/Blog";
import Testinomials from "../Components/Testinomials";
import Statistics from "../Components/Statistics";
import Team from "../Components/Team";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
// import { Router } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Your app or component */}
      <Navbar />
      <Hero />
      <Features />
      <Content />
      <CTA />
      <Gallery />
      <Blog />
      <Testinomials />
      <Statistics />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};
export default Home;
