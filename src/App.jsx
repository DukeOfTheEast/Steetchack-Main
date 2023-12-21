import "./App.css";
import Logo from "../src/images/steet-logo.png";

function App() {
  return (
    <>
      <div className="flex justify-between bg-navDark md:px-20 py-3 sm:px-8">
        <img src={Logo} alt="" />
        <button className="md:hidden text-3xl text-white">&#9776;</button>
      </div>
    </>
  );
}

export default App;
