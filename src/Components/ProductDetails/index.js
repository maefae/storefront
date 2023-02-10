import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  let { id } = useParams();
  let products = useSelector((state) => state.products);

  let theProduct = products.find((product) => product._id === id);

  console.log({ id }, { products });
  return (
    <>
      <h2>Product Details!</h2>
      <img
        style={{ width: "20%" }}
        alt={theProduct}
        src={`https://source.unsplash.com/random?${theProduct}`}
      />
      {theProduct && <h4>{theProduct.name}</h4>}
    </>
  );
};

export default ProductDetails;
