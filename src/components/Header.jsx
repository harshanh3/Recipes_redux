import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlices'


const Header = () => {
  const dispatch = useDispatch()
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top py-3">
  <div className="container">
    <Link className="navbar-brand text-white fw-bold fs-4" to="/">
    <i class="fa-solid fa-shop fa-2x me-1"></i>  RecipeList
    </Link>
    <div className="collapse navbar-collapse justify-content-end">
      <ul className="navbar-nav">
        {/* Search Bar */}
        <li className="nav-item me-3">
          <input onChange={e => dispatch(searchProduct(e.target.value.toLowerCase()))}
            className="form-control rounded"
            style={{ width: '300px' }}
            type="text"
            placeholder="Search Recipes by its Cuisine"
          />
        </li>
        <i class="fa-solid fa-user fs-3 text-white ms-5"></i>

      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header