import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../redux/slices/productSlices";

const Home = () => {
  const dispatch = useDispatch();
  const { allProducts, loading, error } = useSelector((state) => state.products);

  const [CurrentPage, setCurrentPage] = useState(1);
  const productPerpage = 12;
  
  // Change allrecipes to allProducts
  const totalPage = Math.ceil(allProducts?.length / productPerpage);
  const CurrentPageLastProductIndex = CurrentPage * productPerpage;
  const CurrentPageFirstProductIndex = CurrentPageLastProductIndex - productPerpage;
  
  // Use visibleCards instead of allProducts.visibleCards
  const visibleCards = allProducts?.slice(CurrentPageFirstProductIndex, CurrentPageLastProductIndex);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const navigateToNextPage = () => {
    if (CurrentPage !== totalPage) {
      setCurrentPage(CurrentPage + 1);
    }
  };

  const navigateToPrevPage = () => {
    if (CurrentPage !== 1) {
      setCurrentPage(CurrentPage - 1);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Header />
      <div className="container py-5 px-4 mx-auto mt-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {visibleCards?.map((product) => (
            <div key={product.id} className="col">
              <div className="card border rounded shadow">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{product.name}</h5>
                  <h6 className="card-title fw-bold">Cuisine: {product.cuisine}</h6>

                  <Link to={`${product.id}/view`} className="btn btn-success text-white mt-3">
                    View more...
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination  */}
        <div className="text-center text-2xl my-5 mt-20">
          <span onClick={navigateToPrevPage} className='cursor-pointer'>
            <i className="fa-solid fa-backward me-5"></i>
          </span>
          <span>{CurrentPage} of {totalPage}</span>
          <span onClick={navigateToNextPage} className='cursor-pointer'>
            <i className="fa-solid fa-forward me-5 ms-3"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;


    
