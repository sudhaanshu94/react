import { useState } from "react";
import './App.css';

function App() {
  const [color, setColor] = useState("olive");

  const colors = ["red", "blue", "green", "yellow", "purple", "black", "gray", "pink"];

  return (
    <div className="w-full h-screen duration-200 flex-col justify-center items-center" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-9 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-3 rounded-lg">
          {colors.map((col) => (
            <button 
              key={col}
              className={`w-10 h-10 rounded-full`} 
              style={{ backgroundColor: col }} 
              onClick={() => setColor(col)}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
