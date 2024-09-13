import React from 'react'

export default function Register() {
    return (
        <div className='w-full mt-4 lg:flex lg:items-center lg:justify-center'>

            <div>
                Register
            </div>

            <form className='w-full max-w-md flex flex-col items-center gap-y-4' action="">

                <label className='w-full' htmlFor="">
                    <input className='text-black h-8 w-full rounded-lg p-2' placeholder='Name' type="text" />
                </label>

                <label className='w-full' htmlFor="">
                    <input className='text-black h-8 w-full rounded-lg p-2' placeholder='Last Name' type="text" />
                </label>

                <label className='w-full' htmlFor="fecha-nacimiento">
                    <input className='text-black h-8 w-full rounded-lg p-2' placeholder='User Name' type="date" />
                </label>

                <label className='w-full' htmlFor="">
                    <input className='text-black h-8 w-full rounded-lg p-2' placeholder='Email' type="text" />
                </label>

                <label className='w-full' htmlFor="">
                    <input className='text-black h-8 w-full rounded-lg p-2' placeholder='Password' type="password" />
                </label>

                <button className='font-semibold w-36 h-10 mr-4 rounded-xl flex justify-center items-center bg-[#3b5ca8] lg:w-36 lg:h-14'>
                    <p className='text-[#ffcb05] lg:text-'>Resgistrarse</p>
                </button>

            </form>
        </div>
    )
}