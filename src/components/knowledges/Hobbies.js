import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3> Intérets </h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Sport</span>
        </li>
        <li className="hobby">
          <i className="fas fa-hiking"></i>
          <span>Randonnée</span>
        </li>
        <li className="hobby">
          <i className="fas fa-seedling"></i>
          <span>Apiculture</span>
        </li>
        <li className="hobby">
          <i className="fas fa-rocket"></i>
          <span>Voyage</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
