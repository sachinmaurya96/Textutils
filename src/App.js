import Navbar from "./components/Navbar";
import Main from "./components/Main";
import './App.css';

const App = () => {
  return (
    <>
      <Navbar title="Textutils"/>
      <div className="container my-3">
      <Main heading="Enter the text for enalyze"/>
      </div>
    </>
  );
};
export default App