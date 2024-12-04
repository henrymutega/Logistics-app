"use client"
import { useState } from "react";

export default function Register(){
    const[email, setEmail] = useState("janes@gmal.com");
    const[password, setPassword] = useState("12345");
    const[loading, setLoading] = useState(false);

    return(
        <main>
            <div className="container">
                <div className="row d-flex, justify-content-center align-items-center vh-100">
                    <div className="col-lg-5 shadow bg-light p-5">
                        <h2 className="mb-4 text-center">
                            Login
                        </h2>
                        <form onSubmit="">
                            <input 
                            type="text" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control mb-4"
                            placeholder="Enter your email"
                            />
                            <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control mb-4"
                            placeholder="Enter your Password"
                            />
                            <button className="btn btn-primary text-capitalize btn-raised align-items-center" 
                            disabled={loading || !email || !password }>
                                {loading ? 'Please wait.. ' : "Login"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}