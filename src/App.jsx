import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { History1 } from "./components/history1";
import { History2 } from "./components/history2";
import { History3 } from "./components/history3";
import { Operations } from "./components/operations";
import { Business } from "./components/business";
import { Business1 } from "./components/business1";
import { Vision } from "./components/vision";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <History1 data={landingPageData.History1} />
      <History2 data={landingPageData.History2} />
      <History3 data={landingPageData.History3} />
      <Operations data={landingPageData.Operations} />
      <Business data={landingPageData.Business} />
      <Business1 data={landingPageData.Business1} />
      <Vision data={landingPageData.Vision} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
