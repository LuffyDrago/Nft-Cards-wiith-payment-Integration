import UsingHooks from "./UsingComponent";

function Item({ data }) {
  //   const  = process.env.REACT;
  return (
    <div className="rows">
      {data.map((value) => {
        const { id, image, title, description, price } = value;
        return (
          <div className="wrappers" key={id}>
            <div className="cards">
              <img
                src={image}
                alt="imgaes"
                className="img-fluid"
                style={{ height: "300px" }}
              />
              <h3>{title}</h3>
              <p>{description}</p>
              <h5>{price}</h5>
              <UsingHooks />
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Item;
