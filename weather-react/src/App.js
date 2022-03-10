import React from "react";
const api = {
  key: "918190d5934b22c049be91f4e852fe11",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text"
            type="text"
            className="search-bar"
            placeholder="Buscar..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
