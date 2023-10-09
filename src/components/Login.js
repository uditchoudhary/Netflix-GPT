import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm]  = useState(true)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img 
                src='https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/2e29a2c3-8bd5-4e7d-a714-b0bdad5e2e78/NZ-en-20230911-popsignuptwoweeks-perspective_alpha_website_large.jpg' 
                alt='logo'/>    
        </div>
        <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign up"}</h1>
            {!isSignInForm && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
            <input type="text" placeholder='Email or phone number' className='p-4 my-4 w-full bg-gray-700'/>
            <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign up"}</button>
            {isSignInForm ? <div>
                <span className='text-gray-600'>New To Netflix?</span>
                <span onClick={toggleSignInForm} className='cursor-pointer'> Sign up now.</span>
                </div>
                :
                <div>
                <span className='text-gray-600'>Already registered?</span>
                <span onClick={toggleSignInForm} className='cursor-pointer'> Sign in now.</span>
                </div>
            }
        </form>
    </div>
  )
}

export default Login