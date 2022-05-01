import React, { useEffect } from 'react'

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
const ProductListing = () => {
    const products = useSelector(state => state.products); // get the products from the store
    const dispatch = useDispatch(); // get the dispatch function from the store to dispatch actions 

    const fetchProducts = async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
        .catch(err => console.log(err));
        dispatch(setProducts(res.data));
    }
    useEffect(() => {
        fetchProducts();
    });

console.log("Products :", products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductListing
