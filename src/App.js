import Card from "./Components/Card";
import img1 from "./images/1.jpeg";
import img2 from "./images/2.jpeg";
import img3 from "./images/3.jpeg";
import img4 from "./images/4.jpeg";
import Map from "./Components/Map";
import "./App.css";


const App = () => {
  return (
    <div className="main">
      <Card text="Beautiful Italy" image={img1} />
      <Card text="Beautiful Italy" image={img2} />
      <Card text="Beautiful Italy" image={img3} />
      <Card image={img4} text="Beautiful Italy" />
      <Map />
    </div>
  );
};

export default App;
