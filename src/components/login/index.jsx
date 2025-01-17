import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';


const Login = ()=>{

    const token = Cookies.get("jwtToken");

    useEffect(()=>{

        if( token !== undefined ){

            navigate("/");

        }


    },[]);

    const [allValues,setValues] = useState({

        username : "",
        password : "",
        errorMsg : ""

    });

    const navigate = useNavigate();

    const onSubmitUserDetails = async(e)=>{

        e.preventDefault();

        const api = "https://apis.ccbp.in/login";

        const userDetails = {
            username: allValues.username,
            password: allValues.password
          }

        const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
        }

        try {

            const response = await fetch(api,options);

            const data = await response.json();

            if( response.ok === true ){

                setValues({...allValues,errorMsg : ""});

                Cookies.set("jwtToken",data.jwt_token);

                navigate("/");
            }
            else{

                setValues({...allValues,errorMsg : data.error_msg});

            }

            
        } catch (error) {

            console.log( error );
        }


    }


    return (

        <div className='login-cont'>

                <form onSubmit={onSubmitUserDetails}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input onChange={(e)=>{ setValues({...allValues,username :e.target.value })}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={(e)=>{ setValues({...allValues,password :e.target.value })}} type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <br />
                <b className='mt-2 text-danger'>{allValues.errorMsg}</b>
                </form>


        </div>

    )
}




export default Login;