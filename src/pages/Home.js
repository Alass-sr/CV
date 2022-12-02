import React from "react";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1> Alassane Sarr</h1>
          <h2> Développeur Web Junior</h2>
          <div className="pdf">
            <a href="./media/CV_Sarr_Alassane.pdf" target="_blank"> Télécharger CV </a>
          </div>
        </div>
      </div>
    </div>
  );
}
