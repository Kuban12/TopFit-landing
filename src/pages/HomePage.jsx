import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header";
import Direction from "../components/Directions";
import Branches from "../components/Branches";
import Stuff from "../components/stuff/Stuff";
import Map from "../components/Map/Map";
import Footer from "../components/Footer";

import Video from "../videos/headerVideo.webm";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <video width="100%" muted autoPlay loop>
        <source src={Video} />
      </video>
      <Navbar />
      <Header />
      <Direction />
      <Branches />
      <Map />
      <Stuff />
      <Footer />
    </>
  );
};

export default HomePage;
