const Card = ({image, text}) => {
  return (
    <div>
      <img src={image} alt="stock" />
      <h2>{text}</h2>
    </div>
  );
};

export default Card;
