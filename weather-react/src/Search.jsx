import React, { useState } from "react";
const api = {
    key: "918190d5934b22c049be91f4e852fe11",
    base: "http://api.openweathermap.org/data/2.5/"
  }

const [query, setQuery] = useState('');
const [weather, setWeather] = useState({});

const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result)
      });
    }
  }

<div className="search-box">
          <input type="text"
            className="search-bar"
            placeholder="Buscar..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>

export default Search;