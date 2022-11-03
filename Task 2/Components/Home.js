import React from "react";
import "./Home.css";

export default function Home({ getData }) {
  return (
    <section className="home">
      <div className="content">
        <p>
          <header>
            <center>
              <h3>
                <span>CREATE REACT APP</span>
              </h3>
            </center>{" "}
          </header>
          Click the button below To Get user's information.. <br />
          <button onClick={getData}>Get Data</button>
        </p>
      </div>
    </section>
  );
}
