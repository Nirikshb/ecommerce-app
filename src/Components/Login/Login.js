import React, {useState} from 'react';

import {client} from '../../axios.Client';
import { PATHS } from '../../paths';


const Login = () =>{
    // setting up useState for updates
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


   const handleChange = (e) =>{
    const {name, value} = e.target;
    //using ternary operator for
    name == 'email' ? setEmail(value) : setPassword(value);
   };

   const handleLogin = () =>{
    setError('');
    if(email && password){
        const body = {email, password};
    }
   }

return (

    <div className='login-container'>
        <div className='login-header'>Login</div>
        
        <div className='login-head'>
        <Input 
        value={email}
        type='email'
        name='email'
        label='Password'
        onChange={handleChange}>
        </Input> 
     
        <Input 
        value={password}
        type='password'
        name='password'
        label='Password'
        onChange={handleChange}
        ></Input>

        <Button label="Login" onClick={handleLogin} />
        </div>
        {error && error}
    </div>
);
};

export default Login;