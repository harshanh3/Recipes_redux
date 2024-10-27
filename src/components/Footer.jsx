import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-secondary mt-5 py-4">
  <div className="container">
    <div className="row text-center text-md-start">
      {/* Column 1 */}
      <div className="col-md-3 mb-4">
        <h5 className="fw-bold text-dark">RecipeList</h5>
        <p className="text-muted">Learn more about our company and team.</p>
      </div>
      {/* Column 2 */}
      <div className="col-md-3 mb-4">
        <h5 className="fw-bold text-dark">Contact</h5>
        <p className="text-muted mb-1">Email: contact@company.com</p>
        <p className="text-muted">Phone: +1 234 567 890</p>
      </div>
      {/* Column 3 */}
      <div className="col-md-3 mb-4">
        <h5 className="fw-bold text-dark">Follow Us</h5>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
          <i className="fab fa-facebook fa-lg"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
          <i className="fab fa-twitter fa-lg"></i>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-dark">
          <i className="fab fa-instagram fa-lg"></i>
        </a>
      </div>
      {/* Column 4 */}
      <div className="col-md-3 mb-4">
        <form className="d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search..."
          />
          <button type="submit" className="btn btn-info text-white">
            Search
          </button>
        </form>
      </div>
    </div>
    <hr className="my-4" />
    {/* Footer Bottom */}
    <div className="text-center">
      <p className="mb-0 text-muted">© 2024 Recipe. All Rights Reserved.</p>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer