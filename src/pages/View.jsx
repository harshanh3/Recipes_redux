import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'



const View = () => {
  const {id} = useParams()
  console.log(id);
   const [product,setrecipes] =useState({})


  useEffect(()=>{
    if(sessionStorage.getItem("allrecipes")){
      const allrecipes = JSON.parse(sessionStorage.getItem("allrecipes"))
      setrecipes(allrecipes?.find(item=>item.id==id))
    }
  },[])
  console.log(product);
  
  
  return (
    <>
    <Header />
<div className="container py-5 mt-5">
  <div className="row align-items-center">
    <div className="col-md-6">
      <img src={product.image} alt="Product Thumbnail" className="img-fluid" style={{ width:'500px'}} />
    </div>
    <div className="col-md-6 px-4">
      <h3>PID: {product.id}</h3>
      <h1 className="display-4 fw-bold">{product.name}</h1>
      <h4 className="text-danger fw-bold fs-2">$ {product.caloriesPerServing}</h4>
      <h4 className="fw-bold">Cuisine: {product.cuisine}</h4>
      {/* Client Reviews */}
      <h3 className="fw-bold mt-4">Rating: {product.rating}</h3>
      <div className="border rounded p-3 mb-3">
        <h5><span className="fw-bold">MealType:</span> {product.mealType}</h5>
        <p><span  className="fw-bold">Ingredients: </span> {product.ingredients}</p>
      </div>
      {/* Action Buttons */}
      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-success">BUY NOW</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default View