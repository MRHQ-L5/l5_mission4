import React, { useState, useEffect } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const [query, setQuery] = useState('');
  const [filteredQuery, setFilteredQuery] = useState(''); 

  useEffect(() => {
    const punctuations = /[!"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~-]+/g;
    
    setFilteredQuery(query.replace(punctuations, ''));
  }, [query])

  function redirectPage() {
    alert(`You've successfully sent this query: ${filteredQuery}`);
  }

  function submitQuery() {

    const body = {
      pack: filteredQuery
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    };

    fetch("http://localhost:4000/submit_query", requestOptions)
      .then((response) => response.text())
      .then((result) => redirectPage())
      .catch((error) => console.log("error", error));
  }
  
  return (
    <section className="hero_section">
      <div className="search_bar">
        <input className="search_input" id="input" type="text" value={query} onChange={e => setQuery(e.target.value)}></input>
        <button className="search_button" onClick={submitQuery}>SEARCH</button>
      </div>
    </section>
  );
}
