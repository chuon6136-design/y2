import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import honoLogo from "./assets/hono.svg";
import "./App.css";
import myImage from "./assets/file_00000000c2207208a574fa406f7e452a.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <img src={myImage} alt="Y2 Logo" style={{ width: "200px" }} />
        <h1>កម្មវិធី Y2</h1>
      </div>

      <div style={{ textAlign: "center" }}>
        <button onClick={() => setCount((count) => count + 1)}>
          ចំនួនគឺ {count}
        </button>
      </div>
    </>
  );
}

export default App;
