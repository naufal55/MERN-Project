import React from 'react'
import { RegisterBG } from '../../assets';
import { Input,Button, Gap, Link } from '../../components';
import './register.scss';

const Register = () => {
    return (
        <div className="main-page">
            <div className="left">
               <img src ={RegisterBG} className="bg-image" alt="imageBg"/>

               </div>
            <div className ="right">
                <p className="title">Register</p>
                <Input label = "Full Name" placeholder="Full Name" />
                <Gap height={20}/>
                <Input label = "Email" placeholder="Email" />
                <Gap height={20}/>
                <Input label = "password" placeholder="Password"/>
                <Gap height={50}/>
                <Button title = "Register"/>
                <Gap height={100}/>
                <Link title = "kembali ke login"/>
            </div>
        
                
            
        </div>
        
    )
}

export default Register
