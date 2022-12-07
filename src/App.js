import React, { useState, useEffect } from "react";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [Loading, setloading] = useState(true);
  const [tours, settours] = useState([]);
  let isMounted = true;
  useEffect(() => {
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

    if (isMounted) {
      loadData();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {Loading ? (
        <div className="loading">
          <h1>loading...</h1>
        </div>
      ) : (
        <main>
          <Tours tours={tours} />
        </main>
      )}
    </>
  );
}

export default App;
