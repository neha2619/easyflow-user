import React from 'react'
import { useState } from 'react'

export const Login = () => {
    const[userLogin,setuserlogin]=useState(
        {
            email:"",
            password:""
        }
    );
    const [records,setRecords]=useState([]);
    const handleInput =(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(name);
        console.log(value);

        setuserlogin({...userLogin,[name]:value})
        

    }
    const handleSubmit=(e)=>{
        e.preventDefault();

        const newRecord={...userLogin, id: new Date().getTime().toString()}
        console.log(records);
        setRecords([...records,newRecord])
        console.log(records);
        setuserlogin({email:"",password:""});

    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={userLogin.email}
                        onChange={handleInput}
                    />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="exampleInputPassword1"
                        value={userLogin.password}
                        onChange={handleInput}
                    />
                </div>
                
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )
}
