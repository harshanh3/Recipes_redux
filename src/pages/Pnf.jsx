import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'


const Pnf = () => {
  return (
<>
<Header/>
<div className="d-flex flex-column justify-content-center align-items-center vh-100">
  <img
    src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png"
    alt="404 Not Found"
    style={{ width: '600px' }}
  />
  <h1 className="font-weight-bold display-4 mt-4">Page not found</h1>
  <p className="font-weight-semibold mb-2 mt-2">Click the button below to go to the home page</p>
  <Link to="/" className="btn btn-success mt-2">Home</Link>
</div>


</>
  )
}

export default Pnf