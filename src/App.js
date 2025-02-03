import { useState } from "react";

function App() {
  const [bots, setBots] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:8000/bots")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log("Fetched data:", data);
  //       setBots(data || []); // Ensure bots is always an array
  //     });
  // }, []);
  //
  return <div>App</div>;
}

export default App;
