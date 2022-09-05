import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import getproduct from "./action/product";
import getcategory from "./action/category";

import Product from "./components/product";
import Navbar from "./components/navbar";
import Notfound from "./components/notfound";
import ProductDetail from "./components/productdetail";
import Login from "./components/login";
import ProductList from "./components/productlist";
import CategorytList from "./components/categorylist";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LazyTestLazy = React.lazy(() => import("./components/testlazy"));

function App() {
  //Khi load lại trang lấy dữ liệu từ Redux luôn
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getproduct());
    dispatch(getcategory());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/products/admin-product-list" element={<ProductList />} />
        <Route
          path="/category/admin-category-list"
          element={<CategorytList />}
        />

        <Route
          path="/test-lazy"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <LazyTestLazy />
            </React.Suspense>
          }
        />
        {/* Để cuối */}
        <Route path="*" element={<Notfound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;