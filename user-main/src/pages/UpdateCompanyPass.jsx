import React from 'react'

export const UpdateCompanyPass = () => {
  return (
    <div>
            <h2 className="page-header">Company</h2>
            <hr className="featurette-divider" />
            <h4 className="page-header">Update Profile</h4>
            <div className="container">
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">
                            Password
                        </label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="inputEmail4" className="form-label">
                            Confirm Password
                        </label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-12">

                        <button type="submit" className="btn btn-primary">
                            Update Password
                        </button>

                    </div>
                </form>
            </div>
        </div>
  )
}
