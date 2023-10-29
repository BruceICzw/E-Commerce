import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import './index.css'
//DAATA STORE
import products from './db/data'
import Card from "./components/Card";
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  //input filter
  const [query, setQuery] = useState("")

  const handleInputChange = event => {
    setQuery(event.target.value)
  }


  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  // ---------------Radio Filters-----------------
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }


  // ----------------Buttons Filter-----------------
  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }



  // ------------MAIN Function--------------
  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //filtering input items
    if (query) {
      filteredData = filteredItems;
    }

    //Seleccted Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}

        />


      ))
  }
  const result = filteredData(products, selectedCategory, query);
  return <>
    <Sidebar handleChange={handleChange} />
    <Navigation handleInputChange={handleInputChange} />
    <Recommended handleClick={handleClick} />
    <Products result={result} />
  </>
}

export default App;
