//import "./App.css";
import RandomMove from "./components/randomMove";

function App() {
  return (
    <>
      <div className="bg-cyan-50 max-w-screen h-screen">
        <div className="flex justify-center">
          <RandomMove />
        </div>
      </div>
    </>
  );
}

export default App;
