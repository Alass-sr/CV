import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

export default class Languages extends Component {
  state = {
    languages: [
      {id: 1, value:"Javascript", xp:0.8},
      {id: 2, value:"Css", xp:0.8},
    ],

    frameworks: [
        {id:1, value:"React", xp:0.7},
        {id:2, value:"Bootstrap", xp:0.5},
        {id:3, value:"Sass", xp:0.8},
        {id:4, value:"Material UI", xp:0.5}
    ]

  };
  render() {
    let {languages, frameworks} = this.state;


    return (
        <div className="languagesFrameworks">
            <ProgressBar
            languages={languages}
            className="languagesDisplay"
            title="languages" 
            />
            <ProgressBar
            languages={frameworks}
             className="frameworksDisplay"
            title="frameworks & librairies" />
        </div>
    );
  }
}
