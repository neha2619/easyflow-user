import React from 'react'

export const WorkerSendRequest = () => {
  return (
    <div>
      <h2 className="page-header">Worker</h2>
      <hr className="featurette-divider" />
      <h4 className="page-header">Send Request</h4>
      <div className="container">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="validationCustom01" required=""/>
            <div class="valid-feedback">
      Looks good!
    </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              Mobile
            </label>
            <input type="text" className="form-control" id="validationCustom01" required="" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
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
          <hr className="featurette-divider" />
          <h5>Preffered Location</h5>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              City
            </label>
            <select id="inputState" className="form-select">
              <option selected="">Select</option>
              <option>Lucknow</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              District
            </label>
            <select id="inputState" className="form-select">
              <option selected="">Select</option>
              <option>Lucknow</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              Area
            </label>
            <select id="inputState" className="form-select">
              <option selected="">Select</option>
              <option>Aashiyana</option>
              <option>Aishbagh</option>
              <option>Amar Saheed Path</option>
              <option>Alambagh</option>
              <option>Aliganj</option>
              <option>Anand Nagar</option>
              <option>Amausi</option>
              <option>Aminaabad</option>
              <option>Balaganj</option>
              <option>Banthara</option>
              <option>Bakshi ka Talab</option>
              <option>Bijnaur</option>
              <option>Butler Colony</option>
              <option>Charbagh</option>
              <option>Chinhat</option>
              <option>Civil Lines</option>
              <option>Daliganj</option>
              <option>Gomti Nagar</option>
              <option>Hazaratganj</option>
              <option>Hussainganj</option>
              <option>IIM Road</option>
              <option>Indira Nagar</option>
              <option>Jal Vayu Vihar</option>
              <option>Jankipuram</option>
              <option>Kanpur Road</option>
              <option>Kursi Road</option>
              <option>Lalbagh</option>
              <option>Lucknow Cantonment</option>
              <option>Mahanagar</option>
              <option>Nirala Nagar</option>
              <option>Nishatganj</option>
              <option>Rajajipuram</option>
              <option>Rajendra Nagar</option>
              <option>Ruchi Khand</option>
              <option>Sapru Marg</option>
              <option>Sarojini Nagar</option>
              <option>Singar Nagar</option>
              <option>South City</option>
              <option>Telibagh</option>
              <option>Utrethiya</option>
              <option>Vibhuti Khand</option>
              <option>Vrindavan Yojana</option>


            </select>
          </div>
          <div className="col-12 my-4">
            <button type="submit" className="btn btn-primary">
              Send Request
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}
