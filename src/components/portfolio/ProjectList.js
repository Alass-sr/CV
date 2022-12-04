import React, { Component } from "react";
import { portfolioData } from "../../data/portfolioData";
import Project from "./Project";

export default class ProjectList extends Component {
  state = {
    projects:portfolioData,

    radios: [
      {id:1, value:"javascript"},
      {id:2, value:"Css"},
      {id:3, value:"react"},

    ]
  };
  render() {
    let {projects, radios} = this.state;

    return (
      <div className="portfolioContent">
        <ul className="radioDisplay">{
          radios.map((radio) => {
            return (
              <li key={radio.id}>
                <input
                type="radio"
                name="radio"
                
                />
              </li>
            )
          })
        }
          
          
            
          
        </ul>

        <div className="projects">
          {
          projects.map(item => {
            return <Project
            key={item.id}
            item={item}
             />;
          })
          }
        </div>
      </div>
    );
  }
}
