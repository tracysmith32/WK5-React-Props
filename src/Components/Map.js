import Card from "./Card";
import img1 from "../images/1.jpeg";
import img2 from "../images/2.jpeg";
import img3 from "../images/3.jpeg";
import img4 from "../images/4.jpeg";

const Map = () => {
  const arr = [
    { image: img1, text: "Beautiful Italy" },
    { image: img2, text: "Beautiful Italy" },
    { image: img3, text: "Beautiful Italy" },
    { image: img4, text: "Beautiful Italy" },
  ];
  return (
    <div className="main">
      {arr.map((item, index) => {
        return <Card key={index} image={item.image} text={item.text} />;
      })}
    </div>
  );
};

export default Map;
