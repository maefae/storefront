import Categories from "./Components/Categories/categories";
import Header from "./Components/Header/header";
import Products from "./Components/Products/products";
import SimpleCart from "./Components/SimpleCart/simpleCart";

const App = () => {
  return (
    <>
      <Header />
      <Categories />
      <Products />
      <SimpleCart />
    </>
  );
};

export default App;
