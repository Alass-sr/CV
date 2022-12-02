import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h2>Oops ... Cette page n'exite pas !</h2>
        <Link to="">
          <i className="fas fa-home"></i>
          <span> Accueil </span>
        </Link>
      </div>
    </div>
  );
}
