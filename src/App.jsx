import { useState, useEffect } from "react";
import "./App.css";
import clock from "/clock.png";
function App() {
  // *time
  const [styles, setStyle] = useState([{}, {}, {}]);
  useEffect(() => {
    console.log(new Date().getHours());
    setInterval(() => {
      const date = new Date();
      let ss = date.getSeconds() * 6;
      let mm = date.getMinutes() * 6;
      let hh = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();

      setStyle(() => {
        return [
          { transform: `rotateZ(${hh * 30}deg)` },
          { transform: `rotateZ(${mm}deg)` },
          { transform: `rotateZ(${ss}deg)` },
        ];
      });
    });
  }, []);
  return (
    <div className='App'>
      <div className='blob blob-1'></div>
      <div className='blob blob-2'></div>
      {/* <div className='blob blob-3'></div> */}

      <div className='clock'>
        <img src={clock} alt='' />
        <div style={styles[0]} className='hr' id='hr'></div>
        <div style={styles[1]} className='min' id='min'></div>
        <div style={styles[2]} className='sec' id='sec'></div>
      </div>
    </div>
  );
}

export default App;
