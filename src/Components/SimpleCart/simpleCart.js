import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../store/actions";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  return (
    <>
      {cart.map((product, index) => (
        <p key={`cart-${index}`}>
          {product.name}
          <Button variant="text" onClick={() => dispatch(removeItem(product))}>
            add Item
          </Button>
        </p>
      ))}
    </>
  );
};
export default Cart;
