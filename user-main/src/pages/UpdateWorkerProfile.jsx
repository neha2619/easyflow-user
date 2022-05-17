import React from 'react'

export const UpdateWorkerProfile = () => {
  return (
    <div>
      <h2 className="page-header">Worker</h2>
      <hr className="featurette-divider" />
      <h4 className="page-header">Update Profile</h4>
      <div className="container">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Name
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Email
            </label>
            <input type="password" className="form-control" id="inputPassword4" />
          </div>

          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label">
              Mobile
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputZip" className="form-label">
              Aadhaar
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              Work Type
            </label>
            <select id="inputState" className="form-select">
            <option selected="">Select</option>
              <option>Carpenter</option>
              <option>Labour</option>
              <option>Maison</option>
              <option>Painter</option>
              <option>Plumber</option>
            </select>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}
