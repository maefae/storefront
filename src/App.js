import Header from "./Components/Header/header";
import StoreFront from "./Components/Storefront";
import ShoppingCart from "./Components/ShoppingCart";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StoreFront />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
