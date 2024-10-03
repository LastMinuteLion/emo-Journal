'use client'
import React, { useState } from 'react'
import { Fugaz_One, Inter } from "next/font/google";
import Button from './Button';
const fugaz = Fugaz_One({ subsets: ["latin"],weight:['400'] });
import { useAuth } from '@/context/AuthContext';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [isRegister , setIsRegister] = useState(false);
    const [authenticating, setAuthenticating] = useState(false);

    const { signup, login } = useAuth()


    const handleSubmit = async () => {
        if (!email || !password || password.length < 6) {
            return
        }
        setAuthenticating(true)
        try {
            if (isRegister) {
                console.log('Signing up a new user')
                await signup(email, password)
            } else {
                console.log('Logging in existing user')
                await login(email, password)
            }

        } catch (err) {
            console.log(err.message)
        } finally {
            setAuthenticating(false)
        }
    }


  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4'>
        <h3 className={'text-4xl sm:text-5xl  ' + fugaz.className}>
            
            {isRegister ? 'Register' : 'Login'}

        </h3>
        <p>You're one step away!</p>

        <input value={email} onChange={(e) => {
            setEmail(e.target.value)
        }}
        
        className='w-full max-w-[400px] mx-auto px-3 py-2 sm:py-3 border
         border-solid border-indigo-400 duration-200 hover:border-indigo-600
         focus:border-indigo-600
         rounded-full outline-none 
         ' placeholder='Email'/>


        <input value={password} onChange={(e) => {
            setPassword(e.target.value)
        }}
        
        className='w-full max-w-[400px] mx-auto px-3 py-2 sm:py-3 border
        border-solid border-indigo-400
        duration-200 hover:border-indigo-600
        focus:border-indigo-600
        rounded-full outline-none
        ' placeholder='Password' type='password'/>
        <div className='max-w-[400px] w-full mx-auto'>

        <Button clickHandler = {handleSubmit}
        text = { authenticating ? 'Submitting' : "Submit"} full/>
        </div>
        <p className=' text-center'>
         {
            isRegister ? 'Already have an account ? ' : ' Don\'t have an account ? '
         }
         
       
        <button onClick={() => setIsRegister(!isRegister)}

         className='
        text-indigo-600
        '>{ isRegister ? 'Sign In' : 'Sign Up'}</button>
        
        </p>
    </div>
  )
}

export default Login