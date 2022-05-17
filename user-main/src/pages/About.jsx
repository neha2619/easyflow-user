import React from 'react'

export const About = () => {
    return (
        <div>
            <h2 className="page-header">About Us</h2>
            <hr className="featurette-divider" />
            <div className="container my-4">
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">
                            First featurette heading.{" "}
                            <span className="text-muted">It’ll blow your mind.</span>
                        </h2>
                        <p className="lead">
                            Some great placeholder content for the first featurette here. Imagine some
                            exciting prose here.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img class="bd-placeholder-img" width="400" height="350" src="https://source.unsplash.com/300x100/?company,worker" alt="..." />{" "}
                    </div>
                </div>
                <hr className="featurette-divider" />

                <div className="row featurette my-4">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1">
                            Oh yeah, it’s that good.{" "}
                            <span className="text-muted">See for yourself.</span>
                        </h2>
                        <p className="lead">
                            Another featurette? Of course. More placeholder content here to give you
                            an idea of how this layout would work with some actual real-world content
                            in place.
                        </p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img class="bd-placeholder-img" width="400" height="350" src="https://source.unsplash.com/300x100/?company,worker" alt="..." />{" "}

                    </div>

                </div>
                <hr className="featurette-divider" />
                <div className="row featurette my-4">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">
                            And lastly, this one. <span className="text-muted">Checkmate.</span>
                        </h2>
                        <p className="lead">
                            And yes, this is the last block of representative placeholder content.
                            Again, not really intended to be actually read, simply here to give you a
                            better view of what this would look like with some actual content. Your
                            content.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img class="bd-placeholder-img" width="400" height="350" src="https://source.unsplash.com/300x100/?company,worker" alt="..." />{" "}

                    </div>
                </div>
                <hr className="featurette-divider" />


            </div>
            <h2 className="page-header">Contact Us</h2>
            <hr className="featurette-divider" />
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
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">
                            Contact
                        </label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputState" className="form-label">
                            Type
                        </label>
                        <select id="inputState" className="form-select">
                            <option selected="">Choose</option>
                            <option>Worker</option>
                            <option>Company</option>
                        </select>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Write Here
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            defaultValue={""}
                        />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            Send
                        </button>
                    </div>
                </form>

            </div>





        </div>
    )
}
