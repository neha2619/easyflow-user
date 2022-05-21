import { Axios } from 'axios'
import React from 'react'
import { useState } from 'react'



export const Login = () => {
    const url = "http://localhost:5001/api/workers/register"
    const [data, setData] = useState({
        name: "",
        mobile: "",
        email: "",
        type: "",
        password: ""
        

    })
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            workerName: data.name,
            workerMobile: data.mobile,
            workerMail: data.email,
            workerType: data.type,
            workerpass: data.password,
            ratings:0
        })
            .then(res => {
                console.log(res.data)
            })
    }
    return (
        <div>
            <form onSubmit={(e) => submit(e)}>
                <div className="col-12">
                    <label htmlFor="inputName" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        onChange={(e) => handle(e)}
                        value={data.name}

                    />
                </div>
                <div className="col-12">
                    <label htmlFor="inputMobile" className="form-label">
                        Mobile
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        onChange={(e) => handle(e)}
                        value={data.mobile}

                    />
                </div>

                <div className="col-12">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        onChange={(e) => handle(e)}
                        value={data.email}

                    />

                </div>
                <div className="col-12">
                    <label htmlFor="validationCustom04" className="form-label">
                        Type
                    </label>
                    <select className="form-select" id="type4" required="">
                        <option selected="" disabled="" onChange={(e) => handle(e)} value={data.type}>
                            Choose...
                        </option>
                        <option>Plumber</option>
                        <option>Painter</option>
                        <option>Carpenter</option>
                        <option>Masion</option>
                        <option>Labour</option>

                    </select>
                    <div className="invalid-feedback">Please select a valid state.</div>
                </div>



                <div className="col-12">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        onChange={(e) => handle(e)}
                        value={data.password}
                    />
                </div>
                <div className='col-12 my-4' >
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
