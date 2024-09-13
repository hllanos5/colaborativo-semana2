import React from 'react'

export default function Register() {
    return (
        <div className='w-full mt-4 lg:flex lg:items-center lg:justify-center lg:flex-col lg:h-screen'>

            <div className='mb-6 text-2xl font-semibold'>
                Register
            </div>

            <form className='w-full max-w-md flex flex-col items-center gap-y-4 lg:border-2 lg:border-blue-400 lg:rounded-md p-4' action="">

                <label className='w-full' htmlFor="">
                    <input className='text-black h-8 w-full rounded-lg p-2 border border-black' placeholder='Name' type="text" />
                </label>

                <label className='w-full' htmlFor="">
                    <input className='text-black h-8 w-full rounded-lg p-2 border border-black' placeholder='Last Name' type="text" />
                </label>

                <label className='w-full' htmlFor="fecha-nacimiento">
                    <input className='text-black h-8 w-full rounded-lg p-2 border border-black' placeholder='User Name' type="text" />
                </label>

                <label className='w-full' htmlFor="">
                    <input className='text-black h-8 w-full rounded-lg p-2 border border-black' placeholder='Email' type="text" />
                </label>

                <label className='w-full' htmlFor="">
                    <input className='text-black h-8 w-full rounded-lg p-2 border border-black' placeholder='Password' type="password" />
                </label>

                <button className='font-semibold w-36 h-10 mr-4 rounded-xl flex justify-center items-center bg-[#3b5ca8] lg:w-36 lg:h-10'>
                    <p className='text-[#ffcb05] lg:text-'>Resgister</p>
                </button>

            </form>
        </div>
    )
}