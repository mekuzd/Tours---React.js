import React, { useState, useEffect } from "react";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [Loading, setloading] = useState(true);
  const [tours, settours] = useState([]);

  const removetour = (id) => {
    let Newtour = tours.filter((tour) => {
      return tour.id !== id;
    });
    settours(Newtour);
  };
  let isMounted = true;
  const loadData = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      settours(tours);
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (isMounted) {
      loadData();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  if (tours.length == 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={loadData}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      {Loading ? (
        <div className="loading">
          <h1>loading...</h1>
        </div>
      ) : (
        <main>
          <Tours tours={tours} removetour={removetour} />
        </main>
      )}
    </>
  );
}

export default App;
