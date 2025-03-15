import React from "react";
import countryData from "../api/countryData.json";

const countryFacts = countryData.countries || [];

const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we're proud of
      </h2>

      <div className="gradient-cards">
        {Array.isArray(countryFacts) && countryFacts.length > 0 ? (
          countryFacts.map(({ id, countryName, capital, population, interestingFact }) => (
            <div className="card" key={id}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">Capital:</span> {capital}
                </p>
                <p>
                  <span className="card-description">Population:</span> {population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description">Interesting Fact:</span> {interestingFact}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading country facts...</p>
        )}
      </div>
    </section>
  );
};

export default About;
