import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./components/Gallery";
//import MaterialTab from "./MaterialTab";
// import Tabs from "./Tabs";

function App() {
  return (
    <div data-testid="app" className="App">
      {/* <Tabs /> */}
      {/* <MaterialTab /> */}
      <Gallery />
    </div>
  );
}

export default App;
