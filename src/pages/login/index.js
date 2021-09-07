import React from 'react'
import { LoginBG } from '../../assets';
import { Input,Button, Gap, Link } from '../../components';

const Login = () => {
    return (
        <div className="main-page">
        <div className="left">
           <img src ={LoginBG} className="bg-image" alt="imageBg"/>

           </div>
        <div className ="right">
            <p className="title">Register</p>
            <Input label = "Email" placeholder="Email" />
            <Gap height={20}/>
            <Input label = "password" placeholder="Password"/>
            <Gap height={50}/>
            <Button title = "Login"/>
            <Gap height={100}/>
            <Link title = "Belum punya akun, silahkan daftar"/>
        </div>
    </div>
    )
}

export default Login
